import React from 'react';
import { connect } from 'react-redux';

const PortfolioDetail = ({ portfolio }) => {
    if (!portfolio){
        return <div>Select a Portfolio</div>
    }

    return (
        <div>
            <h3>Details for :</h3>
            <p>
                Project Name : {portfolio.project_name}
                <br />
                Description : {portfolio.description}
                <br />
                Type : {portfolio.type}
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { portfolio: state.selectedPortfolio }
};

export default connect(mapStateToProps)(PortfolioDetail);