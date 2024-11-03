import React, { Suspense, useEffect, useState } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import MyMap from './MyMap';
import { getHospitals } from '../global/hospitalService';

function Map() {
  const ncpClientId = process.env.REACT_APP_NCP_ClientId;
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    getHospitals()
      .then((data) => setHospitals(data))
      .catch((error) => console.error('Error fetching hospitals:', error));
  }, []);

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <Suspense fallback={<div>Loading map...</div>}>
        <MyMap hospitals={hospitals} />
      </Suspense>
    </NavermapsProvider>
  );
}

export default Map;