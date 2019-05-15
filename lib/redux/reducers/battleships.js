import {BOARDS, GET_BOARD} from "../../../utils/constants";
export default (state = {
    board: BOARDS[Math.floor(Math.random()*BOARDS.length)]
}, { type, payload }) => {
    switch (type) {
        case GET_BOARD:
            let board = Object.assign({}, state.board)
            return {
                board
            }
        default:
            return state
    }
}
export function getBoard ({name, variant}) {
    return {
        type: GET_BOARD,
    }
}