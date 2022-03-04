import React from "react";
import reactDom from "react-dom";
import "@styles/Aside.scss";
function Aside({ children, toggleOrders }) {
  console.log(toggleOrders);

  return <aside className={`Aside`}>{children}</aside>;
}

export { Aside };
