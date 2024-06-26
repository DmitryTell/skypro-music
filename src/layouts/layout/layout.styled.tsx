import styled from 'styled-components';


interface ILayoutProp {
  $background: string;
}

export const LayoutWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
`;

export const LayoutContainer = styled.div<ILayoutProp>`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: ${(props) => props.$background};
`;

export const LayoutMain = styled.main`
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`;

export const LayoutCenterblock = styled.div`
    width: auto;
    -webkit-box-flex: 3;
    -ms-flex-positive: 3;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`;
