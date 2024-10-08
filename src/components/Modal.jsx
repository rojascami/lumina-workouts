"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children, onClick}){
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6"
      >
        {children}
      </div>
    </div>
  );
}