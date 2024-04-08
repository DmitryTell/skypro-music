import styled from 'styled-components';


interface INotFoundTextProp {
  $color: string;
}

interface INotFoundSmTextProp {
  $color: string;
}

export const NotFoundWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NotFoundContainer = styled.div`
    width: 431px;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 16px;
`;

export const NotFoundTitle = styled.h2<INotFoundTextProp>`
    font-size: 160px;
    line-height: 168px;
    color: ${(props) => props.$color};
`;

export const NotFoundTextBox = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const NotFoundBgText = styled.span<INotFoundTextProp>`
    font-size: 32px;
    line-height: 40px;
    color: ${(props) => props.$color};
`;

export const NotFoundImg = styled.div`
    width: 52px;
    height: 52px;
`;

export const NotFoundSmText = styled.p<INotFoundSmTextProp>`
    width: 100%;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.3%;
    text-align: center;
    color: ${(props) => props.$color};
`;

export const NotFoundButtonBox = styled.div`
    width: 278px;
    height: 52px;
    margin-top: 16px;
`;
