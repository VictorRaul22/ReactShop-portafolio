import React from 'react'
import "@styles/Link.scss"
function Link(props) {
  return (
    <a href={props.href} className="Link">{props.children || props.value}</a>
  )
}

export {Link}