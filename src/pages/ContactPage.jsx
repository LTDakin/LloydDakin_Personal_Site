import styled from 'styled-components';
import PageHeader from '../components/PageHeader';

function ContactPage() {
  function sendEmail(e) {
    e.preventDefault();
    console.log('Email disabled for now');
  };

  return (
    <>
      <PageHeader title="Let's connect" />
      <EmailForm onSubmit={sendEmail}>
        <label>Name</label>
        <Input type="text" name="user_name" />
        <label>Email</label>
        <Input type="email" name="user_email" />
        <label>Message</label>
        <TextArea name="message" />
        <SubmitButton
          id="sendButton"
          className="form-submit-button"
          type="submit"
          value="Send"
        />
      </EmailForm>
    </>
  );
}

const EmailForm = styled.form`
  font-family: coolvetica;
  padding: 40px;
  padding-top: var(--base-padding);

  label {
    font-size: 2em;
    margin-top: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: var(--off-black) solid 3px;
  padding: 5px;
  margin-bottom: var(--base-margin);
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
  background-color: var(--off-black);
  color: var(--off-white);
  font-size: 2em;
  font-weight: bolder;
  padding: 10px 60px;

  &:hover {
    color: var(--off-black);
    background-color: var(--off-white);
  }
`;

export default ContactPage;
