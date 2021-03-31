import React, { Fragment } from 'react';

const Car = ({children, color, year}) => {
    const colorInfo = color ? (<td> { color }</td>) : (<td>Néan</td>);
    return(
        <Fragment>
            <tr>
                <td>{ children }</td>
                <td>{ year }</td>
                { colorInfo }
            </tr>
        </Fragment>
    )
}

export default Car;