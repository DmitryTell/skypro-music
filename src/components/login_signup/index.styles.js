import styled, { css } from "styled-components";

const mixinFlexbox = css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;
const mixinModalInput = css`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    outline: none;
    padding: 8px 1px;

    &::-webkit-input-placeholder {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
    &:-ms-input-placeholder {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
    &::-ms-input-placeholder {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
    &::placeholder {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
`;
const buttonAnimation = css`
    -webkit-animation: button-animation 2s linear infinite alternate both;
    animation: button-animation 2s linear infinite alternate both;
`;

export const ContainerLogin = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: rgba(0, 0, 0, 0.85);
`;
export const ModalBlock = styled.div`
    position: absolute;
    z-index: 2;
    left: calc(50% - (366px / 2));
    top: calc(50% - (439px / 2));
    opacity: 1;
`;
export const ModalFormLogin = styled.div`
    width: 366px;
    min-height: 439px;
    background-color: #ffffff;
    border-radius: 12px;
    ${mixinFlexbox}
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 43px 47px 47px 40px;

    & input:first-child {
        margin-bottom: 30px;
    }
`;
export const ModalLogo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 34px;
    background-color: transparent;

    & img {
        width: 140px;
        height: auto;
    }
`;
export const ModalInputLogin = styled.input`
    ${mixinModalInput}
    margin-bottom: 30px;
`;
export const ModalInputPasswordFirst = styled.input`
    ${mixinModalInput}
    margin-bottom: 30px;
`;
export const ModalInputPassword = styled.input`
    ${mixinModalInput}
`;

export const ModalButtonRegister = styled.button`
    width: 278px;
    height: 62px;
    background-color: #580ea2;
    border-radius: 6px;
    margin-left: 4px;
    border: none;
    margin-top: 30px;
    cursor: pointer;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #ffffff;
    transition: all 0.5s;
    ${({ loading }) => Boolean(loading) && buttonAnimation}

    &:hover {
        background-color: #3f007d;
    }
    &:active {
        background-color: #271a58;
    }
`;
export const ModalErrorText = styled.span`
    margin-top: 5px;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.05px;
    color: red;
`;
