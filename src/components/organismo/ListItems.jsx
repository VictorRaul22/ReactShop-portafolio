import React from 'react'
import "@styles/ListItems.scss"
function ListItems(props) {
  const [toggle,setToggle]=React.useState(false);
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
    <li className={`ListItems ${props.none && "ListItems-none"}`}
    onClick={handleToggle}
    >{`${props.nameList} ▼`}
      {
        !!toggle &&
        props.secondNav
      }
    </li>
  )
}

export {ListItems}