const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

async function login(email, password) {
    try {
        const response = await fetch(apiBaseUrl+'/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        if (response.ok) {
            return {success: true, data: await response.json()};
        } else {
            return {success: false};
        }
    } catch (error) {
        console.error('ログイン中にエラーが発生しました:', error);
        return {success: false};
    }
}

async function logout() {
    try {
        const response = await fetch(apiBaseUrl+'/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });
    } catch (error) {
        console.error('ログアウトに失敗しました:', error);
        return {success: false};
    }
}

async function createAccount(username, password, email) {
    try {
        const response = await fetch(apiBaseUrl+'/createAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password, email}),
        });
    } catch (error) {
        console.error('アカウントに失敗しました:', error);
        return {success: false};
    }
}

async function resetPassword(email) {
    try {
        const response = await fetch(apiBaseUrl+'/resetPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email}),
        });
    } catch (error) {
        console.error('パスワードリセットに失敗しました:', error);
        return {success: false};

    }
}

async function changePassword() {
    try {
        const response = await fetch(apiBaseUrl+'/changePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });
    } catch (error) {
        console.error('パスワード変更に失敗しました:', error);
        return {
            success: false
        }
    }
}

async function getUserInfo() {
    try {
        const response = await fetch(apiBaseUrl+'/userInfo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });
    } catch (error) {
        console.error('ユーザー情報の取得に失敗しました:', error);
        return {
            success: false
        }
    }
}

async function updateUserInfo() {
    try {
        const response = await fetch(apiBaseUrl+'/updateUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });
    } catch (error) {
        console.error('ユーザー情報の更新に失敗しました:', error);
        return {success: false};
    }
}

async function deleteAccount() {
    try {
        const response = await fetch(apiBaseUrl+'/deleteAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });
    } catch (error) {
        console.error('アカウント削除に失敗しました:', error);
        return {success: false};
    }
}

export {
    login,
    logout,
    createAccount,
    resetPassword,
    changePassword,
    getUserInfo,
    updateUserInfo,
    deleteAccount
};