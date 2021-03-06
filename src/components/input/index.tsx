import React, { InputHTMLAttributes, useState, useCallback, useRef, useEffect } from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
};

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    // eslint-disable-next-line
    const { fieldName, defaultValue, error, registerField} = useField(name);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    })

    return (
    <Container isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={20} />}
        <input onFocus={() => setIsFocused(true)} onBlur={handleInputBlur} {...rest}/>
    </Container>
    )
};

export default Input;