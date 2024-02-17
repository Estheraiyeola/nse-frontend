import React from 'react'
import Slider from "react-slick";
import newsApi from '../pages/api/news-api'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SimplSlider = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  return (
    <div>
      <Slider {...settings}>
      {newsApi.map((news, index) => (
          <a key={index} href={news.images[0]} target="_blank" rel="noopener noreferrer">
            <div
              key={index}
              style={{
                backgroundImage: `url(${news.images[0].image})`, // Assuming first image is the background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '30vw', // Adjust height as needed
              }}
            >
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
                <div className=' m-[100px] '>
                <h1 style={{ color: 'white' }}>{news.title}</h1>
                <p style={{ color: 'white' }}>{news.author}</p>
                {news.images.slice(1).map((image, idx) => ( // Skip first image, as it's used as background
                  <img key={idx} src={image.image} target="_blank" rel="noopener noreferrer" alt={image.imageDescription}/>
                ))}
                </div>
              
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  )
}

export default SimplSlider
