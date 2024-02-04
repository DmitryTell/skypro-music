import styled from 'styled-components';


export const Input = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    outline: none;
    padding: 8px 1px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;

    &::-webkit-input-placeholder {
        color: #d0cece;
    }
    &:-ms-input-placeholder {
        color: #d0cece;
    }
    &::-ms-input-placeholder {
        color: #d0cece;
    }
    &::placeholder {
        color: #d0cece;
    }
`;
