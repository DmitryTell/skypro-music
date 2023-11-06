import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./index.styles";
import * as P from "../../data/pages";
import { useUserContext } from "../../context/user";
import { getSelectionList } from "../../api/selection";
import { setSelectionList } from "../../store/slices/user";
import { userSelectionListSelector } from "../../store/selectors/user";

const LOGOUT_PATH = "img/icon/sprite.svg#logout";

export const Sidebar = ({ page, isLoading }) => {
    const { username, clearUser } = useUserContext();
    const dispatch = useDispatch();

    const selectionList = useSelector(userSelectionListSelector);

    const loadingSelectionList = isLoading ? ["1", "2", "3"] : null;

    useEffect(() => {
        getSelectionList().then((list) => dispatch(setSelectionList({ list })));
    }, []);

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
                        {loadingSelectionList?.map((item) => (
                            <S.SidebarItem key={item}>
                                {isLoading && <S.SidebarItemSkeleton />}
                            </S.SidebarItem>
                        ))}
                        {selectionList?.map((item) => (
                            <S.SidebarItem key={String(item.id)}>
                                {!isLoading ? (
                                    <S.SidebarLink to={`/category/${item.id}`}>
                                        <S.SidebarImg
                                            src={
                                                page === P.CATEGORY
                                                    ? `../img/playlist0${item.id}.png`
                                                    : `img/playlist0${item.id}.png`
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
