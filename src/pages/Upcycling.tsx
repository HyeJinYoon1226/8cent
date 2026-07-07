import capsuleImage from "../capsule.png";
import dioramaImage from "../diorama.png";
import objectImage from "../object.png";

function Upcycling() {
  return (
    <main>
      <section className="dark-section">
        <p className="eyebrow">UPCYCLING OBJECT</p>
        <h1>
          버려지는 캡슐을
          <br />
          아름다운 오브제로
        </h1>
        <p>
          8cent는 사용 후 버려지는 가챠 캡슐을 세척하고,
          여행지의 작은 장면을 담은 디오라마 오브제로 재해석합니다.
        </p>
      </section>

      <section className="section beige-section">
        <div className="step-grid">
          <div className="step-card">
            <img src={capsuleImage} alt="캡슐 수거 및 세척" />
            <span>Step 01</span>
            <h3>캡슐 수거 및 세척</h3>
            <p>가챠 캡슐을 재사용 가능한 소재로 정리합니다.</p>
          </div>

          <div className="step-card">
            <img src={dioramaImage} alt="미니 디오라마 구성" />
            <span>Step 02</span>
            <h3>미니 디오라마 구성</h3>
            <p>도시별 기억을 작은 장면으로 표현합니다.</p>
          </div>

          <div className="step-card">
            <img src={objectImage} alt="향 오브제 완성" />
            <span>Step 03</span>
            <h3>향 오브제 완성</h3>
            <p>향수와 함께 보관할 수 있는 키링 오브제로 완성합니다.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Upcycling;