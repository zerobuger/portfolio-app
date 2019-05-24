import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import zerobuger from '../api/zerobuger';
import NavBar from './NavBar'
import SearchBar from './SearchBar';
import PortfolioList from './PortfolioList';
import samplePortfolios from '../mockdata/samplePortfolios';
// import UserList from './UserList';

class App extends React.Component {

  constructor(props){
    super(props);

    // Set initial state
    // this.state = { portfolios: [] };
    this.state = { portfolios: samplePortfolios };    
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
      <div >
        <NavBar />
        <SearchBar />
        <PortfolioList portfolios={this.state.portfolios}/>
      </div>
    );
  }
}

export default App;
