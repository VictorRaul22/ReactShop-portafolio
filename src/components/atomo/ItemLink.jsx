import React from 'react'
import "@styles/ItemLink.scss";
function ItemLink(props) {
  return (
    <li className={`
      ItemLink 
      ${props.end?'ItemLink-align-end':''}
      ${props.bold?'ItemLink-font-bold':''}
      ${props.black?'ItemLink-black':''}
      ${props.inlineBlock?'ItemLink-inline-block':''}
      ${props.green?'ItemLink-green':''}
      `.replaceAll(/\s+/g, " ")
    }>
      <a href={props.link}>{props.name}</a>
    </li>
  )
}

export {ItemLink}