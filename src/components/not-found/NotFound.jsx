import { useNavigate } from "react-router-dom";
import * as S from "./NotFound.styles";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <S.NotFoundCenterblock>
            <S.NotFoundBlock>
                <S.NotFoundTitle>404</S.NotFoundTitle>
                <S.NotFoundSubtitle>
                    <S.NotFoundSubtitleText>
                        Страница не найдена
                    </S.NotFoundSubtitleText>
                    <img src="img/404.png" alt="Not found" />
                </S.NotFoundSubtitle>
                <S.NotFoundText>
                    Возможно, она была удалена или перенесена на другой адрес
                </S.NotFoundText>
                <S.NotFoundButton
                    onClick={() => navigate("/", { replace: true })}
                >
                    Вернуться на главную
                </S.NotFoundButton>
            </S.NotFoundBlock>
        </S.NotFoundCenterblock>
    );
};
