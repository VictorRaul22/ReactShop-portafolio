import React from 'react'
import { FormContainer } from '../containers/FormContainer';
import {Button} from '../components/atomo/Button';
import { Label } from '../components/atomo/Label';
import { Input } from '../components/atomo/Input';
import "../styles/EmailSent.scss";
function NewPassword() {
  return (
    <FormContainer 
      center gap logo WithHeader
      title="Create a new password"
      subtitle="Enter a new password for yout account"
      >
      <Label for="password" mr>Password</Label>
      <Input key={1} type="password" id="password" placeholder="*********" mr22/>

      <Label for="password" mr>Password</Label>
      <Input key={2}type="password" id="password2" placeholder="*********" mr12/>

      <Button type="submit">Confirm</Button>

    </FormContainer>
    
  )
}

export {NewPassword}