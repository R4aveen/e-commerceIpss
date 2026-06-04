import { Route, Routes } from "react-router-dom";
import type { RouteProps } from "react-router-dom";
import headerRoutes from "@/routes/headerRoutes";

const HeaderRouter = () => {
  return (
    <Routes>
      {headerRoutes.map((routeProps: RouteProps, index: number) => (
        <Route key={routeProps.path || index} {...routeProps} />
      ))}
    </Routes>
  );
};

export default HeaderRouter;
