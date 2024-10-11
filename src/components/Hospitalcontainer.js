import React from 'react';
import { NavermapsProvider, NaverMap } from 'react-naver-maps';
import HospitalMap from './HospitalMap';

function HospitalMapContainer() {
  const ncpClientId = process.env.REACT_APP_NCP_ClientId;

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <NaverMap 
        style={{width: '100%', height: '400px'}}
        defaultCenter={{lat: 37.3595704, lng: 127.105399}}
        defaultZoom={10}
      >
        <HospitalMap />
      </NaverMap>
    </NavermapsProvider>
  );
}

export default HospitalMapContainer;