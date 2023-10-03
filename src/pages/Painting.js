import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import setBodyColor from '../script';
import { Link } from "react-router-dom";
import Zoom from 'react-img-zoom'
import Error404 from '../components/Error404';

function Painting() {
    setBodyColor({ color: "#fff" })
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3001/fetchPaintingbyId/+${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data[0]);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <span class="loader"></span>;
    }

    if (error) {
        return <Error404 />;
    }

    return (
        <div className="artwork">
            <div className='artwork-image-container'>
                <Zoom
                    img={data.imageLink}
                    zoomScale={3}
                    width={900}
                    height={600}
                    transitionTime={1}
                />

            </div>
            <div className="artwork-details">
                <h2 className="artwork-name">{data.name}</h2>
                <h4 className="artwork-date">{data.dateOfCreation}</h4>
                <p className="artwork-info">{data.shortBio}</p>

                <Link to="/Gallery">
                    <button className='artwork-button'>Go Back</button>
                </Link>


            </div>
        </div>
    );
}

export default Painting;

