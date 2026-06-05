import { Link } from "react-router-dom";
import PerfumeCard from "../components/PerfumeCard";
import { perfumes } from "../data/perfumes";
import perfumeImage from "../perfume.png";

function Home() {
  return (
    <main>
      <section
      className="hero"
      style={{
        backgroundImage: `url(${perfumeImage})`,
      }}
    >
      <div className="hero-content">
        <h1>8cent</h1>

        <p>
          여행에서 스쳐 간 거리, 바람, 색감,
          <br />
          순간의 기억을 향으로 기록합니다.
          <br />
          <br />
          4가지의 향 컬렉션 중 나의 여행 무드와
          <br />
          가장 닮은 향을 찾아보세요.
        </p>

        <Link to="/test" className="main-button">
          나에게 어울리는 향 찾기
        </Link>
      </div>
    </section>

      <section className="section">
        <div className="section-title">
          <span>THE SCENT OF MEMORY</span>
          <h2>여행의 추억을 담은 도시 향 컬렉션</h2>
          <p>
            각 도시가 가진 분위기와 순간의 기억을 향으로 풀어낸
            8cent만의 시그니처 컬렉션
          </p>
        </div>

        <div className="grid">
          {perfumes.map((perfume) => (
            <PerfumeCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;