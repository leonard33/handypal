import React from 'react'
import './Searches.css'
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';


const workers = [
    {names: "Leonard Kombo",
     image:"https://dlisted.com/wp-content/uploads/2018/11/idrissexyiestman2018.jpg" ,
     jobtitle:"Air conditioning & Refregiration",
     detail:"Hard working 5ys experience in the field",
     rating:"3.5",
     price:" Negotiable"
     },
     {names: "Leonard Kombo",
     image:"https://www.asplumbingcompany.com/images/home/as%20plumber%20smiling-1@2x.png",
     jobtitle:"Plumber",
     detail:"Hard working 5ys experience in the field",
     rating:"4.0",
     price:"$ 500"
     },
     {names: "Leonard Kombo",
     image:"https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/01/The-Best-Electrician-Near-Me.jpg",
     jobtitle:"Electrician",
     detail:"Hard working 5ys experience in the field",
     rating:"4.5",
     price:"$ 200"
     },
];

function Searches() {

  return (
    <div className='searches'>
       <h3>Find workers near you</h3> 
       <p>20 plumbers . 15 electricians . 10 air conditioning . 20 tile/flooring . 12 fixtures/fittings . 10 roof repair</p>
       <div className='links'>
       <Button variant='outline'>Electrician</Button>
       <Button variant='outline'>Plumber</Button>
       <Button variant='outline'>Fixtures / Fittings</Button>
       <Button variant='outline'>Tile / Flooring</Button>
       <Button variant='outline'>Air conditioning</Button>
       <Button variant='outline'>Roof repair / painting</Button>
       </div>
       
       {workers.map((worker,index)=>(
        <div className='search_results' key={index} > 
         <div className='search_image'>
             <img src={worker.image} alt=''/> 
             </div> 
           <div className='search_info'>  
         <div className='worker_name'> {worker.names}</div>
         <div className='worker_title'> {worker.jobtitle}</div>
         <div className='worker_detail'> {worker.detail} </div>
        <div className='bottom'>
            <div className='rating'> Rating: <StarIcon/>{worker.rating}</div> 
        <div className='pricing'> <p>Price per/hr:</p> {worker.price}</div>
        </div>
        <div className='choice'>
        <Button variant='outline'>Book Now</Button>
         <Button variant='outline'>View Profile</Button>
       
       </div>
         </div>
         </div>
          ))}
    </div>
  )
}

export default Searches