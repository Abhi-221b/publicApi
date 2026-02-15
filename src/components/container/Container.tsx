import type { CSSProperties, HtmlHTMLAttributes, ReactNode } from "react";

export type ContainerProps = HtmlHTMLAttributes<HTMLDivElement> & {
    children: ReactNode,
    className?: string,
    style?: CSSProperties
}

export default function Container({ children, className = "max-w-7xl", style }: ContainerProps) {


    return (
        <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${className}`} style={{ ...style }}>
            {children}
        </div>
    );
}
