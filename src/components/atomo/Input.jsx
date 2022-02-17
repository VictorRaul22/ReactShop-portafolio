import React from 'react'
import "@styles/Input.scss"
function Input(props) {
  const {
    type="text",
    placeholder="",
    id="",
    name="",
    secondaryBtn,
    value,
    mr22,
    mr12,
  }=props;
  const clases= `
    Input 
    ${type==="search"?'Input-search':''}
    ${secondaryBtn?'Input-secondary-btn':''}
    ${mr22?'Input-mr22':''}
    ${mr12?'Input-mr12':''}
    `.replaceAll(/\s+/g," ");
    
  if(value){
    return(
      <input
      type={type} 
      id={id} name={name} placeholder={placeholder} value={value} className={clases}/>)
  }else{
    return (
      <input
      type={type} 
      id={id} name={name} placeholder={placeholder}  className={clases}/>
    )
  }
}

export {Input}