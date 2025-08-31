"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  showCursor?: boolean;
  cursorChar?: string;
  loop?: boolean;
}

export default function TypingAnimation({
  texts,
  className = "",
  typingSpeed = 0.08,
  deleteSpeed = 0.04,
  pauseTime = 2,
  showCursor = true,
  cursorChar = "|",
  loop = true,
}: TypingAnimationProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const currentTextIndex = useRef(0);
  const isTyping = useRef(false);
  useEffect(() => {
    if (!textRef.current || texts.length === 0) return;
    const element = textRef.current;
    let timelineInstance: gsap.core.Timeline;
    function typeText() {
      if (isTyping.current) return;

      const currentText = texts[currentTextIndex.current];
      isTyping.current = true;

      timelineInstance = gsap.timeline({
        onComplete: () => {
          isTyping.current = false;
          if (loop && texts.length > 1) {
            currentTextIndex.current =
              (currentTextIndex.current + 1) % texts.length;
            setTimeout(typeText, pauseTime * 1000);
          }
        },
      });

      timelineInstance.call(() => {
        element.innerHTML = showCursor
          ? `<span class="typing-cursor">${cursorChar}</span>`
          : "";
      });
      // タイピングアニメーション
      for (let i = 0; i <= currentText.length; i++) {
        timelineInstance.call(
          () => {
            element.innerHTML =
              currentText.slice(0, i) +
              (showCursor
                ? `<span class="typing-cursor">${cursorChar}</span>`
                : "");
          },
          [],
          i * typingSpeed
        );
      }

      // 削除アニメーション（ループの場合のみ）
      if (loop && texts.length > 1) {
        timelineInstance.to({}, { duration: pauseTime });

        for (let i = currentText.length; i >= 0; i--) {
          timelineInstance.call(
            () => {
              element.innerHTML =
                currentText.slice(0, i) +
                (showCursor
                  ? `<span class="typing-cursor">${cursorChar}</span>`
                  : "");
            },
            [],
            currentText.length * typingSpeed +
              pauseTime +
              (currentText.length - i) * deleteSpeed
          );
        }
      }
    }

    // カーソーの点滅アニメーション
    if (showCursor) {
      gsap.to(".typing-cursor", {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }

    // アニメーション開始
    typeText();

    // クリーンアップ
    return () => {
      if (timelineInstance) {
        timelineInstance.kill();
      }
      isTyping.current = false;
    };
  }, [
    texts,
    typingSpeed,
    deleteSpeed,
    pauseTime,
    showCursor,
    cursorChar,
    loop,
  ]);
  return (
    <span ref={textRef} className={`${className}`}>
      {showCursor && <span className="typing-cursor">{cursorChar}</span>}
    </span>
  );
}

