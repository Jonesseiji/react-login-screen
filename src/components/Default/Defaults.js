import styled from "styled-components";

export const Input = styled.input`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
`;

export const Span = styled.span`
  display: flex;
`;

export const Label = styled.label`
  display: flex;
`;

export const Icon = styled.i`
  display: flex;
  color: inherit;
`;

export const LoaderIcon = styled(Icon)`
  border-color: #3d5af1 transparent #3d5af1 transparent;
  border-radius: 50%;
  animation: spin-anim 1.2s linear infinite;
  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
