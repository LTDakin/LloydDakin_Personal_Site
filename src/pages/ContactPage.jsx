import styled from 'styled-components';
import PageHeader from '../components/PageHeader';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactPage() {
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef()

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm('portfolio_email_ltd', 'template_suf510p', formRef.current, {
        publicKey: '5l7cVpttvJdNUjFKg',
      })
      .then(
        () => {
          setIsSent(true);
        },
        (error) => {
          // silently fail
          console.log('FAILED...', error.text);
          setIsSent(true);
        }
      );
  }

  return (
    <>
      <PageHeader title="Let's connect" />
      <EmailForm ref={formRef} onSubmit={sendEmail}>
        <label for="name">Name</label>
        <Input type="text" id="name" name="user_name" />
        <label for="email">Email</label>
        <Input type="email" id="email" name="user_email" />
        <label for="msg">Message</label>
        <TextArea name="message" id="msg" />
        <SubmitButton
          id="sendButton"
          className="form-submit-button"
          type="submit"
          value={isSent ? 'Sent!' : 'Send'}
          disabled={isSent}
        />
      </EmailForm>
    </>
  );
}

const EmailForm = styled.form`
  font-family: var(--text-font);
  padding: var(--large-padding);
  padding-top: var(--base-padding);

  label {
    font-size: 2em;
  }
`;

const Input = styled.input`
  width: 90%;
  border: var(--black-border);
  padding: var(--base-padding);
  margin-bottom: var(--base-margin);
  margin-top: var(--base-margin);
  transition: var(--transition-speed);

  &:focus {
    outline: none;
    background-color: var(--off-black);
    color: var(--off-white);
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  height: 40%;
  min-height: 300px;
`;

const SubmitButton = styled(Input)`
  width: auto;
  background-color: var(--off-white);
  color: var(--off-black);
  font-size: 2em;
  font-weight: bolder;
  padding: 10px 60px;

  @media (hover: hover) {
    &:hover {
      color: var(--off-white);
      background-color: var(--off-black);
    }
  }

  &:active {
    border: var(--white-border);
  }
`;

export default ContactPage;
