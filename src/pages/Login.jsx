import React,{useRef} from 'react'
import { Input } from '@atomo/Input'
import { Label } from '@atomo/Label'
import {FormContainer} from "@containers/FormContainer"
import {Link} from "@atomo/Link"
import '@styles/Login.scss'
import {Button} from '@atomo/Button'
function Login() {
  const handleSubmit=(e,form)=>{
    e.preventDefault();
    const formData=new FormData(form.current);
    const data={
      username:formData.get('email'),
      password:formData.get('password')
    }
    console.log(data)
  }
  return (
    <React.Fragment>
      <FormContainer WithHeader logo onSubmit={handleSubmit}>
          <Label for="email" mr>Email address</Label>
          <Input type="email" id="email" name="email" placeholder="example@example.com" mr22/>

          <Label for="password" mr>Password</Label>
          <Input type="password" id="password" name="password" placeholder="*********" mr12/>
          
          <Button type="submit" >Log in</Button>
          <Link href="/">Forgot my password</Link>
        <Button type="button" secondary>Sign up</Button>
      </FormContainer>
    </React.Fragment>
  )
}

export {Login}