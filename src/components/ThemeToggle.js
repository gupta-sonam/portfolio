"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Avoid mismatch on first load

  return (
    <button >
      Toggle
    </button>
  );
}
