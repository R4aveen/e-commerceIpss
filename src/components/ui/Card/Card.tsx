import { forwardRef, type FC, type HTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";
import useTheme from "@/hooks/useTheme";
import type { TRounded } from "@/types/rounded.type";
import type { TBorderWidth } from "@/types/borderWidth.type";
import "./Card.css";

interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
export const CardHeader: FC<ICardHeaderProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-component-name="Card/CardHeader"
      className={classNames("card-header py-3", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
CardHeader.displayName = "CardHeader";

interface ICardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
export const CardBody: FC<ICardBodyProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-component-name="Card/CardBody"
      className={classNames("card-body", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
CardBody.displayName = "CardBody";

interface ICardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}
export const CardTitle: FC<ICardTitleProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <h5
      data-component-name="Card/CardTitle"
      className={classNames("card-title fw-bold mb-3", className)}
      {...rest}
    >
      {children}
    </h5>
  );
};
CardTitle.displayName = "CardTitle";

interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
export const CardFooter: FC<ICardFooterProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-component-name="Card/CardFooter"
      className={classNames("card-footer py-3", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
CardFooter.displayName = "CardFooter";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  rounded?: TRounded | "auto";
  borderWidth?: TBorderWidth | "auto";
}

// debo revisasr el por que no se redimensiona la tarjeta al modificar el height :p
const Card = forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { children, className, rounded = "auto", borderWidth = "auto", ...rest } = props;
  const theme = useTheme();

  const activeRounded = rounded === "auto" ? theme.rounded : rounded;

  const activeBorderWidth = borderWidth === "auto" ? theme.borderWidth : borderWidth;

  const cardClasses = classNames(
    "card shadow-sm bg-body-tertiary",
    activeRounded,
    activeBorderWidth,
    className
  );

  return (
    <div ref={ref} data-component-name="Card" className={cardClasses} {...rest}>
      {children}
    </div>
  );
});
Card.displayName = "Card";

export default Card;
export { Card as CardComponent };
