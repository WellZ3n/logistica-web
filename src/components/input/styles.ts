import styled, { css } from "styled-components";

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    color: #666360;
    padding: 16px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #666360;
    background: #232129;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }


    ${props => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    ${props => props.isFilled && css`
        color: #ff9000;
    `}

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #f4ede8;

        &::placeholder {
            color: #666360;
        }

    }

    svg {
        margin-right: 16px;
    }
`;