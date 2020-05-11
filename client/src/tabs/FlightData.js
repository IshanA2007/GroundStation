import React, { useState, useEffect } from 'react';
import { httpget } from '../backend.js'

const FlightData = () => {

  const [telem, setTelem] = useState([]);
  const queryValues = () => {
    httpget("/mav/telem", (response) => setTelem(response.data));
  }

  useEffect(() => {
    //        const interval = setInterval(() => {
    //            queryValues();
    //        }, 1000);
    //        return () => clearInterval(interval);
  }, []);

  return (
    <div>You opened the flight data tab {telem[0]} {telem[1]} {telem[2]}
    </div>
  )
}

export default FlightData;