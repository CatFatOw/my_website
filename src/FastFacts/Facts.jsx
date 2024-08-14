import React from 'react'
import './Facts.css'

function Facts() {
  return (
    <div className='facts'>

        <div className="food">
            <h1>Favorite Foods</h1>
            <p>For traditional Chinese, I enjoy dumplings. For American foods, I enjoy chips.</p>
        </div>


        <div className="music">
            <h1>Music</h1>
            <p>Even though I am American, I like to listen to mainly Chinese music. </p>

            <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/5lz95PLZn2Bizj5EYEaSXH?utm_source=generator"
                width="100%"
                height="100"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            /> <br/>



            <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/77uktQePd9IdeMPVWlu1cO?utm_source=generator"
                width="100%"
                height="100"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            /><br/>
            
            
            <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/6bVrYxkBteXvvZkGy6He5j?utm_source=generator"
                width="100%"
                height="100"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />      
        </div>

        <div className="website">
            <h1>How I created this website</h1>
            <p>This website was created by me using <b>React </b> with some inspiration by GreatStack.</p>
        </div>

      
    </div>
  )
}

export default Facts
