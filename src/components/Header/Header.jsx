import './Header.css'
import logo from '../../assets/i.webp'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../store/slices/genresSlice'
import Btn from '../UI/Btn/Btn'
import { changeLanguage } from '../../store/slices/globalSlice'

function Header(){
    const dispatch = useDispatch()
    const {genres} = useSelector((state) => state.genresData)
    const {language} = useSelector((state) => state.globalData)

    useEffect(() => {
        dispatch(getGenres({language: language}))
    }, [language])

    return(
        <header>
            <div className="logo">
                <img src={logo} alt='logo'/>
            </div>
            <nav>
                {
                    genres.map((genre) => {
                        return <Btn key={genre.id} genre={genre}/>
                    })
                }
            </nav>
            <div className="search">
                <input type="search" />
                <select onChange={(e) => dispatch(changeLanguage(e.target.value))}>
                    <option value='en-US'>US</option>
                    <option value='ru-RU'>RU</option>
                </select>
            </div>
        </header>
    )
}

export default Header
