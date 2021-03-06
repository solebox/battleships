class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin Rate for {this.props.bpi.USD.description} 
                        <span className="badge badge-primary">{this.props.bpi.USD.code}</span>
                        <strong>{this.props.bpi.USD.rate}</strong>
                    </li>
                </ul>
            </div>);
    }
}
export default Prices;
