import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { RiCloseCircleLine } from 'react-icons/ri';

import {
  Backgroud,
  Body,
  CloseButton,
  Container,
  Content,
  Footer,
  FooterContainer,
  Header,
  Title,
} from './styles';

export interface ModalProps {
  children: ReactNode;
  isShowing: boolean;
  hide: () => void;
  title: string;
  footer?: ReactNode;
  justifyContent?: string;
  width?: string;
  height?: string;
  btnWidth?: string;
  isCloseButton?: boolean;
}

const Modal = ({
  children,
  isShowing,
  hide,
  title,
  footer,
  justifyContent,
  width,
  height,
  btnWidth,
  isCloseButton,
}: ModalProps) =>
  isShowing
    ? createPortal(
        <>
          <Backgroud />
          <Container>
            <Content width={width} height={height}>
              <Header>
                <Title>{title}</Title>
              </Header>
              {isCloseButton && (
                <CloseButton onClick={hide}>
                  <RiCloseCircleLine />
                </CloseButton>
              )}

              <Body>{children}</Body>
              <Footer>
                <FooterContainer
                  justifyContent={justifyContent}
                  btnWidth={btnWidth}
                >
                  {footer}
                </FooterContainer>
              </Footer>
            </Content>
          </Container>
        </>,
        document.body
      )
    : null;

export default Modal;
