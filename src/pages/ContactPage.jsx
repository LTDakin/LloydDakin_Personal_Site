import { useRef } from 'react';
import styled from 'styled-components';
import PageHeader from '../components/PageHeader';

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
  border: var(--off-black) solid 3px;
  min-height: 300px;
  padding: 5px;
  transition: var(--transition-speed);

  &:focus {
    outline: none;
    background-color: var(--off-black);
    color: var(--off-white);
  }
`;

const Input = styled.input`
  width: 100%;
  border: var(--off-black) solid 3px;
  padding: 5px;
  transition: var(--transition-speed);

  &:focus {
    outline: none;
    background-color: var(--off-black);
    color: var(--off-white);
  }
`;

const SubmitInput = styled.input`
  background-color: var(--off-black);
  color: var(--off-white);
  font-size: 2em;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 60px;
  padding-right: 60px;
  border: var(--off-black) solid 3px;
  transition: var(--transition-speed);
  margin-top: 40px;

  &:hover {
    color: var(--off-black);
    background-color: var(--off-white);
  }
`;

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Email disabled for now');
  };

  return (
    <>
      <PageHeader title="Let's connect" />
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
