import { MouseEvent } from 'react';
import './button.scss';

export interface ButtonProps {
    type: "button" | "reset" | "submit";
    children: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export function Button({type, children, onClick}: ButtonProps){
    return(
        <button type={type} onClick={onClick}>{children}</button>
    )
}