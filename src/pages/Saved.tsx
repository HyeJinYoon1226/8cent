import PerfumeCard from "../components/PerfumeCard";
import { usePerfume } from "../context/PerfumeContext";
import { Link } from "react-router-dom";

function Saved() {
  const { savedPerfumes, removePerfume } = usePerfume();

  return (
    <main className="section">
      <div className="section-title">
        <span>MY MEMORY</span>
        <h1>My Scent Archive</h1>
        <p>나의 여행 무드와 닮은 향을 저장해보세요.</p>
      </div>

      {savedPerfumes.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <p>저장된 향수가 없습니다.</p>

          <Link to="/test" className="main-button">
            향 테스트 하러가기
          </Link>
        </div>
      ) : (
        <div className="grid">
          {savedPerfumes.map((perfume) => (
            <div key={perfume.id}>
              <PerfumeCard perfume={perfume} />
              <button
                className="delete-button"
                onClick={() => removePerfume(perfume.id)}
              >
                삭제하기
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Saved;