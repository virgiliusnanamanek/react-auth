/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const NOW_PLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=9be7c49ccd2ba8dafff8d89134ad7992&language=en-US&page=1`;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';


function NowPlayingMovie() {

    const [nowPlaying, setNowPlaying] = useState([]);

    const getNowPlaying = async () => {
        const response = await fetch(NOW_PLAYING_URL);
        const data = await response.json();
        setNowPlaying(data.results);
    };



    useEffect(() => {
        getNowPlaying();
    }, [nowPlaying]);


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        nowPlaying.map((movie) => (
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-stretch" key={movie.id}>

                                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-full">
                                    <Link to={`/now-playing/${movie.id}`}>


                                        <img
                                            className="rounded-t-lg"
                                            src={
                                                movie.backdrop_path ? `${IMAGE_URL}${movie.backdrop_path}` : "https://dummyimage.com/420x260"
                                            }
                                            alt=""
                                        />
                                    </Link>
                                    <div className="p-5">
                                        <Link to={`/now-playing/${movie.id}`}>
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                                                {movie.title}
                                            </h5>
                                        </Link>
                                        <p className="mb-3 text-sm text-gray-800">
                                            {
                                                movie.overview.length > 100 ? `${movie.overview.substring(0, 100)}...` : movie.overview
                                            }
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}



export default NowPlayingMovie