import Prices from '../components/Prices';
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import initStore from '../lib/initRedux'
import withRedux from 'next-redux-wrapper'

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to battleships</h1>
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
);

Index.getInitialProps = async function(){
    const res = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    }
}
const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)
