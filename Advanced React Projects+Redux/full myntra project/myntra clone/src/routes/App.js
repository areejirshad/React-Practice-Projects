
import { Outlet } from 'react-router';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Fetch from '../Components/Fetch';
import { useSelector } from 'react-redux';





function App() {
    const fetchStatus=useSelector(store=>store.fetchitems)

    return (
   <div>
      <Header/>
      <Fetch/>
      {fetchStatus.currentlyFetching?<img src='/images/200w.gif' style={{width:'200px',display:'flex',justifyContent:'center', alignItems:'center', margin:'auto', padding:'10px 0px'}} alt=''/>:<Outlet></Outlet>}
      <Footer/>
   </div>
    );
}


export default App;
