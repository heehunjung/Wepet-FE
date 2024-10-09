// src/global/hospitalService.js
import axios from 'axios';

export const getHospitals = async () => {
  try {
    const response = await axios.get('http://3.37.92.194/hospital_info_all.php');
    return response.data;
  } catch (error) {
    console.error('병원 데이터를 가져오는 중 오류 발생:', error);
    throw error;
  }
};
