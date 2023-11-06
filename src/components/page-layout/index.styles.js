import styled, { css } from "styled-components";

const mixinFlexbox = css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;

export const Container = styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
`;
export const Main = styled.div`
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    ${mixinFlexbox}
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`;
export const MainCenterblock = styled.div`
    width: auto;
    -webkit-box-flex: 3;
    -ms-flex-positive: 3;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`;
