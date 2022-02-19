import React from 'react'
import { Input } from '@atomo/Input'
import { Label } from '@atomo/Label'
import {FormContainer} from "@containers/FormContainer"
// import '../styles/Login.scss'
import {Button} from '@atomo/Button'
function MyAccount() {
  const [edit,setEdit]=React.useState(false)
  return (
    <React.Fragment>
      <FormContainer WithHeader heightAll title="My account">
        <div>
        <Label for="name" mr>Name</Label>
          {
            edit
            ?<Label edit mr12>testName</Label>
            :<Input type="text" id="name" name="name" placeholder="example" mr22/>
          }

          <Label for="email" mr>Email</Label>
          {
            edit
            ?<Label edit mr12>Test email</Label>
            :<Input type="email" id="email" name="email" placeholder="example@example.com" mr22/>
          }
          
          
          <Label for="password" mr>Password</Label>
          {
            edit
            ?<Label edit mr12>*************</Label>
            :<Input type="password" id="password" name="password" placeholder="*********" mr12/>
          }
        </div> 
        {
          edit
          ?<Button type="submit" secondary >Edit</Button>
          :<Button type="submit" >Edit</Button>
        }
          
      </FormContainer>
    </React.Fragment>
  )
}

export {MyAccount}