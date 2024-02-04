import styled from 'styled-components';


export const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: #580ea2;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #ffffff;
    transition: all 0.5s;

    &:hover {
        background-color: #3f007d;
    }

    &:active {
        background-color: #271a58;
    }
`;

export const ButtonReg = styled.button`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 1px solid #d0cece;
    border-radius: 6px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    transition: all 0.5s;

    &:hover {
        background-color: #f4f5f6;
    }

    &:active {
        background-color: #d9d9d9;
    }
`;
