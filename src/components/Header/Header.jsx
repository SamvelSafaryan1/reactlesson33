import './Header.css'
import logo from '../../assets/i.webp'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../store/slices/genresSlice'
import Btn from '../UI/Btn/Btn'
import { changeLanguage } from '../../store/slices/globalSlice'
import { getSearch, changeText } from '../../store/slices/filmsSlice'
import { useNavigate } from 'react-router-dom'

function Header(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {genres} = useSelector((state) => state.genresData)
    const {language} = useSelector((state) => state.globalData)
    const {text} = useSelector((state) => state.filmsData)

    useEffect(() => {
        dispatch(getGenres({language: language}))
    }, [language])

    const searchFilm = (text) => {
        dispatch(getSearch(text))

        navigate(`/searchFilm`)
    }

    return(
        <header>
            <div className="logo">
                <img src={logo} alt='logo'/>
            </div>
            <nav className='nav'>
                {
                    genres.map((genre) => {
                        return <Btn key={genre.id} genre={genre}/>
                    })
                }
            </nav>
            <div className="search">
                <input type="search" placeholder='Search' value={text} onChange={(e) => dispatch(changeText(e.target.value))}/>
                <button onClick={() => searchFilm(text)}>Search</button>
                <select onChange={(e) => dispatch(changeLanguage(e.target.value))}>
                    <option value='en-US'>US</option>
                    <option value='ru-RU'>RU</option>
                </select>
            </div>
        </header>
    )
}

export default Header
