import React, { useEffect } from 'react'
import './FilmPage.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneFilm } from '../../store/slices/filmsSlice'

function FilmPage(){
  const dispatch = useDispatch()
  const {language} = useSelector((state) => state.globalData)
  const {film} = useSelector((state) => state.filmsData)
  const {id} = useParams()

  const imgUrl = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    dispatch(getOneFilm({id, language}))
  }, [id])

  return(
    <div className='FilmPage'>
        <div className="img-name">
            <img src={imgUrl + film.poster_path} width={250} height={300}/>
            <div>{film.title}</div>
        </div>
        <div className="info">
            <h4>Origin Country- {film.origin_country}</h4>
            <h4>Original Language- {film.original_language}</h4>
            <p>Popularity- {film.popularity}</p>
            <h3>Release Date  {film.release_date}</h3>
        </div>
    </div>
  )
}

export default FilmPage
