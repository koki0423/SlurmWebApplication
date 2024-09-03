const apiBaseUrl = process.env.API_BASE_URL;

async function fetchJobStatus() {
    try {
        const response = await fetch(`${apiBaseUrl}/jobStatus`, {
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
        console.error('ジョブステータスの取得に失敗しました:', error);
        return {success: false};
    }
}

export {fetchJobStatus};