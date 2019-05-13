const styles = require('../styles/styles.js');
const get_mode = require('../utils/helper.js').get_mode;
class Tile extends React.Component {
			state = {
                value: this.props.value, 
                mode: this.props.mode
			}
            handleClick = (event) =>  {
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
export default Tile;
