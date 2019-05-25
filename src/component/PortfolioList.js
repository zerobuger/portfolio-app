import React from 'react';
import { connect } from 'react-redux';
import { selectPortfolio } from '../actions';

// 1. Component definition
class PortfolioList extends React.Component{
    renderList(){
        return this.props.portfolios.map((portfolio) => {
            return (
                <div className="item" key={portfolio.post_idx}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectPortfolio(portfolio)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{portfolio.project_name}</div>
                </div>
            );
        })
    }
    render(){
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// 2. mapStateToProps definition
const mapStateToProps = (state) => {
     console.log(state);

    return { portfolios: state.portfolios };
}

export default connect(mapStateToProps, {selectPortfolio})(PortfolioList);