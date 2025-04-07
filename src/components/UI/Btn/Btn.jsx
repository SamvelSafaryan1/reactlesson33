import './Btn.css'

function Btn({genre}){
    return(
        <div className="b">
            <button className='btn'>{genre.name}</button>
        </div>
    )
}

export default Btn
