import { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import BackButton from '../components/BackButton';

const EmailForm = styled.form`
  font-family: coolvetica;
  padding: 40px;
`;

const Label = styled.label`
  font-size: 2em;
  margin-top: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 40%;
  border: black solid 3px;
  min-height: 300px;
  padding: 5px;
  transition: 0.6s ease-in-out;

  &:focus {
    outline: none;
    background-color: black;
    color: white;
  }
`;

const Input = styled.input`
  width: 100%;
  border: black solid 3px;
  padding: 5px;
  transition: 0.6s ease-in-out;

  &:focus {
    outline: none;
    background-color: black;
    color: white;
  }
`;

const SubmitInput = styled.input`
  background-color: black;
  color: white;
  font-size: 2em;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 60px;
  padding-right: 60px;
  border: black solid 3px;
  transition: 0.6s ease;
  margin-top: 40px;

  &:hover {
    color: black;
    background-color: white;
  }
`;

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById('sendButton').value = 'Sent!';
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="page-header d-flex justify-content-between">
        <h1 style={{ fontFamily: 'coolvetica', fontSize: '4em' }}>
          Let's connect
        </h1>
        <BackButton />
      </div>
      <EmailForm ref={form} onSubmit={sendEmail}>
        <Label>Name</Label>
        <Input type="text" name="user_name" />

        <Label>Email</Label>
        <Input type="email" name="user_email" />

        <Label>Message</Label>
        <TextArea name="message" />

        <SubmitInput
          id="sendButton"
          className="form-submit-button"
          type="submit"
          value="Send"
        />
      </EmailForm>
    </>
  );
}

export default ContactPage;
