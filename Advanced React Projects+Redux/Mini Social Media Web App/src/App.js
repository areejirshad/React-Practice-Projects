
import './App.css';
import Createpost from './Components/Createpost';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'; 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { useState } from 'react';
import PostlistProvider from './Source/store';
import Postlistitems from './Components/Postitemst';



function App() {
 
  let[selectedtab,setSelectedtab]=useState('Home')
  
  return (
    <PostlistProvider>
    <div className='d-flex'>
      <Sidebar selectedtab={selectedtab} setSelectedtab={setSelectedtab}/>
      <div className='container-fluid m-0 p-0'>
      <Header/>
      {
        selectedtab==='Home'?(<Postlistitems></Postlistitems>):
         (<Createpost></Createpost>)
      }
      
      <Footer/>
      
      </div>
    </div>
    </PostlistProvider>
    
  );
}

export default App;
