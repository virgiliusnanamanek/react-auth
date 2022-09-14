import React from 'react'
import { Link } from 'react-router-dom';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function DisplaySearchResult({ id, title, overview, backdrop_path }) {


    return (

        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-stretch" key={id}>

            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-full">
                <Link to={`/now-playing/${id}`}>


                    <img
                        className="object-cover object-center rounded-t-lg h-48 w-full"
                        src={
                            backdrop_path ? `${IMAGE_URL}${backdrop_path}` : "https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        }
                        alt=""
                    />
                </Link>
                <div className="p-5">
                    <Link to={`/now-playing/${id}`}>
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                            {title}
                        </h5>
                    </Link>
                    <p className="mb-3 text-sm text-gray-800">
                        {
                            overview.length > 100 ? `${overview.substring(0, 100)}...` : overview
                        }
                    </p>
                </div>
            </div>

        </div>
    )
}

export default DisplaySearchResult