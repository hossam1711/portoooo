"use client";
import { useEffect } from "react";

/**
 * ScrollFix Component
 * يحل مشكلة توقف الاسكرول في Next.js بعد الرجوع للصفحة أو إغلاق Modal/Menu
 * الطريقة: يضبط overflow على auto عند التركيب ويصلح الـ focus
 */
export default function ScrollFix() {
  useEffect(() => {
    // يرجع overflow الطبيعي
    document.body.style.overflow = "auto";

    // يضمن أن الاسكرول يرجع لما الصفحة تاخد focus
    const handleFocus = () => {
      document.body.style.overflow = "auto";
    };
    window.addEventListener("focus", handleFocus);

    // تنظيف Event Listener عند التفكيك
    return () => {
      window.removeEventListener("focus", handleFocus);
      document.body.style.overflow = "auto";
    };
  }, []);

  return null;
}