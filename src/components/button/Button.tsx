import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    styleType?: "primary" | "secondary" | "link",
    children: ReactNode,
    className?: string,
    style?: CSSProperties,
}

export default function Button({ styleType = "primary", children, className, style, ...arg }: ButtonProps) {

    return (
        <button className={`btn__${styleType} ${className}`} style={{ ...style }} {...arg}>
            {children}
        </button>
    );
}
