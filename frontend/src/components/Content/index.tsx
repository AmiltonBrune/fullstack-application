import { ReactNode } from 'react';

import { Container } from './styles';

interface ContentProps {
  children: ReactNode;
}

const Content = ({ children }: ContentProps) => (
  <Container>{children}</Container>
);

export default Content;
