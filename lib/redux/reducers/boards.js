import {BOARDS, GET_BOARD, FIRE_MISSILE} from "../../../utils/constants";
export default (state = {
    board: BOARDS[Math.floor(Math.random()*BOARDS.length)]
}, { type, payload }) => {
    switch (type) {
        case GET_BOARD:
            let board = state.board.slice(0);
            return {
                board
            }
        case FIRE_MISSILE:
             board = state.board.slice(0);
             let {row, col} = payload
            board[row][col] = 666;
            board[0][0] = 666;
            return {
                board
            }
        default:
            return state
    }
}
export function getBoard () {
    console.log("gettin board")
    return {
        type: GET_BOARD,
    }
}

export function fireZeeMissile(row, col) {

    return {
        type: FIRE_MISSILE,
        payload: {
            row: row,
            col: col
        }
    }
}