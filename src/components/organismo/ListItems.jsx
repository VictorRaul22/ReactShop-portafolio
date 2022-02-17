import React from 'react'
import "../../styles/ListItems.scss"
function ListItems(props) {
  return (
    <li className={`ListItems ${props.none && "ListItems-none"}`}>{`${props.nameList} ▼`}
      {props.children}
    </li>
  )
}

export {ListItems}