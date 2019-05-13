import Prices from '../components/Prices';
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
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
export default Index;
