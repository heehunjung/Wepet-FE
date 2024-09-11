import React, { Suspense } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import MyMap from './MyMap';

function Map() {
  const ncpClientId = process.env.REACT_APP_NCP_ClientId;
  // 환경 변수가 잘 찍히는지 콘솔에 로그 출력
  console.log("Naver Map Client ID:", ncpClientId);
  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <Suspense fallback={<div>Loading map...</div>}>
        <MyMap />
      </Suspense>
    </NavermapsProvider>
  );
}

export default Map;
