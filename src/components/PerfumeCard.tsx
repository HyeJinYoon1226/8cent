import { Link } from "react-router-dom";
import type { Perfume } from "../types/perfume";

function PerfumeCard({ perfume }: { perfume: Perfume }) {
  return (
    <div className="card">
      <div className="perfume-image-box">
        <img src={perfume.image} alt={perfume.city} />
      </div>

      <div className="card-body">
        <h3>{perfume.name}</h3>

        <p className="city">{perfume.city}</p>

        <p className="concept">{perfume.concept}</p>

        <Link to={`/detail/${perfume.id}`} className="button">
          자세히 보기
        </Link>
      </div>
    </div>
  );
}

export default PerfumeCard;