import React, { useContext } from "react";
import "@styles/Layout.scss";
import { Header } from "@organismo/Header";
import AppContext from "@context/AppContext";
function Layout({ children }) {
  const { toggleOrders } = useContext(AppContext);
  return (
    <div className={`Layout ${toggleOrders ? "Layout-hidden-scroll" : ""}`}>
      <Header />
      {children}
    </div>
  );
}

export { Layout };
