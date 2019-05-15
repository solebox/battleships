import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Board from '../components/Board';
import {BOARDS} from "../utils/constants";
import initStore from '../lib/initRedux'
import withRedux from 'next-redux-wrapper'
import { getBoard } from "../lib/redux/reducers/boards";

const Game =  (props) => (
    <Layout>
        <div>
            <h1>game page</h1>
			<Board data={props.data} />
        </div>
        <style jsx>{`
                    .board {
                            background-color: #ccf; 
                    }
                    .row {
                        width: 400px;
                        margin: 0 auto;
                    }
                    .tile {
                            background-color: #ccc;
                            width: 100px;
                            height: 100px;
                            margin: 5px 10px 0px 10px;
                    }
        `}
        </style>
    </Layout>
);
Game.getInitialProps = async function({store}){
    const res = await Fetch('https://my-json-server.typicode.com/typicode/demo/posts');
    const ret_data = await res.json();
    const dispatchGetBoard = () => {
        store.dispatch(getBoard())
    }
    dispatchGetBoard()
    const board = store.getState()['boards']['board']
    return {
       data: board,
    }
};

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Game);
