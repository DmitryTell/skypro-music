import { ITEMS } from "../../data/category-items";
import * as S from "./index.styles";
import * as P from "../../data/pages";
import { useUserContext } from "../../context/user";

const LOGOUT_PATH = "img/icon/sprite.svg#logout";

export const Sidebar = ({ page, isLoading }) => {
    const { username, clearUser } = useUserContext();

    return (
        <S.Sidebar>
            <S.SidebarPersonal>
                {page !== P.NOT_FOUND && (
                    <S.SidebarPersonalName>{username}</S.SidebarPersonalName>
                )}
                <S.SidebarIcon onClick={clearUser}>
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
                        {ITEMS.map((item) => (
                            <S.SidebarItem key={item.key}>
                                {!isLoading ? (
                                    <S.SidebarLink to={`/category/${item.id}`}>
                                        <S.SidebarImg
                                            src={
                                                page === P.CATEGORY
                                                    ? `../${item.path}`
                                                    : item.path
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
