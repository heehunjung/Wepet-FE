import React, { useState, useEffect } from 'react';
import { Marker, useNavermaps } from 'react-naver-maps';

function MyMap() {
  const navermaps = useNavermaps();
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [showHospitals, setShowHospitals] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  const fetchNearbyHospitals = async () => {
    if (!userLocation) return;

    try {
      // 실제 API 엔드포인트로 대체해야 합니다.
      const response = await fetch(`https://your-api-endpoint.com/hospitals?lat=${userLocation.lat}&lng=${userLocation.lng}&limit=5`);
      const data = await response.json();
      setNearbyHospitals(data);
      setShowHospitals(true);
    } catch (error) {
      console.error("Error fetching nearby hospitals:", error);
    }
  };

  return (
    <>
      <button 
        onClick={fetchNearbyHospitals}
        style={{
          position: 'absolute',
          zIndex: 1000,
          top: '10px',
          left: '10px',
          padding: '10px',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Find Hospitals
      </button>

      {userLocation && (
        <Marker
          position={new navermaps.LatLng(userLocation.lat, userLocation.lng)}
          icon={{
            url: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png',
            size: new navermaps.Size(30, 30),
            scaledSize: new navermaps.Size(30, 30),
          }}
        />
      )}

      {showHospitals && nearbyHospitals.map((hospital, index) => (
        <Marker
          key={hospital.id || index}
          position={new navermaps.LatLng(parseFloat(hospital.latitude), parseFloat(hospital.longitude))}
          title={hospital.name}
          icon={{
            url: 'https://maps.gstatic.com/mapfiles/ms2/micons/hospitals.png',
            size: new navermaps.Size(30, 30),
            scaledSize: new navermaps.Size(30, 30),
          }}
          onClick={() => {
            const infoWindow = new navermaps.InfoWindow({
              content: `
                <div style="padding:10px;width:200px;">
                  <h3>${hospital.name}</h3>
                  <p>전화번호: ${hospital.phone_number}</p>
                  <p>주소: ${hospital.address}</p>
                  <p>거리: ${hospital.distance.toFixed(2)} km</p>
                </div>
              `
            });
            infoWindow.open(navermaps, hospital);
          }}
        />
      ))}
    </>
  );
}

export default MyMap;