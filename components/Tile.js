import {connect} from "react-redux";
const styles = require('../styles/styles.js');
const get_mode = require('../utils/helper.js').get_mode;
import { fireZeeMissile } from "../lib/redux/reducers/boards";

class Tile extends React.Component {
			state = {
                value: this.props.value, 
                mode: this.props.mode,
                row: this.props.row,
                col: this.props.col
			}
            handleClick = (event) =>  {
                this.props.dispatch(
			        fireZeeMissile(this.state.row, this.state.col)
                )
              let new_value = this.state.value *10 %10 == 0 ? this.state.value + 0.1 : this.state.value;
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
    return state
}
export default connect(mapStateToProps)(Tile);