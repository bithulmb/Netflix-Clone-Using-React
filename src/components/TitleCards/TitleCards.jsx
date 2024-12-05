import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { IMAGE_URL } from '../../assets/utils';
import { Link } from 'react-router';



const TitleCards = (props) => {

  const {title, category} = props;

  const [apiData, setApiData] = useState([])

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTJmZDUwMTM3MDY4YjU5ZGI0NjU1OTI5NGRiYzg3NiIsIm5iZiI6MTczMzI4ODE1MS45NDIwMDAyLCJzdWIiOiI2NzRmZTBkNzM1NWRiYzBiMTVkN2ExMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.O8vumKxRnobV1OSViiIWUaNBH2qbkuVOhGkIYfaoVy8'
    }
  };
  


  const handleWheel = (e) => {
    e.preventDefault()
    cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])
  
  return (
    <div className='title-cards'>
      <h2 className=' font-bold '>{title?title:"Popular on Netflix" }</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index) => {
          return (
            <Link to={`/player/${card.id}`}>
              <div key={index} className='card'>
              <img src={IMAGE_URL + card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
              </div>
            </Link>
            
          )
        })}
      </div>
      
    </div>
  )
}

export default TitleCards
