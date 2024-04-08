import styled from 'styled-components';


interface ITitleProp {
  $color: string;
}

export const Title = styled.h2<ITitleProp>`
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
    color: ${(props) => props.$color};
`;
