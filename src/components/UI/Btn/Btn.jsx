import { useDispatch, useSelector } from 'react-redux'
import './Btn.css'
import { getFilmsThunk } from '../../../store/slices/filmsSlice'

function Btn({genre}){
    const dispatch = useDispatch()
    const {language} = useSelector((state) => state.globalData)

    const genreClick = () => {
        dispatch(getFilmsThunk({language, genreId: genre.id}))
    } 
    
    return(
        <div className="b">
            <button className='btn' onClick={genreClick}>{genre.name}</button>
        </div>
    )
}

export default Btn
