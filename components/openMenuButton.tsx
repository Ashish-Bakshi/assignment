"use client";
import { useState } from "react";
import FloatingMenu from "./floatingMenu";

export default function OpenMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-2 rounded-full bg-[#1556c9] text-white text-lg shadow-sm hover:bg-[#174fc0] active:scale-95 transition-all duration-200"
      >
        Open Menu
      </button>

      {open && <FloatingMenu onClose={() => setOpen(false)} />}
    </div>
  );
}
