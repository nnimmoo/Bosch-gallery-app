import React, { useState, useEffect } from 'react';
import image1 from "../assets/images/portrait1.jpg";
import image2 from "../assets/images/about2.webp";
import image3 from "../assets/images/about3.jpg";
import setBodyColor from '../script';
function About() {
    setBodyColor({ color: "#000" })
    const images = [image2, image1, image3];
    const [index, setIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[index]);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = event => {
        const scrollableText = event.currentTarget;
        setScrollPosition(scrollableText.scrollTop);
        const scrollableHeight = (scrollableText.scrollHeight-scrollableText.clientHeight) / 3;
        switch (true) {
            case scrollPosition < scrollableHeight:
              setSelectedImage(images[0]);
              break;
            case scrollPosition < scrollableHeight * 2:
              setSelectedImage(images[1]);
              break;
            default:
              setSelectedImage(images[2]);
          }
    };

    return (
        <div className="about">
            <div className="about-text" onScroll={handleScroll}>
                <div className="scrollable-text">
                    <h3>Life of Hieronymus Bosch:</h3>
                    <p>
                        Hieronymus Bosch, born Jheronimus van Aken, was a renowned Dutch painter of the Northern Renaissance, whose life spanned the late 15th and early 16th centuries. He was born around 1450 in 's-Hertogenbosch, a town in the Duchy of Brabant, which is now part of the Netherlands. Not much is known about his personal life, but his artistic career left an indelible mark on the world of art.

                        Bosch likely received his artistic training in 's-Hertogenbosch, and he later became a member of the local painters' guild. He spent most of his life in this town, and it is believed that he never ventured far from his hometown. This relative isolation from the artistic centers of his time allowed him to develop a unique and imaginative style that would later become synonymous with his name.
                    </p>
                    <h3>Works of Hieronymus Bosch:</h3>
                    <p>
                        Hieronymus Bosch is best known for his intricate and enigmatic paintings that often depict fantastical and nightmarish scenes filled with bizarre creatures, allegorical symbols, and religious themes. His most famous work, "The Garden of Earthly Delights," is a triptych that explores the concept of sin and temptation. It showcases a surreal landscape teeming with human and animal figures engaged in various hedonistic and sinful activities.

                        Another notable work is "The Last Judgment," a haunting portrayal of the final judgment day, where the righteous ascend to heaven, and the damned are condemned to hell. Bosch's vivid and imaginative imagery in this painting continues to captivate and mystify viewers to this day.

                        His works are characterized by meticulous attention to detail, vibrant colors, and a keen sense of narrative storytelling. He often fused religious themes with elements of folklore and his own imagination, creating a body of work that is both visually striking and intellectually stimulating
                    </p>
                    <h3>Legacy  of Hieronymus Bosch:</h3>
                    <p>Hieronymus Bosch's legacy in the world of art is profound and enduring. His innovative and imaginative style set him apart from his contemporaries, and he continues to influence artists, writers, and filmmakers to this day. His works challenge viewers to delve into their subconscious and ponder the complexities of human nature, morality, and the afterlife.

                        In the centuries following his death, Bosch's paintings have been subject to various interpretations and analyses, contributing to the development of art history and scholarship. His impact can be seen in the works of later artists, such as Salvador Dalí and Max Ernst, who drew inspiration from his dreamlike and surreal imagery.

                        Hieronymus Bosch's paintings remain a testament to the power of art to transcend time and culture. His ability to blend the real and the fantastical, the sacred and the profane, continues to fascinate and provoke thought, making him a timeless figure in the annals of art history. His legacy is a testament to the enduring power of creativity and imagination</p>
                </div>
            </div>
            <div className="about-slideshow">
                <div className="slideshow-images">

                    <img
                        key={2}
                        src={selectedImage}
                        alt={`Image`}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
