import { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable, } from 'material-react-table';
import { useCookies } from 'react-cookie';

const BlogList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cookies] = useCookies(['access_token']);
    const token = cookies.access_token;

    const columns = useMemo(
        () => [
            {
                accessorKey: 'blog_id',
                header: 'Blog Id',
                size: 150,
            },
            {
                accessorKey: 'created_at',
                header: 'Date',
                size: 150,
            },
            {
                accessorKey: 'blog_image',
                header: 'Image',
                size: 200,
            },
            {
                accessorKey: 'title',
                header: 'Title',
                size: 150,
            },
            {
                accessorKey: 'subTitle',
                header: 'Sub Title',
                size: 150,
            },
            {
                accessorKey: 'created_by',
                header: 'Created By',
                size: 150,
            },
            {
                accessorKey: 'approved',
                header: 'Status',
                size: 150,
            },
            {
                accessorKey: 'availablity',
                header: 'Availablity',
                size: 150,
            },
        ],
        [],
    );

    const table = useMaterialReactTable({ columns, data, });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://172.232.189.142:8000/app/all_blogs/`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log("Response Data:", res);

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await res.json();
                setData(result.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [token]);

    console.log("Blog Lists:", data.data);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <MaterialReactTable table={table} />
            )}
        </>
    )
};

export default BlogList;
