import React from 'react';
import {Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import zerobuger from '../api/zerobuger';
import SearchBar from './SearchBar';
import PortfolioList from './PortfolioList';
// import UserList from './UserList';



const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
class App extends React.Component {

  constructor(props){
    super(props);

    // Set initial state
    // this.state = { portfolios: [] };
    this.state = { portfolios: [{"description": "using 6lowpan", "img_url": "/jj/dev/img_1.jpg", "post_idx": 1, "project_name": "capston", "type": "network"}, 
    {"description": "using Zigbee", "img_url": "/jj/dev/img_1.jpg", "post_idx": 2, "project_name": "capston", "type": "network"}] };

    
    
  }

  
  componentDidMount() {
    // Make initial API call to fetch list of portfolios
    // zerobuger.get('/show_project')
    //   .then(res => {
    //     const portfolios = res.data;
    //     console.log(`Portfolios fetched : ${portfolios}`);
    //     this.setState({ portfolios });
    //   })
  }

  render() {
    return (
      <div style={{marginTop: '10px'}} >
        <SearchBar />
        <PortfolioList portfolios={this.state.portfolios}/>
      </div>

      // <ul>
      //   { this.state.portfolios.map(portfolio => <li>{portfolio.description}</li>)}
      // </ul>
      // <Admin dataProvider={dataProvider}>
      //   <Resource name="posts" list={ListGuesser} icon={PostIcon} />
      //   <Resource name="users" list={ListGuesser} icon={UserIcon} />
      //   <Resource name="comments" list={ListGuesser} icon={UserIcon} />
      // </Admin>
    );
  }
}

export default App;
