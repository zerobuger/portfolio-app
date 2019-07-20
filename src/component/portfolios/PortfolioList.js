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
                <div class="extra content">
                    <div class="ui two buttons">
                        <Link to={`/portfolios/edit/${portfolio.id}`} className="ui basic green button">Edit</Link>
                        <Link to={`/portfolios/delete/${portfolio.id}`} className="ui basic red button">Delete</Link>  
                    </div>
                </div>
            );
        }
    }

    renderList(){
        return this.props.portfolios.map(portfolio => {

            // Only render my Portfolio

            if(portfolio.userId === this.props.currentUserId){
                return (
                    <div className="card" key={portfolio.id}>
                        
                        {/* <i className="large middle aligned icon camera" /> */}
                        <div className="content">
                            <div class="header">
                                <Link to={`/portfolios/${portfolio.id}`} className="header">
                                    {portfolio.title}
                                </Link>
                            </div>
                            <div class="meta">
                                {portfolio.type}
                            </div>
                            <div class="description">
                                {portfolio.description}
                            </div>
                        </div>
                        {this.renderAdmin(portfolio)}
                    </div>
                );
            }
        });
    }
    renderCreate(){
        if(this.props.isSignedIn){
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/portfolios/new" className="ui button primary">
                        + Create Portfolio
                    </Link>
                </div>
            );
        }
    }

    render(){
        return (
            <div>
                <h2>Portfolios</h2>
                {this.renderCreate()}
                <div className="ui cards">{this.renderList()}</div>
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