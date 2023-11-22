import Link from 'next/link'
import React from 'react'

const Banner = ({ img, title }) => {
    return (
        <>
            {
                img ? <div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: `url(/assets/images/banner/${img})` }}>
                    <div className="container">
                        <div className="dez-bnr-inr-entry">
                            <h1 className="text-white">{title}</h1>
                        </div>
                    </div>
                </div> : null
            }


            {
                title ? <div className="breadcrumb-row">
                    <div className="container">
                        <ul className="list-inline">
                            <li><Link href="/">Home</Link></li>
                            <li>{title}</li>
                        </ul>
                    </div>
                </div> : null
            }
        </>
    )
}

export default Banner