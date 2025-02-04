'use client';

import { ArrowUpIcon } from "lucide-react";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
}
