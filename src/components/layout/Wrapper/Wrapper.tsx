import type { FC, ReactNode } from "react";
import classNames from "classnames";

interface IWrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper: FC<IWrapperProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <section
      data-component-name="Wrapper"
      className={classNames("d-flex flex-column min-vh-100", className)}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Wrapper;
