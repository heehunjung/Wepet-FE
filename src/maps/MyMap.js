import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';

function MyMap() {
  const navermaps = useNavermaps(); // 네이버 맵 객체 가져오기

  return (
    <MapDiv style={{ width: '100%', height: '400px' }}>  {/* MapDiv로 지도 컨테이너를 감싸기 */}
      <NaverMap
        defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)} // 초기 위치 설정
        defaultZoom={15} // 줌 레벨 설정
      >
        <Marker
          defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)} // 마커 위치 설정
        />
      </NaverMap>
    </MapDiv>
  );
}

export default MyMap;
