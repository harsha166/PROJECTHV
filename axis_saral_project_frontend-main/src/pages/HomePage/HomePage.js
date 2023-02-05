import React from 'react'
import ImageSlider from './ImageSlider';
import EmployeeLogin from '../LoginPages/EmployeeLogin'

const HomePage = () => {
  const slides= [
    {url :'https://i.ytimg.com/vi/Q86txrxs1nU/maxresdefault.jpg'},
    {url :'https://pbs.twimg.com/media/FIWN_zJVUAEuiOr.jpg'},
    {url :'https://i.ytimg.com/vi/Tf76e0HaKfw/maxresdefault.jpg'},
    {url :'https://www.axisbank.com/images/default-source/default-album/5-deciding-factors.jpg'},
  ];

  const containerStyles ={
    width:"1000px",
    height:"500px",
    margin: "150px",
    align:"centre",
  };

  return (
    <div style={containerStyles}>
      <ImageSlider slides={slides} />
      <EmployeeLogin />
      </div>
  );
}

export default HomePage
