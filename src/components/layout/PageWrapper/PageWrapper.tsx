import { type FC, type ReactNode } from "react";
import classNames from "classnames";

interface IPageWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper: FC<IPageWrapperProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <main
      data-component-name="PageWrapper"
      className={classNames("flex-grow-1 d-flex flex-column", className)}
      {...rest}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
