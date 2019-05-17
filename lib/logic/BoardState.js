import {BOARDS} from "../../utils/constants";

class BoardState {

    constructor(board_matrix){
        if (board_matrix)
            this._board = board_matrix;
        else
            this._board = this._get_new_board_matrix();
        this.ammo = 3;
        this._my_turn = true;
    }

    _get_new_board_matrix(){
        return BOARDS[0];
    }

    fire_missile(row, col){
        if (!this.is_my_turn())
            return this.get_board();
        let value = this._board[row][col];
        this.ammo -= 1;
        let new_value = value *10 %10 == 0 ? value + 0.1 : value;
        this._board[row][col] = new_value;

        if (this.get_ammo()){
            this._my_turn = true;
        } else {
            this._my_turn = false;
        }

        return this.get_board();
    }

    get_ammo(){

        return this.ammo;
    }

    is_my_turn(){
        return this._my_turn
    }

    get_board(){
        const my_clone =  this._board.slice(0);
        for (var index = 0; index < my_clone.length; index++) {
            my_clone[index] = my_clone[index].slice(0);
        }
        return my_clone
    }

}



export default BoardState;