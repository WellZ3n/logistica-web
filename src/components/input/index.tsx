import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType;
};

const Input: React.FC<InputProps> = ({icon, ...rest}) => (
    <Container>
        <input />
    </Container>
);

export default Input;