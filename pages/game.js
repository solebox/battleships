import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Board from '../components/Board';
const Game =  (props) => (
    <Layout>
        <div>
            <h1>game page</h1>
			<Board data={props.data}/>
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
)
Game.getInitialProps = async function(){
    const res = await Fetch('https://my-json-server.typicode.com/typicode/demo/posts');
    const ret_data = await res.json();

    return {
       ddd: "aaa",
       data: [
            [1,1,1,0,0,0,0,0,0,0], 
            [0,0,0,0,0,0,0,0,0,0], 
            [0,0,0,0,0,3,3,3,3,0], 
            [0,0,0,0,0,0,0,0,0,0], 
            [0,0,2,0,0,0,0,0,0,0], 
            [0,0,2,0,0,0,0,0,0,0], 
            [0,0,2,0,0,0,0,0,0,0], 
            [0,0,2,0,0,0,0,0,0,0], 
            [0,0,2,0,0,0,0,0,0,0], 
            [0,0,2,0,0,0,0,0,0,0], 
       ]
    }
}
export default Game;
