import styled, { css } from "styled-components";

const mixinFlexbox = css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
`;
const mixinFlexboxVertical = css`
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const Content = styled.div`
    ${mixinFlexbox}
    ${mixinFlexboxVertical}
`;

export const ContentPlaylist = styled.ul`
    height: 100vh;
    padding-bottom: 450px;
    ${mixinFlexbox}
    ${mixinFlexboxVertical}
    overflow-y: auto;
    scrollbar-width: 0;

    &::-webkit-scrollbar {
        width: 0;
    }
`;
export const ContentPlaylistErrorText = styled.p`
    width: 500px;
    font-size: 32px;
    line-height: 48px;
    color: #fff;
`;
