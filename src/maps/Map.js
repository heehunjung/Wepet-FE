import React, { Suspense, useEffect, useState } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import MyMap from './MyMap';
import { getHospitals } from '../global/hospitalService'; // 병원 정보 가져오기

function Map() {
  const ncpClientId = process.env.REACT_APP_NCP_ClientId;
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // 병원 정보 가져오기
    getHospitals()
      .then((data) => setHospitals(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <Suspense fallback={<div>Loading map...</div>}>
        <MyMap hospitals={hospitals} /> {/* 병원 데이터를 MyMap에 전달 */}
      </Suspense>
    </NavermapsProvider>
  );
}

export default Map;
