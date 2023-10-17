import * as S from "./Content.styles";
import * as P from "../../data/pages";

const SVG_PATH = "img/icon/sprite.svg#icon-watch";

export const Title = ({ page }) => {
    return (
        <S.ContentTitle>
            <S.ContentTitleCol className="col01">трек</S.ContentTitleCol>
            <S.ContentTitleCol className="col02">исполнитель</S.ContentTitleCol>
            <S.ContentTitleCol className="col03">альбом</S.ContentTitleCol>
            <S.ContentTitleCol className="col04">
                <S.ContentTitleSvg alt="time">
                    <use
                        xlinkHref={
                            page === P.CATEGORY ? `../${SVG_PATH}` : SVG_PATH
                        }
                    />
                </S.ContentTitleSvg>
            </S.ContentTitleCol>
        </S.ContentTitle>
    );
};
