import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import setBodyColor from '../script';
import { Link } from "react-router-dom";
import Zoom from 'react-img-zoom'
import Error404 from '../components/Error404';
import axios  from 'axios';
import { AUTH } from '../api';

function Painting() {
    setBodyColor({ color: "#fff" })
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const headers = {
        'Authorization': `Bearer ${AUTH}`,
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://crudapi.co.uk/api/v1/gallery/${id}`, { headers });
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData(); 

    }, []);
    if (isLoading) {
        return <span className="loader"></span>;
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

