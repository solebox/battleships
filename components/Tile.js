import {connect} from "react-redux";
const styles = require('../styles/styles.js');
const get_mode = require('../utils/helper.js').get_mode;
import { fireZeeMissile } from "../lib/redux/reducers/boards";

class Tile extends React.Component {

            handleClick = (event) =>  {
                this.props.dispatch(
			        fireZeeMissile(this.props.row, this.props.col)
                )
            }
			render() {
				return (
				<div style={styles.tile.get(this.props.mode)} onClick={this.handleClick}>
                     {this.props.value}
				</div>);
			}
}

function mapStateToProps (state) {
    const {boards , dispatch} = state;
    return {boards, dispatch}
}
export default connect(mapStateToProps)(Tile);