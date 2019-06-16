import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPortfolios } from '../../actions';

class PortfolioList extends React.Component {
    // Initially load portfolios
    componentDidMount(){
        this.props.fetchPortfolios();
    }

    // This will be rendered only to admins
    renderAdmin(portfolio){
        if(portfolio.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link to={`/portfolios/edit/${portfolio.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/portfolios/delete/${portfolio.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList(){
        return this.props.portfolios.map(portfolio => {
            return (
                <div className="item" key={portfolio.id}>
                    {this.renderAdmin(portfolio)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {portfolio.title}
                        <div className="description">{portfolio.description}</div>
                    </div>
                </div>
            );
        });
    }
    renderCreate(){
        if(this.props.isSignedIn){
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/portfolios/new" className="ui button primary">
                        Create Portfolio
                    </Link>
                </div>
            );
        }
    }

    render(){
        return (
            <div>
                <h2>Portfolios</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        portfolios: Object.values(state.portfolios),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchPortfolios })(PortfolioList);