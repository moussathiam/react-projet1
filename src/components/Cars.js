import React from 'react';

const Car = ({children, color, year}) => {
    const colorInfo = color ? (<p>Couleur : { color }</p>) : (<p>Couleur : Néan</p>);
    return(
        <div style={{ backgroundColor: '#eee', width: '400px', padding: 5, margin: '5px auto' }}>
            <p>Marque : { children }</p>
            <p>Année : { year }</p>
            { colorInfo }
        </div>
    )
}

export default Car;