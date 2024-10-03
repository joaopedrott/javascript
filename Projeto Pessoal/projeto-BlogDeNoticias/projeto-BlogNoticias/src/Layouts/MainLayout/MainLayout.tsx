import { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Container, Main } from "./MainLayout.styles";

interface MAinLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MAinLayoutProps) {
  return (
    <Container>
      <Header />

      <Main>{children}</Main>
    </Container>
  );
}
