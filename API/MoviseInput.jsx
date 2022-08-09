import React, { useState, useRef } from 'react'

export const MoviseInput = (props) => {
    let inputRef = useRef();
    let sortRef = useRef();
    return (
        <div>
            <input ref={inputRef} placeholder='search...' type="search" />
            <button onClick={() => {
                props.setSerch(inputRef.current.value)
            
            }} >select...</button>
            <div>
                <select onChange={() => {
                    props.sortMovis(sortRef.current.value)

                }} ref={sortRef}>
                    <option value="Title">name</option>
                    <option value="Year" >year</option>
                </select>
            </div>
        </div>
    )
}
//  default MoviseInput;
