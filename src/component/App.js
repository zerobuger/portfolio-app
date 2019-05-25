import React from 'react';
import zerobuger from '../api/zerobuger';
import PortfolioList from './PortfolioList';
import PortfolioDetail from './PortfolioDetail';

class App extends React.Component {

 
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
      <div className="ui container grid">
          <div className="ui row">
            <div className="column eight wide">
              <PortfolioList />
            </div>
            <div className="column eight wide">
              <PortfolioDetail />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
