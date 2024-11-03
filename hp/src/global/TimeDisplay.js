// Common/TimeDisplay.js (새 파일)
import React, { useState, useEffect } from 'react';
import { Heading } from "@chakra-ui/react";
import BatteryStatus  from "./BatteryStatus";
import "../style/App.css";

const TimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setCurrentTime(timeString);
        };
        const timerId = setInterval(updateTime, 1000);

        updateTime();

        return () => clearInterval(timerId);
    }, []);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <BatteryStatus style={{ marginRight: '8px' }} /> */}
            <Heading as='h4' size='md'>{currentTime}</Heading>
        </div>
    );
};

export default TimeDisplay;
