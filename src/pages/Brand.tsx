import { Link } from "react-router-dom";

function Brand() {
  return (
    <main>
      <section className="brand-hero">
        <p className="eyebrow">BRAND STORY</p>
        <h1>
          Keep Your Journey
          <br />
          in a Scent
        </h1>
        <p>
          8cent는 일본 여행에서 마주한 공간, 거리, 문화의 감정을
          향기로 기록하는 라이프스타일 브랜드입니다.
        </p>
        <Link to="/test" className="main-button">
          나의 향 찾기
        </Link>
      </section>

      <section className="section">
        <div className="section-title">
          <span>BRAND VISION</span>
          <h2>여행의 감각을 오래도록 간직하다</h2>
          <p>
            일본 여행의 감정적 순간을 향기로 전환하고,
            업사이클링 오브제를 통해 기억을 형태로 보관합니다.
          </p>
        </div>

        <div className="keyword-grid">
          <div>
            <h3>Memory</h3>
            <p>향기는 특정 순간을 선명하게 불러옵니다.</p>
          </div>
          <div>
            <h3>Journey</h3>
            <p>일본의 도시, 신사, 자연에서 만난 감각적 경험.</p>
          </div>
          <div>
            <h3>Scent</h3>
            <p>각 도시의 분위기를 담은 시그니처 퍼퓸.</p>
          </div>
          <div>
            <h3>Sustainability</h3>
            <p>버려지는 가챠 캡슐을 오브제로 재탄생시킵니다.</p>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <p className="eyebrow">8 PEOPLE · 8 SCENTS · 1 MEMORY</p>
        <h2>
          8명의 여행자가
          <br />
          하나의 기억을 향으로 남깁니다.
        </h2>
        <p>
          같은 장소에서도 각자가 기억하는 감정은 다릅니다.
          8cent는 그 감각의 차이를 향과 오브제로 기록합니다.
        </p>
      </section>

      <section className="section">
        <div className="timeline">
          <div>
            <span>01</span>
            <h3>Travel</h3>
            <p>일본의 도시와 문화를 경험합니다.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Emotion</h3>
            <p>순간의 분위기와 감정을 포착합니다.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Scent</h3>
            <p>감정을 향기의 언어로 변환합니다.</p>
          </div>
          <div>
            <span>04</span>
            <h3>Memory</h3>
            <p>향을 통해 여행의 순간을 다시 떠올립니다.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Brand;