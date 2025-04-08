import './FilmsCard.css'
import { NavLink } from 'react-router-dom'

function FilmsCard({film}){
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'

    return (
        <NavLink to={`/${film.id}`} className='film-card'>
            <h3>{film.title}</h3>
            <img src={imgUrl + film.poster_path} />
        </NavLink>
    )
}

export default FilmsCard
