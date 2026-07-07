import { Link } from "react-router-dom";

function Brand() {
  return (
    <main>
      {/* <section className="brand-hero">
        <p className="eyebrow">BRAND STORY</p>
        <h1>
          Scent of Value
          <br />
          Story of Rebirth
        </h1>
        <p>
          8cent는 향기와 업사이클링 오브제를 통해 여행의 순간을 오래
          기억하게 하는 라이프스타일 브랜드입니다.
        </p>
        <Link to="/test" className="main-button">
          나의 향 찾기
        </Link>
      </section>

      <section className="section">
        <div className="section-title"> <br></br>
          <span>ABOUT 8CENT</span>
          <h2>향기로 기억하고 오브제로 간직하다</h2>
          <p>
            8cent는 8명의 창작자가 모여 만든 브랜드입니다. 브랜드명에는
            팀원 8명과 향기를 의미하는 Scent의 의미가 담겨 있습니다.
          </p>
        </div>
        
        <div className="keyword-grid">
          <div>
            <h3>8 Creators</h3>
            <p>8명의 창작자가 함께 만든 향기 기반 브랜드.</p>
          </div>
          <div>
            <h3>Scent</h3>
            <p>기억과 감정을 다시 불러오는 향기.</p>
          </div>
          <div>
            <h3>Gacha Capsule</h3>
            <p>오사카 가챠 문화에서 얻은 브랜드 영감.</p>
          </div>
          <div>
            <h3>Rebirth</h3>
            <p>버려지는 캡슐을 오브제 키링으로 재탄생.</p>
          </div>
        </div>
      </section> */}

      <section className="dark-section">
        <p className="eyebrow">SCENT · MEMORY · OBJECT</p>
        <h2>
          캡슐 속 향기,
          <br />
          향기 속 여행의 순간
        </h2>
        <p>
          8cent는 버려지는 가챠 캡슐에 새로운 가치를 더합니다.
          <br />
          향기와 추억을 담는 오브제 키링으로 다시 태어납니다.
        </p>
        <Link to="/test" className="main-button">
          나의 향 찾기
        </Link>
      </section>

      <section className="section">
        <div className="section-title">
          <span>BRAND VISION</span>
          <h2>작은 설렘이 특별한 추억이 되도록</h2>
          <p>
            버려진 물건에 새로운 생명을, 여행의 순간에 새로운 의미를,
            일상에는 오래 남을 향기를 전합니다.
          </p>
        </div>

        <div className="timeline">
          <div>
            <span>01</span>
            <h3>Travel</h3>
            <p>여행의 거리와 문화를 경험합니다.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Scent</h3>
            <p>그 순간을 향기로 기록합니다.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Object</h3>
            <p>가챠 캡슐을 오브제로 재탄생시킵니다.</p>
          </div>
          <div>
            <span>04</span>
            <h3>Memory</h3>
            <p>향기와 오브제로 추억을 간직합니다.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Brand;