import type { ReactNode, ButtonHTMLAttributes } from "react";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "small" | "big";
  bg?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "small",
  bg = false,
  className = "",
  ...props
}) => {
  const btnClasses = ["btn", `btn--${size}${bg ? "-bg" : ""}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  );
};
