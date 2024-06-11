import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import '../Components/Statistics.css'


const Statistics = () => {
    const [data,setData] = useState([])
    const [selectedMonth,setSelectedMonth] = useState('1')
   useEffect(() => {
    const FetchStatistics = async() => {
        const response = await axios.get(`https://roxiler-assignment-backend.onrender.com/statistics?&month=${selectedMonth}`)
        setData(response.data)

    }
    FetchStatistics()
     
   }, [selectedMonth])
   
    
  return (
    <div className='statistics-con'>
        
      <div className='heading-dropdown-con'>
      <h1>Statistics</h1>
      <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className='dropdown'>
        <option value="">All</option>
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
      <div className='statistics-data-con'>
        <h2>Total Sale {data.totalSaleAmount}</h2>
        <h2>Total Sold Item {data.totalSoldItems}</h2>
        <h2>Total Not Sold Items {data.totalNotSoldItems}</h2>
      </div>
    </div>
  )
}

export default Statistics
