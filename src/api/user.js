const userUrl = "https://skypro-music-api.skyeng.tech/user";

export const loginUser = async (email, password) => {
    const response = await fetch(`${userUrl}/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail);
    }

    return data;
};
export const registerUser = async (name, email, password) => {
    const response = await fetch(`${userUrl}/signup/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: name,
            first_name: name,
            last_name: name,
            email,
            password,
        }),
    });
    const data = await response.json();

    if (response.status === 400 && data.email) {
        throw new Error(data.email[0]);
    } else if (response.status === 400 && data.password) {
        throw new Error(data.password[0]);
    }

    if (!response.ok) {
        throw new Error(data.detail);
    }

    return data;
};
