import { forwardRef } from "react";
import type { ReactNode } from "react";
import classNames from "classnames";

type TContainerBreakpoint =
  | "container"
  | "container-sm"
  | "container-md"
  | "container-lg"
  | "container-xl"
  | "container-xxl"
  | "container-fluid"
  | null;

interface IContainerProps {
  children: ReactNode;
  className?: string;
  breakpoint?: TContainerBreakpoint;
}

const Container = forwardRef<HTMLDivElement, IContainerProps>((props, ref) => {
  const { children, className, breakpoint = "container", ...rest } = props;

  return (
    <div
      ref={ref}
      data-component-name="Container"
      className={classNames("py-4 px-3", breakpoint, className)}
      {...rest}
    >
      {children}
    </div>
  );
});
Container.displayName = "Container";

export default Container;
