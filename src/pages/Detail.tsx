import { useParams } from "react-router-dom";
import { perfumes } from "../data/perfumes";
import { usePerfume } from "../context/PerfumeContext";

function Detail() {
  const { id } = useParams();
  const { savePerfume, savedPerfumes } = usePerfume();

  const perfume = perfumes.find((item) => item.id === Number(id));

  if (!perfume) {
    return <main className="section">향수를 찾을 수 없습니다.</main>;
  }

  const isSaved = savedPerfumes.some((item) => item.id === perfume.id);

  return (
    <main className="detail">
      <div className="detail-box">
        <div className="detail-image-box">
          <img src={perfume.image} alt={perfume.name} />
        </div>

        <p className="eyebrow">{perfume.city} SCENT</p>
        <h1>{perfume.name}</h1>
        <h2>{perfume.concept}</h2>

        <p>{perfume.description}</p>
        <p className="story-text">{perfume.story}</p>

        <h3>향 노트</h3>
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
      </div>
    </main>
  );
}

export default Detail;