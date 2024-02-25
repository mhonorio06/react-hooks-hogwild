import React, { useState } from 'react';
import Filter from './Filter';
import HogTile from './HogTile';

function HogList( { hogs }) {
    const [greased, setGreased] = useState(true)
    const [sortBy, setSortBy] = useState("name")

    const greasedHogs = hogs.filter(hog => {
        if(greased ) {
            return hog.greased
        }else {
            return true
        }
    })
    const sortedHogs = greasedHogs.sort((hog1, hog2) => {
        if(sortBy === "name") {
            return hog1.name.localeCompare(hog2.name)
        }else {
            return hog1.weight - hog2.weight;
        }
    })
    function handleSort(newSort) {
        console.log(newSort)
            setSortBy(newSort)
    }
    const hogData = sortedHogs.map( hog => {
        return (
            <HogTile key={hog.name}
                     hog={hog}
                     
            />
        )
    })
    function handleGreasedFilter() {
        setGreased(!greased)
    }
    return (
        <div>
            <Filter handleGreasedFilter={handleGreasedFilter} 
                    greasedHogs={greasedHogs}
                    sortBy={sortBy}
                    handleSort={handleSort}
                    />
            {hogData}
        </div>
    )
    
}

export default HogList