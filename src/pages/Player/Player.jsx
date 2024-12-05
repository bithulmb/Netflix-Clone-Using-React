import React, { useEffect,useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router'

const Player = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name : "",
    key : "",
    published_at : "",
    type : "",
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTJmZDUwMTM3MDY4YjU5ZGI0NjU1OTI5NGRiYzg3NiIsIm5iZiI6MTczMzI4ODE1MS45NDIwMDAyLCJzdWIiOiI2NzRmZTBkNzM1NWRiYzBiMTVkN2ExMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.O8vumKxRnobV1OSViiIWUaNBH2qbkuVOhGkIYfaoVy8'
    }
  };
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results.filter((video) => video.type === 'Trailer' && video.site === 'YouTube')[0]))
    .catch(err => console.error(err));

  },[])



  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => {navigate(-1)}} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer"  allowFullScreen height='90%' width='90%' frameBorder="0"></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
