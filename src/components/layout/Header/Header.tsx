import { type FC, type HTMLAttributes, type ReactNode, useRef } from "react";
import classNames from "classnames";
import useTheme from "@/hooks/useTheme";

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

interface IHeaderProps {
  children: ReactNode;
  className?: string;
}
const Header: FC<IHeaderProps> = (props) => {
  const { children, className, ...rest } = props;
  const divRef = useRef<HTMLElement>(null);
  const theme = useTheme();

  const hasBorder = theme.borderWidth !== "border-0";

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
      {...rest}
    >
      {children}
    </header>
  );
};
Header.displayName = "Header";

export default Header;
