import React,{useEffect,useState} from 'react'
import './App.css'

function MoviesProject() {
  const url = `http://www.omdbapi.com/?s=avengers&apikey=58843703`
  const [movie , setMovie] = useState([]);
  const [Search , setSearch] = useState("");
  useEffect(() => {
    async  function data1() {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setMovie(data.Search)
      }
      data1();
  }, []);
  const handleClick = async () => {
  const link = `http://www.omdbapi.com/?s=${Search}&apikey=58843703`
    const res1 = await fetch(link);
    const data1 = await res1.json();
    console.log(data1);
    setMovie(data1.Search);
  }
  
    return (
      <>
      {/* <nav>
        <div className="logo">
            <b>Movies</b>
        </div>
        <div className="right-data">
            <div className="input">
            <input type="text"/>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <a href="#"><i class="fa-solid fa-moon"></i></a>
            <div className="img">
            <img 
            src="data:image/jpeg;base64,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" alt="" />
            </div>
        </div>
    </nav> */}

    <input type="text" onChange={(e)=>{
  setSearch(e.target.value)
    }}/>
    <button onClick={handleClick}>Search</button>

      {movie?.map((pack) => {
        const {Poster,Title,Year,Type} = pack
        return (
            <>
            <div className='box' >
              <img className='poster'  src={Poster}/>
              <div className="text-info">
              <h2 className='title'>{Title}</h2>
              <p className='year'>Release : {Year}</p>
              <p className='type'>{Type}</p>
              <p className='dis'><b>Description</b></p>
              <p className='paragrapgh'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis fugit illum sequi quo suscipit nulla, delectus repudiandae qui reprehenderit quae asperiores eligendi quaerat laborum recusandae dolores dolore quibusdam neque ipsum.</p>
              <i className='age'><p className='rating'>Rating | <span>12+</span></p></i>
              </div>
            </div>
            </>
        )
      })}
      </>
  )
}

export default MoviesProject