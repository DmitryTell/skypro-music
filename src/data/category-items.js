import { v4 as uuid } from "uuid";
import * as T from "./titles";

export const ITEMS = [
    {
        key: uuid(),
        id: 1,
        title: T.CATEGORY_1_TITLE,
        path: "img/playlist01.png",
    },
    {
        key: uuid(),
        id: 2,
        title: T.CATEGORY_2_TITLE,
        path: "img/playlist02.png",
    },
    {
        key: uuid(),
        id: 3,
        title: T.CATEGORY_3_TITLE,
        path: "img/playlist03.png",
    },
];
