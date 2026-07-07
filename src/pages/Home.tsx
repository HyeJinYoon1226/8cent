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
          <p className="eyebrow">8CENT BRAND PROJECT 2026</p>
          <h1>8cent</h1>

          <p>
            여행에서 스쳐 간 거리, 바람, 색감,
            <br />
            순간의 기억을 향으로 기록합니다.
            <br />
            <br />
            Keep Your Journey in a Scent
          </p>

          <div className="hero-buttons">
            <Link to="/brand" className="main-button">
              브랜드 소개
            </Link>
            <Link to="/test" className="sub-button">
              향 테스트
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span>PROJECT OVERVIEW</span>
          <h2>감성을 향기로, 추억을 오브제로</h2>
          <p>
            8cent는 일본 여행의 감정적 순간을 향기로 기록하고,
            업사이클링 가챠 오브제를 통해 기억을 형태로 남기는 브랜드입니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span>THE SCENT OF MEMORY</span>
          <h2>도시 향 컬렉션</h2>
          <p>
            오사카, 교토, 나라의 분위기를 향으로 풀어낸
            8cent의 시그니처 컬렉션입니다.
          </p>
        </div>

        <div className="grid">
          {perfumes.map((perfume) => (
            <PerfumeCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </section>

      <section className="dark-section">
        <p className="eyebrow">USER EXPERIENCE</p>
        <h2>
          Travel
          <br />
          Emotion
          <br />
          Scent
          <br />
          Memory
        </h2>
        <p>
          여행에서 얻은 감정이 향기로 변환되고,
          향은 다시 기억을 불러오는 매개가 됩니다.
        </p>
        <Link to="/upcycling" className="main-button">
          업사이클링 오브제 보기
        </Link>
      </section>
    </main>
  );
}

export default Home;