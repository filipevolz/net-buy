import './button.scss';

export interface ButtonProps {
    type: "button" | "reset" | "submit";
    children: string;
    onClick: () => any;
}

export function Button({type, children, onClick}: ButtonProps){
    return(
        <button type={type} onClick={onClick}>{children}</button>
    )
}