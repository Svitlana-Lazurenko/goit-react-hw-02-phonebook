import styled from '@emotion/styled';

export const Block = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 40px;

  border: 2px solid rgb(53, 202, 8);
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgb(53, 202, 8), 0 0 1em rgb(53, 202, 8);
`;

export const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  letter-spacing: 7px;
  text-align: center;

  margin-bottom: 80px;

  @keyframes flickering {
    0%,
    100% {
      opacity: 1;
    }

    41.99% {
      opacity: 1;
    }

    42% {
      opacity: 0;
    }

    43% {
      opacity: 0;
    }

    43.01% {
      opacity: 1;
    }

    47.99% {
      opacity: 1;
    }

    48% {
      opacity: 0;
    }

    49% {
      opacity: 0;
    }

    49.01% {
      opacity: 1;
    }
  }

  animation: flickering 4s linear infinite both;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 7px;
  text-align: center;

  margin-bottom: 70px;

  @keyframes flickering {
    0%,
    100% {
      opacity: 1;
    }

    41.99% {
      opacity: 1;
    }

    42% {
      opacity: 0;
    }

    43% {
      opacity: 0;
    }

    43.01% {
      opacity: 1;
    }

    47.99% {
      opacity: 1;
    }

    48% {
      opacity: 0;
    }

    49% {
      opacity: 0;
    }

    49.01% {
      opacity: 1;
    }
  }

  animation: flickering 6s linear infinite both;
`;
