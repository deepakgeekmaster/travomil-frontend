import { useState, useEffect } from 'react';

const useCookiesExtract = () => {
    const [decodedToken, setDecodedToken] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/getCookie', {
                    method: 'GET',
                    credentials: 'include',
                });
                const data = await res.json();
                setDecodedToken(data.otp); 
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        };

        fetchToken();
    }, []);

    return decodedToken;
};

export default useCookiesExtract;
