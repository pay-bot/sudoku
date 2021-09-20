import React from 'react'


const Square = ({ onChange, id, value }) => {
    return (

        <input className='bg-red-100 border-4 md:w-10 md:h-10 w-8 h-8 focus:border-green-500 p-2 mx-auto justify-center items-center' onChange={onChange} type='text' maxLength='1' id={id} value={value}>
        </input>
    )
}


export default Square
