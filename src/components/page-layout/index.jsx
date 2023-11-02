import { useSelector } from "react-redux";
import { NotFound } from "../not-found/index";
import { Nav } from "../nav/index";
import { Header } from "../header/index";
import { Content } from "../content/index";
import { Sidebar } from "../sidebar";
import { Bar } from "../bar/index";
import * as S from "./index.styles";
import * as P from "../../data/pages";
import { playerCurrentTrackSelector } from "../../store/selectors/player";

export const PageLayout = ({ page, title, tracks, isLoading, newError }) => {
    const currentTrack = useSelector(playerCurrentTrackSelector);

    return (
        <S.Container>
            <S.Main>
                <Nav page={page} />
                <S.MainCenterblock>
                    <Header page={page} title={title} />
                    {page !== P.NOT_FOUND ? (
                        <Content
                            page={page}
                            tracks={tracks}
                            isLoading={isLoading}
                            newError={newError}
                        />
                    ) : (
                        <NotFound />
                    )}
                </S.MainCenterblock>
                <Sidebar page={page} isLoading={isLoading} />
            </S.Main>
            {currentTrack && <Bar page={page} />}
            <footer className="footer" />
        </S.Container>
    );
};
