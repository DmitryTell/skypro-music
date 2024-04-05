import styled from 'styled-components';


const FilterLength = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ad61ff;
    font-size: 13px;
    line-height: 13px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -9px;
`;

export const FilterContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    gap: 10px;
    margin-bottom: 51px;
`;

export const FilterTitle = styled.h3`
    font-size: 16px;
    line-height: 24px;
    margin-right: 5px;
`;

export const FilterLengthAuthors = styled(FilterLength)`
    left: 220px;
`;

export const FilterLengthGenres = styled(FilterLength)`
    left: 470px;
`;

export const FilterLengthYears = styled(FilterLength)`
    left: 365px;
`;
