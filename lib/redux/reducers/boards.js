import {BOARDS, GET_BOARD, FIRE_MISSILE} from "../../../utils/constants";
import BoardState from '../../logic/BoardState.js';

const board_state = new BoardState();


export default (state = {
    board: board_state.get_board()
}, { type, payload }) => {
    let board = board_state.get_board();
    switch (type) {

        case GET_BOARD:
            return {
                board
            }
        case FIRE_MISSILE:
             let {row, col} = payload;
            board_state.fire_missile(row, col);
            board =  board_state.get_board();
            return {
                board
            }
        default:
            return state
    }
}
export function getBoard () {
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