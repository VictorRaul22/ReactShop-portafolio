import React from "react";
import "@styles/LinkMobile.scss"

function LinkMobile({ href, children, value,thin,green }) {
  return (
    <li className={`LinkMobile ${thin?'LinkMobile-thin':''} ${green?'LinkMobile-green':''}`}>
      <a href={href}>{children || value}</a>
    </li>
  );
}

export {LinkMobile};
