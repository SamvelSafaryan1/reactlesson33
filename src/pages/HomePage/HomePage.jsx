import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage, getFilmsThunk } from '../../store/slices/filmsSlice'
import FilmsCard from '../../components/FilmsCard/FilmsCard'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './HomePage.css'

function HomePage(){
    const dispatch = useDispatch()
    const { language } = useSelector((state) => state.globalData)
    const { films, pageCount } = useSelector((state) => state.filmsData)

    const handleChangePage = () => {
        dispatch(changePage())
    }

    const imgUrl = 'https://image.tmdb.org/t/p/w500/'
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        }

    useEffect(() => {
        dispatch(getFilmsThunk({ language, pageCount }))
    }, [pageCount, language])

    return(
        <div className="page">
            <div className="films">
        <Slider {...settings}>
         {
          films.map((film) => <img src={imgUrl + film.poster_path}/>)
         }
        </Slider>
      </div>
      <div className='films-card'>
        {
          films.map((film) => {
            return <FilmsCard key={film.id} film={film} />
          })
        }
      </div>
      <button className='nextBtn' onClick={handleChangePage}>Next</button>
        </div>
    )
}

export default HomePage
