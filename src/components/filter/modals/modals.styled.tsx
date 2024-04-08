import styled from 'styled-components';


interface IModalProp {
  $background: string;
}

interface IModalLinkProp {
  $color: string;
  $colorActive: boolean;
}

const Modal = styled.div`
    width: 248px;
    height: 305px;
    padding: 34px;
    border-radius: 12px;
`;

export const ModalContainer = styled.div`
    width: 180px;
    height: 237px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    overflow: auto;
    scrollbar-width: 4px;
    scrollbar-color: #fff #4b4949;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: #4b4949;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 10px;
    }
`;

export const ModalAuthor = styled(Modal)<IModalProp>`
    position: absolute;
    top: 40px;
    left: 35px;
    background: ${(props) => props.$background};
`;

export const ModalGenre = styled(Modal)<IModalProp>`
    position: absolute;
    top: 40px;
    left: 320px;
    background: ${(props) => props.$background};
`;

export const ModalYear = styled(Modal)<IModalProp>`
    position: absolute;
    top: 40px;
    left: 200px;
    width: 221px;
    height: 196px;
    background: ${(props) => props.$background};
`;

export const ModalLink = styled.a<IModalLinkProp>`
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => (props.$colorActive ? '#b672ff' : props.$color)};
    transition: all 0.5s;

    &:hover {
        color: #b672ff;
        text-decoration-line: underline;
    }
`;
