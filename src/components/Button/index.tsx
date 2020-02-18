import React, { FC, ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * string, css color code.
   * @default gold
   */
  bg: string;
}

/**
 * ##### This is a themed button, you can...
 * - Change it's background color by giving `bg` property.
 * - Also includes all native HTML button attributes.
 */
export const Button: FC<IProps> = props => {
  const { bg, children, ...restProps } = props;

  return (
    <button {...restProps} style={{ background: bg }}>
      {children}
    </button>
  );
};

export default Button;
