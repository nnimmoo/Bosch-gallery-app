import ErrorImage from "../assets/images/err-img.png"

function Error404() {
    return (
        <>

            <section className="error-section">
                <img src={ErrorImage} />
                <div className="error-text">
                    <h1>404</h1>
                    <h2>
                        Oh, this page was taken by the bird.<br />
                        Sadly, there is nothing we can do.
                    </h2>
                </div>
            </section>
        </>
    );
}

export default Error404;
