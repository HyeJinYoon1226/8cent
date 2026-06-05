import { Link, useParams } from "react-router-dom";
import { perfumes } from "../data/perfumes";
import { usePerfume } from "../context/PerfumeContext";

const resultMap: Record<string, number> = {
  citrus: 1,
  woody: 2,
  fresh: 3,
  sweet: 4,
};

function Result() {
  const { type } = useParams();
  const { savePerfume, savedPerfumes } = usePerfume();

  const perfumeId = resultMap[type || "citrus"];
  const perfume = perfumes.find((item) => item.id === perfumeId) || perfumes[0];

  const isSaved = savedPerfumes.some((item) => item.id === perfume.id);

  return (
    <main className="result">
      <div className="result-box">
        <div className="result-image-box">
          <img src={perfume.image} alt={perfume.name} />
        </div>

        <p className="result-subtitle">
          당신의 여행 무드와 가장 닮은 향
        </p>

        <h1>{perfume.name}</h1>
        <h3>{perfume.city}</h3>
        <p>{perfume.description}</p>

        <div className="note-list">
          {perfume.notes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>

        {isSaved ? (
          <button className="saved-button" disabled>
            이미 저장됨
          </button>
        ) : (
          <button className="main-button" onClick={() => savePerfume(perfume)}>
            저장하기
          </button>
        )}

        <Link to="/test" className="text-link">
          다시 테스트하기
        </Link>
      </div>
    </main>
  );
}

export default Result;