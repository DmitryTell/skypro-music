import { v4 as uuid } from "uuid";
import * as S from "./Header.styles";

export const Year = () => {
    const YEARS = ["По умолчанию", "Сначала новые", "Сначала старые"];

    return (
        <S.Year>
            <S.PopupContainer>
                {YEARS?.map((year) => (
                    <S.PopupLink href="/#" key={uuid()}>
                        {year}
                    </S.PopupLink>
                ))}
            </S.PopupContainer>
        </S.Year>
    );
};
