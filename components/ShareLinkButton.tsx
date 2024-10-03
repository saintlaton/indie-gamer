"use client";

import { useState } from "react";
import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";

function ShareLinkButton() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClick(true);
    setTimeout(() => setClick(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className="flex gap-1 items-center border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
    >
      <CursorArrowRippleIcon className="w-5 h-5 inline" />
      {click ? "Link copied" : "Share link"}
    </button>
  );
}

export default ShareLinkButton;
