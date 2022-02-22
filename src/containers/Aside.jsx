import React from 'react'
import "@styles/Aside.scss"
function Aside({children,toggleOrders}) {
  
  return (
    <aside className={`Aside`}>
      {children}
    </aside>
  )
}

export {Aside}