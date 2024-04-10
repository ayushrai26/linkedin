import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function PoojaCard(props) {
  const navigate = useNavigate(); 

  const handleBookNowClick = () => {
    navigate('/blank-page'); 
  };

  return (
    <div className='card'>
    <div className='container'>
    
      <p className='content'><h2>{props.poojaName}</h2>{props.about} </p><div className='image'><Button variant="primary" onClick={handleBookNowClick}>
      Book Now
    </Button></div></div><hr width='100%'color='pink'/>
      
      
    
    
    
    <p><strong>What are the Benefits?</strong> </p>
    <p>{props.benefits}</p><hr width='100%'color='pink'/>
    
    <p><strong>How will it happens?</strong> </p>
    <p>{props.howItHappens}</p><hr width='100%'color='pink'/>
    <p><strong>About {props.poojaName} Devta:</strong> </p>
    <p>{props.aboutDevta}</p><hr width='100%'color='pink'/>
    <p><strong>What should you do after Pooja to get maximum benefits?</strong></p>
    <p> {props.afterPooja}</p><hr width='100%'color='pink'/>
    <p><strong>Why book with divine connection?</strong></p>
    <p> {props.bookWithUs}</p>
    
    
    
  </div>
  
    
  );
}

export default PoojaCard;
