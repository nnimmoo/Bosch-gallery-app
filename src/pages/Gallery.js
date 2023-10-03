import React, { useState, useEffect } from 'react';
import PaintingCard from "../components/PaintingCard";
import setBodyColor from '../script';
import Footer from '../components/Footer';
import Error404 from '../components/Error404';

function Gallery() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [inputText, setInputText] = useState('');
    setBodyColor({ color: "#ad7d4d" })

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleButtonClick = () => {
        fetch(`http://localhost:3001/fetchPaintingbyName/+${inputText}`)
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
        setInputText('');
    };

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:3001/fetch')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <span class="loader"></span>
    }

    if (error) {
        return <Error404 />;
    }

    return (
        <>
            <section className='section-gallery'>
                <div className='section-gallery gallery'>
                    {data.map((painting) => (
                        <PaintingCard data={painting} key={painting.id} />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Gallery;

// import React, { useState, useEffect } from 'react';
// import PaintingCard from "../components/PaintingCard";
// import setBodyColor from '../script';
// import Footer from '../components/Footer';
// import Error404 from '../components/Error404';

// function Gallery() {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [searchTerm, setSearchTerm] = useState(''); 

//     setBodyColor({ color: "#ad7d4d" });

//     useEffect(() => {
//         setIsLoading(true);
//         fetch(`http://localhost:3001/fetch?search=${searchTerm}`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setData(data);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 setError(error);
//                 setIsLoading(false);
//             });
//     }, [searchTerm]); // Fetch data whenever the searchTerm changes

//     const handleInputChange = (event) => {
//         setSearchTerm(event.target.value); // Update the searchTerm based on input
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//     };

//     if (isLoading) {
//         return <span className="loader"></span>;
//     }

//     if (error) {
//         return <Error404 />;
//     }

//     return (
//         <>
//         <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Search by term..."
//                         value={searchTerm}
//                         onChange={handleInputChange}
//                     />
//                     <button type="submit">Search</button>
//                 </form>

//             <section className='section-gallery'>
//                 <div className='section-gallery gallery'>
//                     {data.map((painting) => (
//                         <PaintingCard data={painting} key={painting.id} />
//                     ))}
//                 </div>
//             </section>
//             <Footer />
//         </>
//     );
// }

// export default Gallery;
