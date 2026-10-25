"use client";

import { useEffect } from "react";

/**
 * Marks every `[data-inview]` element with `data-inview="on"` the first time it scrolls
 * into the viewport. The wave stroke animations in marketing-page.css start on that
 * attribute, so they draw when seen rather than on page load. An element the visitor
 * jumps past (anchor link, fast scroll) is marked as well, so it is simply shown drawn
 * when they come back to it.
 */
export function InViewAnimations() {
  useEffect(() => {
    const pending = new Set(
      Array.from(document.querySelectorAll<HTMLElement>("[data-inview]")).filter((el) => el.dataset.inview !== "on"),
    );
    if (pending.size === 0) return;

    const mark = (el: HTMLElement) => {
      el.dataset.inview = "on";
      pending.delete(el);
      observer?.unobserve(el);
      if (pending.size === 0) stop();
    };

    const markScrolledPast = () => {
      for (const el of pending) {
        if (el.getBoundingClientRect().bottom < 0) mark(el);
      }
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        markScrolledPast();
      });
    };

    const observer =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.isIntersecting) mark(entry.target as HTMLElement);
              }
            },
            { threshold: 0.3, rootMargin: "0px 0px -10% 0px" },
          );

    const stop = () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };

    if (!observer) {
      for (const el of Array.from(pending)) mark(el);
      return;
    }
    for (const el of pending) observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    markScrolledPast();
    return stop;
  }, []);

  return null;
}
