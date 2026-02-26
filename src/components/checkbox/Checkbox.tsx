import { forwardRef, useId } from "react";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    checkedValue: boolean,
    className?: string,
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ checkedValue, className, label, onChange }, ref) => {
    const id = useId()

    return (
        <div className={`checkbox_wrapper ${className}`}>
            <label htmlFor={id} className='cst-label'>
                <input
                    id={id}
                    ref={ref}
                    className='cst-checkbox'
                    type='checkbox'
                    checked={checkedValue}
                    onChange={onChange} />
                <span className='cst-label_text'>{label}</span>
            </label>
        </div>
    );
});


export default Checkbox;