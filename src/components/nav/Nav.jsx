import { v4 as uuid } from "uuid";
import * as S from "./Nav.styles";
import * as P from "../../data/pages";

const MENU_ITEMS = [
    {
        title: "Главное",
        to: "/",
        key: uuid(),
    },
    {
        title: "Мой плейлист",
        to: "/favourites",
        key: uuid(),
    },
    {
        title: "Войти",
        to: "/login",
        key: uuid(),
    },
];
const IMG_PATH = "img/logo.png";

export const Nav = ({ page, isOpenedMenu, setIsOpenedMenu }) => {
    return (
        <S.Nav>
            <S.NavLogo>
                <img
                    src={page === P.CATEGORY ? `../${IMG_PATH}` : IMG_PATH}
                    alt="logo"
                />
            </S.NavLogo>
            <S.NavBurger onClick={() => setIsOpenedMenu(!isOpenedMenu)}>
                <S.NavBurgerLine />
                <S.NavBurgerLine />
                <S.NavBurgerLine />
            </S.NavBurger>
            {isOpenedMenu && (
                <S.NavMenu>
                    <S.NavMenuList>
                        {MENU_ITEMS.map((item) => {
                            return (
                                <S.NavMenuItem key={item.key}>
                                    <S.NavMenuLink to={item.to}>
                                        {item.title}
                                    </S.NavMenuLink>
                                </S.NavMenuItem>
                            );
                        })}
                    </S.NavMenuList>
                </S.NavMenu>
            )}
        </S.Nav>
    );
};
