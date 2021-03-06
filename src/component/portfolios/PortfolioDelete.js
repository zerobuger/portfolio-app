import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchPortfolio, deletePortfolio } from '../../actions';

class PortfolioDelete extends React.Component {
    componentDidMount(){
        this.props.fetchPortfolio(this.props.match.params.id);
    }

    renderActions(){
        const { id } = this.props.match.params;

        return  (
            <React.Fragment>
                <button onClick={() => this.props.deletePortfolio(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent(){
        if(!this.props.portfolio){
            return 'Ar you sure you want to delete this portfolio?'
        }

        return `Are you sure you want to delete the portfolio with title ${this.props.portfolio.title}`
    }
    render(){
        return (
            <Modal 
                title="Delete Portfolio"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { portfolio: state.portfolios[ownProps.match.params.id]}
};

export default connect(
    mapStateToProps,
    { fetchPortfolio, deletePortfolio }
)(PortfolioDelete);