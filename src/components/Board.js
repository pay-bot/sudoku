import React from 'react'
import Square from './Square'

export const Board = ({ squares, onChange }) => {
    const renderSquare = (i) => {
        return(
            <Square
                id={i}
                onChange={(e) => onChange(e,i)}
                value={squares[i]}
            />
        );
    }

    let i = 0;
    return (
        <div className="md:my-20 my-10 mx-5">
            <div className="my-1">
            <div className='flex'>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
            </div>
            <div className='flex'>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
            </div>
            <div className='flex'>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
            </div>
            </div>
            <div className="my-1">
            <div className='flex'>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
            </div>
            <div className='flex'>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
            </div>
            <div className='flex'>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
            </div>
            </div>
            <div className="my-1">
            <div className='flex'>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
            </div>
            <div className='flex'>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
            </div>
            <div className='flex'>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
                <div className="mx-1">
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                </div>
            </div>
            </div>
        </div>
    )
}
