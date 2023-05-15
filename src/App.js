import React from 'react';
import Navbar from './Component/navbar/Navbar';
import InfoCard from './Component/InfoCarg/InfoCard';
import PaymentCard from './Component/PaymentCard/PaymentCard';


function App() 
{
 
 
 
  return (
   <>
    <div className="App">
    <header className="header">
     <Navbar/>
    </header>
    <footer className="footter">

       <div className='LeftBox'>
       <InfoCard/>
       </div>

       <div className='RightBox'>
       <PaymentCard/>
       </div>

    </footer>

     </div>
   </>
  );
}

export default App;
