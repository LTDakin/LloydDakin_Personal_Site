import styled from 'styled-components'

const Img = styled.img`
  height: 40px;
  transition: 0.6s;

  &:hover {
    transform: scale(1.2);
  }
`

function SocialsIcon(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <Img
        className="social-icon"
        src={props.src}
        alt={props.alt ?? ""}
        style={{ height: "40px", }}
      />
    </a>
  );
}

export default SocialsIcon;
