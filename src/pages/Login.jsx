import React from 'react'
import { Input } from '../components/atomo/Input'
import { Label } from '../components/atomo/Label'
import { Logo } from '../components/atomo/Logo'
import {FormContainer} from "../containers/FormContainer"
import {Link} from "../components/atomo/Link"
import '../styles/Login.scss'
import {Button} from '../components/atomo/Button'
function Login() {
  return (
    <React.Fragment>
      <FormContainer WithHeader logo>
          <Label for="email" mr>Email address</Label>
          <Input type="email" id="email" name="email" placeholder="example@example.com" mr22/>

          <Label for="password" mr>Password</Label>
          <Input type="password" id="password" placeholder="*********" mr12/>
          
          <Button type="submit" >Log in</Button>
          <Link href="/">Forgot my password</Link>

          <Button type="button" secondary>Sign up</Button>
      </FormContainer>
    </React.Fragment>
  )
}

export {Login}