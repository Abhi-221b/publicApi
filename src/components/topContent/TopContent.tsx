import Container from "../container/Container";
import Button, { type ButtonProps } from "../button/Button";
import type { CSSProperties, JSX } from "react";
import "./topContent.css"


export type TopContentProps = {
    columnType: "full" | "two",
    isInsideComponent?: boolean,
    titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    title?: string,
    content?: string | string[],
    className?: string,
    style?: CSSProperties,
    containerSizeClass?: string,
    buttonProp?: ButtonProps
}

export default function TopContent(props: TopContentProps) {

    const {
        columnType = "full",
        isInsideComponent = false,
        titleTag = "h1",
        title = "Welcome to Our Site",
        content,
        className = "",
        style,
        containerSizeClass,
        buttonProp
    } = props


    const TopContentInner = () => {
        const Tag = titleTag as keyof JSX.IntrinsicElements;

        const defaultContent = ["This is a short introduction to the page. Use this area to highlight the most important information."];

        const resolvedContent = Array.isArray(content)
            ? content.length
                ? content
                : defaultContent
            : content
                ? [typeof content === "string" ? content : defaultContent[0]]
                : [defaultContent[0]];

        return (
            <>

                {title && (
                    <Tag className="top_content__title">
                        {title}
                    </Tag>
                )}

                <div className={`top_content__contentwrap`}>
                    <div className="description">
                        {resolvedContent.map((c, i) => (
                            <p key={i} className="top_content__text">
                                {c}
                            </p>
                        ))}
                    </div>

                    {buttonProp &&
                        <div className="top_content__cta_wrapper">
                            <Button className={`top_content__cta ${buttonProp.className ? buttonProp.className : ""}`} style={{ ...buttonProp.style }} {...buttonProp}>
                                {buttonProp.children}
                            </Button>
                        </div>
                    }
                </div>

            </>
        );
    }


    return (
        <div className={`top_content ${isInsideComponent ? "" : "py-16"} ${className}`} style={{ ...style }}>


            {isInsideComponent ? (
                <div className={`top_content_inner ${columnType === "full" ? "one-column" : "two-column"}`}>
                    {TopContentInner()}
                </div>
            ) : (
                <Container className={containerSizeClass}>
                    <div className={`top_content_inner ${columnType === "full" ? "one-column" : "two-column"}`}>
                        {TopContentInner()}
                    </div>
                </Container>
            )}

        </div>
    );
}
