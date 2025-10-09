import * as React from "react";
import "./Button.css";
//import { cn } from "../../lib/utils";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={'px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition ${className}'}
      {...props}
    >
      {children}
    </button>
  );
}
