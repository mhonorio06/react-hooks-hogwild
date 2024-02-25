import React from 'react';

function Filter({ greased, handleGreasedFilter, sortBy, handleSort }) {
    return (
        <div>
            <label>
                Greased Hogs
                <input type="checkbox" checked={greased} onChange={() => handleGreasedFilter()} />
            </label>
            <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </div>  
    )
}

export default Filter