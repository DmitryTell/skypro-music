import styled from 'styled-components';


export const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 30px;
`;

export const ErrorBox = styled.div`
    width: 100%;
    height: 60px;
`;

export const ErrorText = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: red;
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 20px;
`;

export const ButtonBox = styled.div`
    width: 278px;
    height: 52px;
`;

export const ButtonLoading = styled.div`
    width: 278px;
    height: 52px;
    border-radius: 6px;
    -webkit-animation: button-animation 2s linear infinite alternate both;
    animation: button-animation 2s linear infinite alternate both;
`;
