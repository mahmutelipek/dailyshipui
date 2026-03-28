"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  clearOnEscape?: boolean;
}

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, type, clearOnEscape, onKeyDown, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (clearOnEscape && e.key === "Escape") {
        e.currentTarget.value = "";
        e.currentTarget.blur();
      }
      onKeyDown?.(e);
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border-0 bg-white px-4 py-2 text-sm text-black placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#f6339a]/20 transition-all",
          className
        )}
        ref={ref}
        onKeyDown={handleKeyDown}
        {...props}
      />
    );
  }
);
BaseInput.displayName = "BaseInput";

export { BaseInput };
