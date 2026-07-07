import { GoogleMap, Marker, InfoWindow, LoadScript } from "@react-google-maps/api";
import { useState } from "react";

type Store = {
  name: string;
  address: string;
  position: {
    lat: number;
    lng: number;
  };
  desc: string;
};

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 34.70549,
  lng: 135.49833,
};

const stores: Store[] = [
  {
    name: "Hankyu Umeda Main Store",
    address: "8-7 Kakudacho, Kita Ward, Osaka, 530-8350",
    position: {
      lat: 34.70549,
      lng: 135.49833,
    },
    desc: "8cent 팝업스토어",
  },
];

function FindUs() {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  return (
    <main className="section">
      <div className="section-title">
        <span>FIND US</span>
        <h1>8cent Pop-up Store Map</h1>
        <p>
          구매 기능 대신, 브랜드가 입점할 수 있는 우메다 중심의
          가상 팝업스토어 위치를 지도에 표시했습니다.
        </p>
      </div>

      <div className="map-layout">
        <div className="map-box">
          <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={17}
            >
              {stores.map((store) => (
                <Marker
                  key={store.name}
                  position={store.position}
                  title={store.name}
                  onClick={() => setSelectedStore(store)}
                />
              ))}

              {selectedStore && (
                <InfoWindow
                  position={selectedStore.position}
                  onCloseClick={() => setSelectedStore(null)}
                >
                  <div>
                    <strong>{selectedStore.name}</strong>
                    <br />
                    {selectedStore.address}
                    <br />
                    {selectedStore.desc}
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
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