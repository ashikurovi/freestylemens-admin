import React from "react";

/**
 * BD Taka (৳) icon – use instead of DollarSign for currency/money across the app.
 * Accepts same props as Lucide icons (className, size, etc.) for drop-in replacement.
 */
const BdtIcon = ({ className = "", style = {}, ...props }) => (
  <span
    className={`inline-flex items-center justify-center text-lg font-bold leading-none ${className}`}
    style={style}
    aria-hidden="true"
    {...props}
  >
    ৳
  </span>
);

export default BdtIcon;
