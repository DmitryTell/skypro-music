import styled, { css } from 'styled-components';


interface ISidebarLoadingItemProp {
  $isDarkTheme: boolean;
}

const skeletonAnimation = css`
    -webkit-animation: skeleton-animation 2s linear infinite alternate both;
    animation: skeleton-animation 2s linear infinite alternate both;
`;

const skeletonAnimationLight = css`
    -webkit-animation: skeleton-animation-light 2s linear infinite alternate both;
    animation: skeleton-animation-light 2s linear infinite alternate both;
`;

export const SidebarLoadingList = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 30px;
`;

export const SidebarLoadingItem = styled.li<ISidebarLoadingItemProp>`
    width: 250px;
    height: 150px;
    ${(props) => (props.$isDarkTheme ? skeletonAnimation : skeletonAnimationLight)}
`;
