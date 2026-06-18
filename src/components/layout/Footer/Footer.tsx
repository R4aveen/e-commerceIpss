import { type FC, type HTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";
import useTheme from "@/hooks/useTheme";
import "./Footer.css";

interface IFooterLeftProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const FooterLeft: FC<IFooterLeftProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Footer/FooterLeft"
      className={classNames("d-flex align-items-center gap-3", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
FooterLeft.displayName = "FooterLeft";

interface IFooterRightProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const FooterRight: FC<IFooterRightProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Footer/FooterRight"
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
FooterRight.displayName = "FooterRight";

interface IFooterProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}
const Footer: FC<IFooterProps> = (props) => {
  const { children, className, ...rest } = props;
  const theme = useTheme();

  const hasBorder = theme.borderWidth !== "border-0";

  return (
    <footer
      data-component-name="Footer"
      className={classNames(
        "d-flex justify-content-between p-3 mt-auto bg-body-tertiary small",
        {
          "border-top": hasBorder,
          
          [theme.borderWidth]: hasBorder,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </footer>
  );
};
Footer.displayName = "Footer";

export default Footer;
