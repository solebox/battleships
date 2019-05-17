import {BOARDS, GET_BOARD, FIRE_MISSILE} from "../../../utils/constants";
import BoardState from '../../logic/BoardState.js';

const board_state = new BoardState();


export default (state = {
    board: board_state.get_board(), ammo: board_state.get_ammo()
}, { type, payload }) => {
    let board = board_state.get_board();
    let ammo = board_state.get_ammo();
    let my_turn = board_state.is_my_turn();
    switch (type) {

        case GET_BOARD:
            ammo = board_state.get_ammo();
            board = board_state.get_board();
            my_turn = board_state.is_my_turn();
            return {
                board,
                ammo,
                my_turn
            }
        case FIRE_MISSILE:
             let {row, col} = payload;
             board = board_state.fire_missile(row, col);
            let ammo = board_state.get_ammo();
            my_turn = board_state.is_my_turn();
            return {
                board,
                ammo,
                my_turn
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