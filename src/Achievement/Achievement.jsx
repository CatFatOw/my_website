import './Achievement.css'
import React from 'react'
import achievement_data from './data.js'

function Achievement() {
  return (
    <div className='achievements'>
        <div className="achievement-title">
            <h1>My Achievements</h1>
            </div>
            <div className="achievements-container">
                {achievement_data.map((achievement, index) => (
                    <div key={index} className="achievement-format">
                        <img src={achievement.a_img} className='img1' />
                        <h2>{achievement.a_name}</h2>
                        <p>{achievement.a_desc}</p>
                        <div className="achievement-readmore">
    

                        </div>
                        </div>
                    ))}
                    </div>
                    </div>
                    )}

export default Achievement
