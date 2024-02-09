import React, { useState, useEffect } from 'react';
import PaintingCard from "../components/PaintingCard";
import setBodyColor from '../script';
import Footer from '../components/Footer';
import Error404 from '../components/Error404';
import { AUTH } from '../api';
import axios from 'axios';

function Gallery() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    setBodyColor({ color: "#ad7d4d" })


    const headers = {
        'Authorization': `Bearer ${AUTH}`,
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('https://crudapi.co.uk/api/v1/gallery', { headers });
                setData(response.data.items);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData(); // Call fetchData immediately

    }, []); // Empty dependency array for running only once

    if (isLoading) {
        return <span className="loader"></span>
    }

    if (error) {
        return <Error404 />;
    }

    return (
        <>
            <section className='section-gallery'>
                <div className='section-gallery gallery'>
                    {data.map((painting) => (
                        <PaintingCard data={painting} key={painting._uuid} />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Gallery;
