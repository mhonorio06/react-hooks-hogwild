import React, { useState } from 'react';

function HogTile({ hog }) {
    const [showingDetails, setShowingDetails] = useState(false)
    function handleClick() {
        setShowingDetails(!showingDetails)
    }
    return (
        
        <div className="details" onClick={handleClick}>
            <h2>{hog.name}</h2>
            <img src={hog.image} alt={hog.name} />
             {showingDetails ? (
            <div>
                <p>Specialty: {hog.specialty}</p>
                <p>Greased: {hog.greased ? "yes" : "no"}</p>
                <p>Weight: {hog.weight}</p>
                <p>Highest Medal Achieved : {hog["highest medal achieved"]}</p>
            </div>
            ) : null }
        </div> 
        
    )

}

export default HogTile