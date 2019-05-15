const styles = require('../styles/styles.js');
import Tile from './Tile';
import {connect} from "react-redux";
const helper = require('../utils/helper.js');

const Board = ({board}) => {
                const elements = board.map((row, index) => {
                        return <div key={index} className="row"> { row.map((cell, idx) => {
                                return <Tile key={'tile' + idx + index} className="tile" mode={helper.get_mode(cell)} value={cell} row={index} col={idx}/>
                            }
                        )} </div>
                    }
                );
				return (
				<div className="board" style={styles.board.get()}>
                    { elements }
				</div>);

}

function mapStateToProps (state) {
    const { board } = state.boards;
    return { board }
}
export default connect(mapStateToProps)(Board);