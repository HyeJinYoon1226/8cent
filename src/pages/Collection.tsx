import PerfumeCard from "../components/PerfumeCard";
import { perfumes } from "../data/perfumes";

function Collection() {
  return (
    <main className="section">
      <div className="section-title">
        <span>PRODUCT LINE</span>
        <h1>Signature Scent Collection</h1>
        <p>
          오사카, 교토, 나라의 분위기를 향으로 해석한
          8cent의 세 가지 시그니처 컬렉션입니다.
        </p>
      </div>

      <div className="grid">
        {perfumes.map((perfume) => (
          <PerfumeCard key={perfume.id} perfume={perfume} />
        ))}
      </div>
    </main>
  );
}

export default Collection;