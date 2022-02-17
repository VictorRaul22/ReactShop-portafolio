import React from 'react';
import "@styles/Label.scss";
function Label(props) {
  return (
    <label htmlFor={props.for}
    className={`
    Label 
    ${props.mr && 'Label-mr'}
    ${props.edit?'Label-edit':''}
    ${props.mr12?'Label-mr12':''}
    `.replaceAll(/\s+/g," ")}
    >{props.text || props.children}</label>
  );
}

export {Label}