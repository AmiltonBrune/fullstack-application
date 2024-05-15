import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: IButtonProps) => (
  <Container {...rest}>{children}</Container>
);

export default Button;
