const styles = require('../styles/styles.js');
import Tile from './Tile';
const helper = require('../utils/helper.js');
class Board extends React.Component {
			state = {
				
			}
			render() {
                const elements = this.props.data.map((row, index) => { 
                        return <div key={index} className="row"> { row.map((cell, idx) => {
                                return <Tile key={'tile' + idx + index} className="tile" mode={helper.get_mode(cell)} value={cell} />
                            }
                        )} </div>
                    }
                );
				return (
				<div className="board" style={styles.board.get()}>
                    { elements }
				</div>);
			}
}
export default Board;
