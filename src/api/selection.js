const baseUrl = "https://skypro-music-api.skyeng.tech/catalog";

export const getSelectionList = async () => {
    const response = await fetch(`${baseUrl}/selection/`, {
        method: "GET",
    });
    const data = await response.json();

    return data;
};
