import React from 'react'

export const MoviseList = (props) => {
    return (
        <div className='container'>
            <h2>Movies:</h2>
            <div className='row'>
                {props.moviy_arr.map(item => {
                    return (
                        <div key={item.imdbID} className='col-lg-6 border p-3'>
                            <img src={item.Poster} className="col-lg-6 border p-3 w-25" />
                            <h2>{item.Title}</h2>
                            <div>year:{item.Year}</div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}
// export default MoviseList;
