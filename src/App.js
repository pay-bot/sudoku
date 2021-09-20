import { useState } from "react";
import { Board } from "./components/Board";
import './index.css';

const App = () => {
    const [starters, setStarters] = useState(
        localStorage.getItem('starters') === null ? [] : localStorage.getItem('starters').split(","));
    const [squares, setSquares] = useState(starters);

    const example = () => {
        setSquares([4, 8, 3, 9, 2, 1, 6, 5, 7,
            9, 6, 7, 3, 4, 5, 8, 2, 1
            , 2, 5, 1, 8, 7, 6, 4, 9, 3
            , 5, 4, 8, 1, 3, 2, 9, 7, 6,
            7, 2, 9, 5, 6, 4, 1, 3, 8
            , 1, 3, 6, 7, 9, 8, 2, 4, 5
            , 3, 7, 2, 6, 8, 9, 5, 1, 4
            , 8, 1, 4, 2, 5, 3, 7, 6, 9
            , 6, 9, 5, 4, 1, 7, 3, 8, 2])
    }

    const handleInput = (e, id) => {
        const board = squares.slice();
        if (e.nativeEvent.data == null) {
            board[id] = "";
            console.log("null")
        } else {
            console.log("not null")
            board[id] = e.nativeEvent.data;
        }

        setStarters(board)
        setSquares(board);
        localStorage.setItem('starters', [board])
        localStorage.setItem('squares', [board])



        console.log(squares[id]);
    }
    const clear = () => {
        localStorage.clear();
        window.location.reload();
    }

    const checkSolved = () => {
        const col = {}
        const row = {}
        const gridObj = {}

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const num = squares[r * 9 + c]

                // row checking
                if (!row[r]) row[r] = new Set()
                if (row[r].has(num)) {
                    alert("Something isn't quite right...")
                    return false
                }
                else row[r].add(num)

                // col checking
                if (!col[c]) col[c] = new Set()
                if (col[c].has(num)) {
                    alert("Something isn't quite right...")
                    return false
                }
                else col[c].add(num)

                // area checking
                const index = Math.floor(r / 3) * 3 + Math.floor(c / 3)
                if (!gridObj[index]) gridObj[index] = new Set()
                if (gridObj[index].has(num)) return false
                else gridObj[index].add(num)
            }
        }
        alert("Puzzle Solved!");
        return true
    }



    return (
        <div className="flex md:flex-row flex-col md:w-8/12 w-full mx-auto justify-center items-center ">
            <Board
                squares={squares}
                onChange={handleInput}
            />

            <div className="flex flex-col">
                <button className="my-2 bg-green-400 p-2 rounded text-lg capitalize  font-semibold" onClick={() => checkSolved()}>Check if Solved</button>
                <button className="my-2 bg-red-400 p-2 rounded text-lg capitalize  font-semibold" onClick={clear}>clear</button>
                <button className="my-2 bg-blue-400 p-2 rounded text-lg capitalize  font-semibold" onClick={example}>example</button>
            </div>
        </div>
    );
}

export default App;
