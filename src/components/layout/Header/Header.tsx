import { type FC, type HTMLAttributes, type ReactNode, useRef } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import useTheme from "@/hooks/useTheme";
import "./Header.css";

interface IHeaderLeftProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
export const HeaderLeft: FC<IHeaderLeftProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Header/HeaderLeft"
      className={classNames("d-flex align-items-center gap-3", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
HeaderLeft.displayName = "HeaderLeft";

interface IHeaderRightProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}
export const HeaderRight: FC<IHeaderRightProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Header/HeaderRight"
      className={classNames(
        "d-flex align-items-center gap-3 ms-auto",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
HeaderRight.displayName = "HeaderRight";

interface IHeaderProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}
const Header: FC<IHeaderProps> = (props) => {
  const { children, className, ...rest } = props;
  const divRef = useRef<HTMLElement>(null);
  const theme = useTheme();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const hasBorder = theme.borderWidth !== "border-0";

  if (isHomePage) {
    return (
      <div className="position-absolute top-0 start-0 w-100" style={{ zIndex: 1020 }}>
        <div className="bg-black text-white text-center py-1">
          <p className="m-0 small text-uppercase" style={{ letterSpacing: '0.08em' }}>hola</p>
        </div>
        <header
          ref={divRef}
          data-component-name="Header"
          className={classNames(
            "w-100 d-flex justify-content-between p-3 shadow-sm bg-body-tertiary",
            className
          )}
          {...rest}
        >
          {children}
        </header>
      </div>
    );
  }

  return (
    <header
      ref={divRef}
      data-component-name="Header"
      className={classNames(
        "sticky-top w-100 d-flex justify-content-between p-3 shadow-sm bg-body-tertiary",
        {
          "border-bottom": hasBorder,
          [theme.borderWidth]: hasBorder,
        },
        className,
      )}
      style={{ zIndex: 1020, ...rest.style }}
      {...rest}
    >
      {children}
    </header>
  );
};
Header.displayName = "Header";

export default Header;
