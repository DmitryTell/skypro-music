import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NotFound } from "../not-found/index";
import { Nav } from "../nav/index";
import { Header } from "../header/index";
import { Content } from "../content/index";
import { Sidebar } from "../sidebar";
import { Bar } from "../bar/index";
import * as S from "./index.styles";
import * as P from "../../data/pages";
import {
    playerCurrentTrackSelector,
    playerShuffledPlaylistSelector,
    playerPlaylistSelector,
    playerIsShuffledSelector,
} from "../../store/selectors/player";
import { addAllTracks, getNewId } from "../../store/slices/player";
import {
    filterAuthorsSelector,
    filterFilteredTracksSelector,
    filterGenresSelector,
    filterYearSelector,
    filtersSearchingTextSelector,
} from "../../store/selectors/filters";
import {
    filterTracks,
    searchTrack,
    sortTracks,
} from "../../store/slices/filters";

export const PageLayout = ({ page, title, tracks, isLoading, newError }) => {
    const dispatch = useDispatch();

    const playlist = useSelector(playerPlaylistSelector);
    const shuffledPlaylist = useSelector(playerShuffledPlaylistSelector);
    const currentTrack = useSelector(playerCurrentTrackSelector);
    const isShuffled = useSelector(playerIsShuffledSelector);
    const authors = useSelector(filterAuthorsSelector);
    const genres = useSelector(filterGenresSelector);
    const year = useSelector(filterYearSelector);
    const searchingText = useSelector(filtersSearchingTextSelector);
    const filteredTracks = useSelector(filterFilteredTracksSelector);

    useEffect(() => {
        if (tracks?.length) {
            dispatch(addAllTracks({ tracks }));
        }
    }, [tracks]);
    useEffect(() => {
        if (!isShuffled) {
            dispatch(
                getNewId({
                    ids: [...playlist.map(({ id }) => id)],
                    currentId: currentTrack?.id,
                }),
            );
        } else {
            dispatch(
                getNewId({
                    ids: [...shuffledPlaylist.map(({ id }) => id)],
                    currentId: currentTrack?.id,
                }),
            );
        }
    }, [currentTrack?.id, isShuffled]);
    useEffect(() => {
        dispatch(searchTrack({ tracks, searchingText }));
    }, [searchingText]);
    useEffect(() => {
        dispatch(filterTracks({ tracks, authors, genres }));
    }, [authors, genres]);
    useEffect(() => {
        dispatch(sortTracks({ tracks, year }));
    }, [year]);

    return (
        <S.Container>
            <S.Main>
                <Nav page={page} />
                <S.MainCenterblock>
                    <Header page={page} title={title} />
                    {page !== P.NOT_FOUND ? (
                        <Content
                            page={page}
                            tracks={filteredTracks ?? tracks}
                            isLoading={isLoading}
                            newError={newError}
                            searchingText={searchingText}
                            authors={authors}
                            genres={genres}
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
