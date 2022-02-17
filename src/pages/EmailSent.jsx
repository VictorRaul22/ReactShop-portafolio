import React from 'react'
import { FormContainer } from '../containers/FormContainer';
import message from "@icons/email.svg"
import {Button} from '../components/atomo/Button';
import { Link } from '../components/atomo/Link';
import {Texto} from '../components/atomo/Texto';
import "../styles/EmailSent.scss";
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