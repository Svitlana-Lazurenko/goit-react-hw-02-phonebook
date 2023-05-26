import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 60px;
`;

export const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const LabelNumber = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  display: block;
  margin-bottom: 5px;
  margin-left: 20px;
  letter-spacing: 3px;
`;

export const Input = styled.input`
  height: 35px;
  padding: 10px 25px;

  background: transparent;
  box-shadow: -2px -2px 8px rgb(53, 202, 8) inset;
  border-radius: 10px;
  border: 2px solid rgb(53, 202, 8);
  outline-color: rgb(53, 202, 8);

  font-size: 20px;
  color: rgb(240, 240, 240);
  text-shadow: 0 0 1em rgb(53, 202, 8);
  font-family: monospace;
`;

export const Button = styled.button`
  height: 40px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px 20px;

  display: block;
  overflow: hidden;
  position: relative;
  transition: 0.5s;

  background-color: transparent;
  border: none;

  color: rgb(240, 240, 240);
  text-shadow: 0 0 1em rgb(53, 202, 8);
  font-size: 15px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 4px;

  :hover {
    background: #03f40f;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03f40f, 0 0 25px #03f40f, 0 0 50px #03f40f,
      0 0 100px #03f40f;
  }
`;

export const Span = styled.span`
  position: absolute;
  display: block;

  @keyframes btn-anim {
    0% {
      left: -100%;
    }

    50%,
    100% {
      left: 100%;
    }
  }

  :first-of-type {
    bottom: 2px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03f40f);
    animation: btn-anim 2s linear infinite;
  }
`;
