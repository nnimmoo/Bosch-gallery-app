import ErrorImage from "../assets/images/err-img.png"

function Error404() {
    return (
        <>

            <section className="error-section">
                <img src={ErrorImage} />
                <div className="error-text">
                    <h1>404</h1>
                    <h2>
                        Oh no, this page doesn't exist.
                    </h2>
                </div>
            </section>
        </>
    );
}

export default Error404;
