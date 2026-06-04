import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import type { RouteProps } from "react-router-dom";
import contentRoutes from "../../routes/contentRoutes";
import Container from "../layout/Container/Container";
import PageWrapper from "../layout/PageWrapper/PageWrapper";
import Header, {
  HeaderLeft,
  HeaderRight,
} from "../layout/Header/Header";
import Subheader, {
  SubheaderLeft,
} from "../layout/Subheader/Subheader";

const ContentRouter = () => {
  return (
    <Suspense
      fallback={
        <>
          <Header>
            <HeaderLeft>Cargando...</HeaderLeft>
            <HeaderRight></HeaderRight>
          </Header>
          <PageWrapper>
            <Subheader>
              <SubheaderLeft>Preparando contenido</SubheaderLeft>
            </Subheader>
            <Container className="text-center mt-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </Container>
          </PageWrapper>
        </>
      }
    >
      <PageWrapper>
        <Routes>
          {contentRoutes.map((route: RouteProps, index: number) => (
            <Route
              key={route.path || index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </PageWrapper>
    </Suspense>
  );
};

export default ContentRouter;
