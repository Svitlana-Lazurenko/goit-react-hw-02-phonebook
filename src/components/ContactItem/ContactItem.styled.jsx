import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;

  background-color: rgb(4, 36, 7);
  border-radius: 10px;
  border: 2px solid rgb(53, 202, 8);

  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Text = styled.span`
  font-size: 27px;
  letter-spacing: 4px;
`;

export const Button = styled.button`

// --green: rgb(53, 202, 8);

  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  padding: 10px 20px;

  border-radius: 0.6em;
  border: 2px solid rgb(53, 202, 8);
  background: linear-gradient(
    to right,
    rgba(27, 253, 156, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(27, 253, 156, 0.1) 100%
  );
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4),
    0 0 9px 3px rgba(27, 253, 156, 0.1);

  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color:rgb(53, 202, 8);
 
  :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    color: rgb(240, 255, 236);
    box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6),
      0 0 9px 3px rgba(27, 253, 156, 0.2);
  }

  :before {
    content: '';
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(27, 253, 156, 0.1) 40%,
      rgba(27, 253, 156, 0.1) 60%,
      transparent 100%
    );
  }

  :hover:before {
    transform: translateX(15em);
`;
