const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

async function fetchSystemStatus() {
    try {
        const response = await fetch(`${apiBaseUrl}/systemStatus`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
        if (response.ok){
            return {success: true, data: await response.json()};
        }
        else {
            return {success: false};
        }
    }catch (error) {
        console.error('システムステータスの取得に失敗しました:', error);
        return {success: false};
    }
}