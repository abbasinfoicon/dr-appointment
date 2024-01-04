"use client"
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import { MaterialReactTable, useMaterialReactTable, } from 'material-react-table';
import { useCookies } from 'react-cookie';
import DeleteModal from './DeleteModal';
import FetchData from '@/app/components/FetchData';

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [deleteContent, setDeleteContent] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [loading, setLoading] = useState(true);
  const [cookies] = useCookies(['access_token']);
  const token = cookies.access_token;

  const formatDate = (dateTimeString) => {
    try {
      const timestamp = Date.parse(dateTimeString);

      if (isNaN(timestamp)) {
        throw new Error('Invalid date format');
      }

      const dateObj = new Date(timestamp);

      // Format date as "YYYY-MM-DD"
      const formattedDate = dateObj.toISOString().split('T')[0];

      // Format time as "HH:mm"
      const formattedTime = dateObj.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });

      return { formattedDate, formattedTime };
    } catch (error) {
      console.error('Invalid date format:', dateTimeString);
      return { formattedDate: 'Invalid Date', formattedTime: 'Invalid Time' };
    }
  };

  const handleDeletePopup = (row) => {
    setDeleteContent(!deleteContent);
    setDeleteId(row.original.blog_id);
  }

  const handleCheckboxChange = async (row) => {
    console.log('Checkbox changed for blog_id:', row.original.blog_id);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'blog_id',
        header: 'Blog Id',
        size: 50,
      },
      {
        accessorKey: 'created_at',
        header: 'Date',
        size: 100,
        Cell: ({ row }) => {
          const { formattedDate, formattedTime } = formatDate(row.original.created_at);
          return (
            <span>
              {formattedDate} <br /> {formattedTime}
            </span>
          );
        },
      },
      {
        accessorKey: 'blog_image',
        header: 'Image',
        size: 100,
        Cell: ({ row }) => {
          if (row.original.blog_image) {
            return <img src={`http://172.232.189.142:8000/${row.original.blog_image}`} alt="Blog Image" style={{ width: '100px', height: 'auto' }} />
          } else {
            return null;
          }
        },
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
        accessorKey: 'created_by.first_name',
        header: 'Created By',
        size: 100,
      },
      {
        accessorKey: 'approved',
        header: 'Status',
        size: 100,
        Cell: ({ row }) => (
          <span className={`alert-custom alert ${row.original.approved === 'Pending' ? 'alert-warning' : row.original.approved === 'Unapproved' ? 'alert-danger' : 'alert-success'}`} >{row.original.approved}</span>
        ),
      },
      {
        accessorKey: 'availablity',
        header: 'Availablity',
        size: 100,
        Cell: ({ row }) => (
          <div className="custom_checkbox">
            <input id={`c${row.index}`} type="checkbox" className="switch" checked={row.original.availablity} onChange={() => handleCheckboxChange(row)} disabled={row.original.approved === 'Approved' ? false : true} />
          </div>
        ),
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        size: 150,
        Cell: ({ row }) => (
          <div>
            <Link href={`blog/${row.original.blog_id}`} className='btn rounded btn-primary'><i className="icon-eye"></i></Link>
            <Link href={`blog/edit/${row.original.blog_id}`} className='btn rounded btn-info mx-1'><i className="icon-pencil"></i></Link>
            <button className='btn rounded btn-danger' onClick={() => handleDeletePopup(row)}><i className="icon-trash"></i></button>
          </div>
        ),
      },
    ],
    [],
  );

  const table = useMaterialReactTable({ columns, data: data || [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await FetchData({ url: "app/all_blogs", method: "GET", authorization: `Bearer ${token}` });

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await res.json();

        // Update the state with result.data
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };

    fetchData();

  }, [token, deleteContent]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row page-titles mx-0">
        <div className="col-sm-6">
          <div className="welcome-text">
            <h4>All Testimonial</h4>
          </div>
        </div>
        <div className="col-sm-6 justify-content-sm-end mt-2 mt-sm-0 d-flex">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/dashboard/testimonial">Testimonial</Link></li>
            <li className="breadcrumb-item active"><Link href="#">All Testimonial</Link></li>
          </ol>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Testimonial Details Lists</h4>
              <div className="add-new text-right">
                <Link href="/dashboard/testimonial/add-testimonial" className="btn btn-outline-primary btn-lg btn-rounded mt-1 pl-5 pr-5 add-new">Add New</Link>
              </div>
            </div>

            <div className='card-body'>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <MaterialReactTable table={table} />
              )}
            </div>
          </div>
        </div>
      </div>

      <DeleteModal did={deleteId} dc={deleteContent} setdc={setDeleteContent} />
    </div>
  )
}

export default Testimonial