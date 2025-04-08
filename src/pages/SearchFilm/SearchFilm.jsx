import { useSelector } from "react-redux"
import FilmPage from "../FilmPage/FilmPage"

function SearchFilm(){
    const {search} = useSelector((state) => state.filmsData)

    return (
        <div className="search">
            {
                search.map((film) => <FilmPage key={film.id} film={film} />)
            }
        </div>
    )
}

export default SearchFilm
