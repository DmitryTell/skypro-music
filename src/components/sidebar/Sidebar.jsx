import { v4 as uuid } from "uuid";
import * as S from "./Sidebar.styles";
import * as P from "../../data/pages";

const LOGOUT_PATH = "img/icon/sprite.svg#logout";
const IMG_PATHS = [
    "img/playlist01.png",
    "img/playlist02.png",
    "img/playlist03.png",
];

export const Sidebar = ({ page, isLoaded }) => {
    return (
        <S.Sidebar>
            <S.SidebarPersonal>
                <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
                <S.SidebarIcon>
                    <svg alt="logout">
                        <use
                            xlinkHref={
                                page === P.CATEGORY
                                    ? `../${LOGOUT_PATH}`
                                    : LOGOUT_PATH
                            }
                        />
                    </svg>
                </S.SidebarIcon>
            </S.SidebarPersonal>
            <S.SidebarBlock>
                {page === P.MAIN && (
                    <S.SidebarList>
                        {IMG_PATHS.map((path, index) => (
                            <S.SidebarItem key={uuid()}>
                                {isLoaded ? (
                                    <S.SidebarLink href={`/${index + 1}`}>
                                        <S.SidebarImg
                                            src={
                                                page === P.CATEGORY
                                                    ? `../${path}`
                                                    : path
                                            }
                                            alt="day's playlist"
                                        />
                                    </S.SidebarLink>
                                ) : (
                                    <S.SidebarItemSkeleton />
                                )}
                            </S.SidebarItem>
                        ))}
                    </S.SidebarList>
                )}
            </S.SidebarBlock>
        </S.Sidebar>
    );
};
