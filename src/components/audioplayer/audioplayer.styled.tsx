import styled from 'styled-components';


interface IPlayerContainerProp {
  $background: string;
}

export const PlayerContainer = styled.div<IPlayerContainerProp>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${(props) => props.$background};
`;

export const PlayerContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const PlayerBlock = styled.div`
    height: 73px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`;
