
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import './App.css';



function App() {
  let[city,setCity]=useState('')
  let[wdetails,setWdetails]=useState()
  let[isloading,setIsloading]=useState(false)
  let getData=(event)=>{
    setIsloading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f773afba14714da30d2cfc9080cec67&units=metric`)
    .then((res)=>res.json())
    .then((finalres)=>{
      if(finalres.cod==='404' || finalres.cod==='400'){
        setWdetails(undefined)
      }
      else{

      console.log(finalres)
      setWdetails(finalres)
    }
    setIsloading(false)
    })
  
    event.preventDefault();
  }

  return (
  <div className="App">
      <div className='weather'>
         <h1>Your Weather App</h1>
         <form className='d-flex my-4' onSubmit={getData}>
          <input value={city} onChange={(event)=>setCity(event.target.value)} type='text' className='form-control' placeholder='Enter Your City Name here'/><button className='btn btn-primary ms-2'>Submit</button>
          </form>
          <div className='bg-white p-3'>
           <img src='https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952zs2or1e4qm60j8lg64vbcbiiyl9ri8ceoxf7kt5b&ep=v1_gifs_search&rid=200w.gif&ct=g' alt=''style={{width:'170px'}} className={`${isloading?'':'d-none'}`}/>
            {wdetails!==undefined?
            <>
            <div className='d-flex g-2 justify-content-center'>
              <h2>{wdetails.name}</h2>
              <h3 className='bg-info ms-2 p-1 '>{wdetails.sys.country}</h3>
            </div>
            <h3 className='text-warning'>{wdetails.main.temp} °C</h3>
            <img src={`https://openweathermap.org/img/wn/${wdetails.weather[0].icon}@2x.png`} alt=''/>
            <h6>{wdetails.weather[0].description}</h6>
            </>
            :
            <h2>No Data Found(Invalid Data)</h2>
            }
          </div>
      </div>

  </div>

  
  );
}
export default App