import React from 'react'
import "../../styles/Texto.scss";
function Texto(props) {
  const {bold,thin,sm,lg,inline,gray} = props;
  const clases=`Texto 
  ${bold?'Texto-bold':''} 
  ${thin?'Texto-thin':''}
  ${sm?'Texto-size-sm':''}
  ${lg?'Texto-size-lg':''}
  ${inline?'Texto-inline':''}
  ${gray?'Texto-gray':''}
  `.replaceAll(/\s+/g, " ");
  return (
    <p 
      className={clases}
    >
      {props.text || props.children}
    </p>
  )
}

export {Texto}