import React from 'react'
import { FormContainer } from '../containers/FormContainer';
import {Button} from '../components/atomo/Button';
import { Link } from '../components/atomo/Link';
import {Texto} from '../components/atomo/Texto';
import { Label } from '../components/atomo/Label';
import {Input} from "../components/atomo/Input"
// import "../styles/PasswordRecovery.scss";
function PasswordRecovery() {
  return (
    <FormContainer 
      center gap logo WithHeader
      title="Password recovery"
      subtitle="Inform the email address used to create your account"
      >
      <Label for="email" mr>Email address</Label>
      <Input name="email" id="email" type="email" placeholder="example@example.com"mr12/>
      <Button type="submit">Submit</Button>
      <Link href="/">Back to log in</Link>
      
    </FormContainer>
  )
}

export {PasswordRecovery}