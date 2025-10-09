import * as React from "react";
import "./Card.css";
//import { cn } from "../../lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={'rounded-2xl border shadow-md bg-white p-4 ${className}'}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={'p-2 $ {className}'} {...props}>
      {children}
    </div>
  );
}
