import { PageLayout } from "../components/global/PageLayout";

export const Page404 = ({
    page,
    isOpenedMenu,
    setIsOpenedMenu,
    currentTime,
    setCurrentTime,
    duration,
    volume,
    setVolume,
    isLoop,
    isPlaying,
    controls,
}) => {
    return (
        <PageLayout
            page={page}
            isOpenedMenu={isOpenedMenu}
            setIsOpenedMenu={setIsOpenedMenu}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            volume={volume}
            setVolume={setVolume}
            isLoop={isLoop}
            isPlaying={isPlaying}
            controls={controls}
        />
    );
};
