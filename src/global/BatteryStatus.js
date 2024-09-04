import React, { useState, useEffect } from 'react';

const BatteryStatus = () => {
  const [batteryInfo, setBatteryInfo] = useState({
    level: 1,
    charging: false,
    chargingTime: 0,
    dischargingTime: 0,
  });

  useEffect(() => {
    const getBattery = async () => {
      const battery = await navigator.getBattery();
      const updateBatteryInfo = () => {
        setBatteryInfo({
          level: battery.level,
          charging: battery.charging,
          chargingTime: battery.chargingTime,
          dischargingTime: battery.dischargingTime,
        });
      };
      updateBatteryInfo();
      battery.addEventListener('levelchange', updateBatteryInfo);
      battery.addEventListener('chargingchange', updateBatteryInfo);
      battery.addEventListener('chargingtimechange', updateBatteryInfo);
      battery.addEventListener('dischargingtimechange', updateBatteryInfo);
    };
    getBattery();
  }, []);

  return (
    <div>
      <h1>Battery Status</h1>
      <p>Battery Level: {batteryInfo.level * 100}%</p>
      <p>Charging: {batteryInfo.charging ? 'Yes' : 'No'}</p>
      <p>Charging Time: {batteryInfo.chargingTime} seconds</p>
      <p>Discharging Time: {batteryInfo.dischargingTime} seconds</p>
    </div>
  );
};

export default BatteryStatus;