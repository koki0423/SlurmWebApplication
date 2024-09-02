export const login = async (email, password) => {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            return { success: true, data: await response.json() };
        } else {
            return { success: false };
        }
    } catch (error) {
        console.error('ログイン中にエラーが発生しました:', error);
        return { success: false };
    }
};
