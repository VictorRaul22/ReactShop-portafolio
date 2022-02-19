import React from 'react'
import { FormContainer } from '@containers/FormContainer';
import {Button} from '@atomo/Button';
import { Link } from '@atomo/Link';
import {Texto} from '@atomo/Texto';
import { Label } from '@atomo/Label';
import {Input} from "@atomo/Input"
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