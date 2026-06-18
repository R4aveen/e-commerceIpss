import { type FC, type HTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";
import useTheme from "@/hooks/useTheme";
import "./Subheader.css";

interface ISubheaderLeftProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const SubheaderLeft: FC<ISubheaderLeftProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Subheader/SubheaderLeft"
      className={classNames("d-flex align-items-center gap-3", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
SubheaderLeft.displayName = "SubheaderLeft";

interface ISubheaderRightProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const SubheaderRight: FC<ISubheaderRightProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Subheader/SubheaderRight"
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
SubheaderRight.displayName = "SubheaderRight";

interface ISubheaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
const Subheader: FC<ISubheaderProps> = (props) => {
  const { children, className, ...rest } = props;
  const theme = useTheme();

  // If theme.borderWidth is 'border-0', remove borders. Otherwise apply bottom border.
  const hasBorder = theme.borderWidth !== "border-0";

  return (
    <div
      data-component-name="Subheader"
      className={classNames(
        "d-flex justify-content-between p-3 bg-body-tertiary mb-3",
        {
          "border-bottom": hasBorder,
          [theme.borderWidth]: hasBorder,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
Subheader.displayName = "Subheader";

export default Subheader;
