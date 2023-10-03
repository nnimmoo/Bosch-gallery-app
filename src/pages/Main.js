
import Footer from "../components/Footer";
import setBodyColor from "../script";
import decor1 from "../assets/images/decor1.png"
import decor2 from "../assets/images/decor2.png"
import { Link } from "react-router-dom";

function Main() {
    setBodyColor({ color: "#ad7d4d" })
    return (
        <>
            <div className="landing-page">
                <section className="header">
                    <p>Explore the surreal and imaginative world<br />of</p>
                    <h1>HIERONYMUS <br />BOSCH</h1>
                </section>

                <section className="main-section">
                    <div className="main-section-fragment">
                        <img src={decor1} alt="Knight on the fish" id="decor1" />
                        <div className="main-text">

                            <h2>About Hieronymus Bosch</h2>
                            <p>
                                Hieronymus Bosch, born Jheronimus van Aken, was a renowned Dutch painter of the Northern Renaissance,
                                whose life spanned the late 15th and early 16th centuries. Hieronymus Bosch's paintings remain a testament to the power of art to transcend time and culture.
                            </p>
                            <Link to="/About">
                                <button className="main-section-button">More About</button> </Link>
                        </div>
                    </div>
                    <div className="main-section-fragment">
                        <div className="main-text">
                            <h2>About Artworks</h2>
                            <p>
                                Bosch's artstyle is a mesmerizing blend of the surreal and the symbolic, characterized by intricate details, vivid colors,
                                and a penchant for depicting fantastical worlds. His works explore the depths of human imagination, offering a glimpse
                                into a dreamlike realm filled with bizarre creatures and enigmatic narratives.
                            </p>
                            <Link to="/Gallery">
                            <button className="main-section-button">Gallery</button>
                            </Link>
                        </div>
                        <img src={decor2} alt="Old men on the fish" id="decor2" />
                    </div>
                </section>
            </div>
            <Footer />

        </>
    );
}

export default Main;
