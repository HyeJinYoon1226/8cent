import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const stores = [
  {
    name: "Daimaru Umeda",
    address: "오사카 우메다 백화점 상권",
    position: [34.7025, 135.4959] as [number, number],
    desc: "8cent 가상 팝업 판매처",
  },
  {
    name: "Hankyu Umeda",
    address: "우메다 프리미엄 백화점 상권",
    position: [34.7036, 135.4985] as [number, number],
    desc: "향수 컬렉션 및 기프트 세트 전시",
  },
  {
    name: "Lucua Osaka",
    address: "오사카역 라이프스타일 쇼핑몰",
    position: [34.7031, 135.4956] as [number, number],
    desc: "2030 여행객 대상 브랜드 체험존",
  },
  {
    name: "Hands Umeda",
    address: "우메다 라이프스타일 편집숍",
    position: [34.7028, 135.4973] as [number, number],
    desc: "캡슐 오브제 및 향수 체험 공간",
  },
  {
    name: "Loft Umeda",
    address: "감성 굿즈 및 라이프스타일 상권",
    position: [34.7078, 135.4997] as [number, number],
    desc: "8cent 업사이클링 오브제 전시",
  },
];

function FindUs() {
  return (
    <main className="section">
      <div className="section-title">
        <span>FIND US</span>
        <h1>8cent Pop-up Store Map</h1>
        <p>
          구매 기능 대신, 브랜드가 입점할 수 있는 우메다 중심의
          가상 판매처와 팝업 위치를 지도에 표시했습니다.
        </p>
      </div>

      <div className="map-layout">
        <div className="map-box">
          <MapContainer
            center={[34.704, 135.497]}
            zoom={15}
            scrollWheelZoom={false}
            className="map"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {stores.map((store) => (
              <Marker key={store.name} position={store.position}>
                <Popup>
                  <strong>{store.name}</strong>
                  <br />
                  {store.address}
                  <br />
                  {store.desc}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="store-list">
          {stores.map((store) => (
            <div key={store.name} className="store-card">
              <h3>{store.name}</h3>
              <p>{store.address}</p>
              <small>{store.desc}</small>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default FindUs;