import { ITEMS } from "../../data/category-items";
import * as S from "./Sidebar.styles";
import * as P from "../../data/pages";

const LOGOUT_PATH = "img/icon/sprite.svg#logout";

export const Sidebar = ({ page, isLoaded }) => {
    return (
        <S.Sidebar>
            <S.SidebarPersonal>
                {page !== P.NOT_FOUND && (
                    <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
                )}
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
                        {ITEMS.map((item) => (
                            <S.SidebarItem key={item.key}>
                                {isLoaded ? (
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
