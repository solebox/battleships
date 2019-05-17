import {connect} from "react-redux";
const styles = require('../styles/styles.js');
const get_mode = require('../utils/helper.js').get_mode;
import { fireZeeMissile } from "../lib/redux/reducers/boards";

const handleClick = (props) =>  {
	props.dispatch(
		fireZeeMissile(props.row, props.col)
	)
}

const Tile = (props) => {

				return (
				<div style={styles.tile.get(props.mode)} onClick={() => handleClick(props)}>
                     {props.value}
				</div>);

}

export default connect(state => state)(Tile);