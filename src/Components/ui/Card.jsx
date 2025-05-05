import React from "react";
import classNames from "classnames";

export function Card({ children, className }) {
  return (
    <div
      className={classNames(
        "rounded-2xl shadow-md bg-white border border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={classNames("p-4", className)}>
      {children}
    </div>
  );
}
