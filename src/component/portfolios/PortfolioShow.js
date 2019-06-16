import React from 'react';
import { connect } from 'react-redux';
import { fetchPortfolio } from '../../actions';

class PortfolioShow extends React.Component {
    componentDidMount(){
        this.props.fetchPortfolio(this.props.match.params.id);
    }
    render(){
        if(!this.props.portfolio){
            return <div>Loading...</div>
        }

        const { title, description } = this.props.portfolio;

        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { portfolio: state.portfolios[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchPortfolio})(PortfolioShow);