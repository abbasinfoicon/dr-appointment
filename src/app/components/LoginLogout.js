'use client'
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import FetchData from './FetchData';

const LoginLogout = () => {
    const [data, setData] = useState({});
    const [cookies] = useCookies(['access_token']);
    const token = cookies.access_token;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await FetchData({ url: "user/details", method: "GET", authorization: `Bearer ${token}` });

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await res.json();
                setData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [token]);

    return (
        cookies.access_token ? (
            <li>
                <Link href='/my-account'>
                    <i className='fa fa-user'></i> {data.first_name} {data.last_name}
                </Link>
            </li>
        ) : (
            <li>
                <Link href='/login'>
                    <i className='fa fa-sign-out'></i> Login
                </Link>
            </li>
        )
    )
}

export default LoginLogout