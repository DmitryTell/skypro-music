import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUserContext } from "../../context/user";
import * as S from "./Nav.styles";
import * as P from "../../data/pages";

const MENU_ITEMS = [
    {
        id: 1,
        title: "Главное",
        to: "/",
        key: uuid(),
    },
    {
        id: 2,
        title: "Мой плейлист",
        to: "/favourites",
        key: uuid(),
    },
    {
        id: 3,
        title: "Войти",
        to: "/login",
        key: uuid(),
    },
];
const IMG_PATH = "img/logo.png";

export const Nav = ({ page, isOpenedMenu, setIsOpenedMenu }) => {
    const navigate = useNavigate();
    const { clearUser } = useUserContext();

    const goToPath = (e, id, path) => {
        e.preventDefault();

        if (id === 3) {
            clearUser();
            return;
        }

        navigate(path, { replace: true });
    };

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
                        {MENU_ITEMS.map((item) => (
                            <S.NavMenuItem key={item.key}>
                                <S.NavMenuLink
                                    href="/#"
                                    onClick={(e) =>
                                        goToPath(e, item.id, item.to)
                                    }
                                >
                                    {item.title}
                                </S.NavMenuLink>
                            </S.NavMenuItem>
                        ))}
                    </S.NavMenuList>
                </S.NavMenu>
            )}
        </S.Nav>
    );
};
