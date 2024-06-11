import React, { useState, useEffect } from 'react';
import '../Components/Barchart.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Barchart = () => {
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://roxiler-assignment-backend.onrender.com/bar-chart?month=${selectedMonth}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedMonth]); 

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };


  return (
    <div className="bar-chart-container">
     <div className='heading-container'>
     <h2 className="chart-title">Price Distribution (Month {selectedMonth})</h2>
      <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
      </select>
     </div>
      <BarChart width={500} height={250} data={data}>
        <XAxis dataKey="priceRange" />
        <YAxis tickFormatter={(value) => Math.round(value)} />
        <Tooltip />
        <Bar dataKey="itemCount"/>
      </BarChart>
    </div>
  );
};




export default Barchart;



