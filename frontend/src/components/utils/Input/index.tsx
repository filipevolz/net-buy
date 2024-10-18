import { ChangeEvent } from "react";
import './input.scss';

export interface InputProps {
    type: string;
    label?: string;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type, label, placeholder, value, onChange }: InputProps){
    return(
        <div className="input-content">
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}