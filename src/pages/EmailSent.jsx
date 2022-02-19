import React from 'react'
import { FormContainer } from '@containers/FormContainer';
import {Button} from '@atomo/Button';
import { Link } from '@atomo/Link';
import {Texto} from '@atomo/Texto';
import message from "@icons/email.svg"
import "@styles/EmailSent.scss";
function EmailSent() {
  return (
    <FormContainer 
      center gap logo WithHeader
      title="Email has been sent!"
      subtitle="Please check your inbox for instructions on how to reset the password"
      >
      <div className="email-image">
        <img src={message} alt="email"/>
      </div>

      <Button type="submit">Login</Button>

      <Texto>
        <span>Didn't receive the email?  </span>
        <Link href="/">Resent</Link>
      </Texto>
    </FormContainer>
  )
}

export {EmailSent}