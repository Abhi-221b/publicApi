import { forwardRef, useId } from "react";

export type InputProps = {
    label?: string;
    type: string;
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default forwardRef<HTMLInputElement, InputProps>(function input(
    { label, type = "text", className, ...props },
    ref
) {
    const id = useId();
    return (
        <div className={`mb-5 ${className}`}>
            {label && (
                <label
                    htmlFor={id}
                    className="block"
                >
                    {label}
                </label>
            )}

            <input
                id={id}
                type={type}
                ref={ref}
                className="form-input"
                {...props}
            ></input>
        </div>
    );
});
