import { Route, Routes } from "react-router-dom";
import type { RouteProps } from "react-router-dom";
import footerRoutes from "../../routes/footerRoutes";

const FooterRouter = () => {
  return (
    <Routes>
      {footerRoutes.map((routeProps: RouteProps, index: number) => (
        <Route key={routeProps.path || index} {...routeProps} />
      ))}
    </Routes>
  );
};

export default FooterRouter;
