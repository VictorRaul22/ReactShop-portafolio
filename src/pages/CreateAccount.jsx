import React from 'react'
import { Input } from '@atomo/Input'
import { Label } from '@atomo/Label'
import {FormContainer} from "@containers/FormContainer"
import '@styles/Login.scss'
import {Button} from '@atomo/Button'
function CreateAccount() {
  return (
    <React.Fragment>
      <FormContainer WithHeader title="My account" heightAll>
        <div>
          <Label for="name" mr>Name</Label>
          <Input type="text" id="name" name="name" placeholder="example" mr22/>

          <Label for="email" mr>Email</Label>
          <Input type="email" id="email" name="email" placeholder="example@example.com" mr22/>
          
          <Label for="password" mr>Password</Label>
          <Input type="password" id="password" name="password" placeholder="*********" mr12/>
        </div>
        <Button type="submit" >Create</Button>
      </FormContainer>
    </React.Fragment>
  )
}

export {CreateAccount}