import {connect} from "react-redux";
const styles = require('../styles/styles.js');
const get_mode = require('../utils/helper.js').get_mode;
import { fireZeeMissile } from "../lib/redux/reducers/boards";

class Tile extends React.Component {
			state = {
                value: this.props.value,
                mode: this.props.mode
			}
            handleClick = (event) =>  {
                this.props.dispatch(
			        fireZeeMissile(this.props.row, this.props.col)
                )
              let new_value = this.props.boards.board[this.props.row][this.props.col]
              let new_mode = get_mode(new_value);
              this.setState({mode: new_mode, value: new_value});
            }
			render() {
				return (
				<div style={styles.tile.get(this.state.mode)} onClick={this.handleClick}>
                     {this.state.value}
				</div>);
			}
}

function mapStateToProps (state) {
    const {boards , dispatch} = state;
    return {boards, dispatch}
}
export default connect(mapStateToProps)(Tile);