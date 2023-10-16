import { v4 as uuid } from "uuid";
import * as S from "./Nav.styles";

const MENU_ITEMS = [
    {
        title: "Главное",
        to: "/#",
        key: uuid(),
    },
    {
        title: "Мой плейлист",
        to: "/#",
        key: uuid(),
    },
    {
        title: "Войти",
        to: "/#",
        key: uuid(),
    },
];

export const Nav = ({ isOpenedMenu, setIsOpenedMenu }) => {
    return (
        <S.Nav>
            <S.NavLogo>
                <img src="img/logo.png" alt="logo" />
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
                                    <S.NavMenuLink href={item.to}>
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
