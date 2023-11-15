import React, { useEffect, useState } from 'react'
import './App.css'

function Unsplash() {
    const api = 'https://api.unsplash.com/photos?client_id=jXbFVy-sikjqdlZVNgJPk0lERimxGjJL8WOmjEltteQ'
    const [image , setImage] = useState([])
    const [search , setSearch] = useState('')
    useEffect(() => {
        async function splash(){
            const res= await fetch(api);
            const image = await res.json();
            console.log(image);
            setImage(image);
            
        }
        splash()
    }, [])

    const handleClick = async () => {
        const api1 = `https://api.unsplash.com/search/photos?&query=${search}&client_id=jXbFVy-sikjqdlZVNgJPk0lERimxGjJL8WOmjEltteQ`
        const res1 = await fetch(api1);
        const image1 = await res1.json();
        console.log(image1);
        setImage(image1.results);
    }

    return (
        <>
        <nav>
            <h1>Photo Searching</h1>
        <div>
        <input
        className='input'
        onChange={(e) => {
            setSearch(e.target.value)
        }}
        type="text"
        />
        <button onClick={handleClick}>Click Me</button>
        </div>
        </nav>
            <>
            <div className='flex'>
            {image.map((pack)=> {
                const { urls , likes , id } = pack
                return (
                    <>
                    <div className='key' key={id}>
                        <img className='img' src={urls.small} />
                    <div className='likes'>{likes}</div>
                    </div>
                    </>
                )
            })}
            </div>
            </>
        </>
)
}

export default Unsplash