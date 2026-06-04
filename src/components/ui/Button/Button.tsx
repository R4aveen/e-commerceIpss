import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";
import useTheme from "@/hooks/useTheme";
import type { TColors } from "@/types/colors.type";
import type { TRounded } from "@/types/rounded.type";
import type { TBorderWidth } from "@/types/borderWidth.type";

export type TButtonVariants = "solid" | "outline" | "link";
export type TButtonSize = "sm" | "md" | "lg";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: TColors;
  variant?: TButtonVariants;
  size?: TButtonSize;
  rounded?: TRounded | "auto";
  borderWidth?: TBorderWidth | "auto";
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    children,
    className,
    color,
    variant = "solid",
    size = "md",
    rounded = "auto",
    borderWidth = "auto",
    type = "button",
    ...rest
  } = props;

  const theme = useTheme();
  const activeColor = color || theme.themeColor;
  const activeRounded = rounded === "auto" ? theme.rounded : rounded;
  const activeBorderWidth = borderWidth === "auto" ? theme.borderWidth : borderWidth;
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";

  let btnColorClass = "";
  if (variant === "solid") {
    btnColorClass = `btn-${activeColor}`;
  } else if (variant === "outline") {
    btnColorClass = `btn-outline-${activeColor}`;
  } else if (variant === "link") {
    btnColorClass = "btn-link";
  }

  const classes = classNames(
    "btn",
    btnColorClass,
    sizeClass,
    activeRounded,
    activeBorderWidth,
    className
  );

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
