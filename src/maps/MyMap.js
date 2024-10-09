import React, { useState, useEffect } from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';

function MyMap({ hospitals }) {
  const navermaps = useNavermaps();
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);

  useEffect(() => {
    // 사용자의 현재 위치 가져오기
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

  useEffect(() => {
    if (userLocation && hospitals.length > 0) {
      // 사용자 위치로부터 각 병원까지의 거리 계산
      const hospitalsWithDistance = hospitals.map(hospital => ({
        ...hospital,
        distance: calculateDistance(
          userLocation.lat,
          userLocation.lng,
          parseFloat(hospital.latitude),
          parseFloat(hospital.longitude)
        )
      }));

      // 거리순으로 정렬하고 상위 5개 선택
      const sortedHospitals = hospitalsWithDistance
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

      setNearbyHospitals(sortedHospitals);
    }
  }, [userLocation, hospitals]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    
    const R = 6371; //(km)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return R * c;
  };

  return (
    <MapDiv style={{ width: '100%', height: '400px' }}>
      <NaverMap
        defaultCenter={userLocation 
          ? new navermaps.LatLng(userLocation.lat, userLocation.lng)
          : new navermaps.LatLng(37.3595704, 127.105399)}
        defaultZoom={15}
      >
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
        {nearbyHospitals.map((hospital, index) => (
          <Marker
            key={index}
            position={new navermaps.LatLng(parseFloat(hospital.latitude), parseFloat(hospital.longitude))}
            title={hospital.name}
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
              infoWindow.open(navermaps, this);
            }}
          />
        ))}
      </NaverMap>
    </MapDiv>
  );
}

export default MyMap;