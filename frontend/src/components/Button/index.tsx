import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, disabled, ...rest }: IButtonProps) => (
  <Container disabled={disabled} {...rest}>
    {children}
  </Container>
);

export default Button;
