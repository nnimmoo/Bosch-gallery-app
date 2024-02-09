
import { Link } from "react-router-dom";
function PaintingCard({ data }) {
    return (
        <Link to={`/Gallery/${data._uuid}`}>
            <div className="painting">
                <img src={data.imageLink} alt={data.name} />
                <h3>{data.name}</h3>
            </div>
        </Link>
    );
}

export default PaintingCard;
