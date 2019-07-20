import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPortfolios } from '../../actions';

class PortfolioList extends React.Component {
    // Initially load portfolios
    componentDidMount(){
        console.log("fetching portfolios")
        this.props.fetchPortfolios();
    }

    // This will be rendered only to admins
    renderAdmin(portfolio){
        console.log(portfolio);
        if(portfolio.user_id === this.props.currentUserId){
            return (
                <div className="extra content">
                    <div className="ui two buttons">
                        <Link to={`/portfolios/edit/${portfolio.post_id}`} className="ui basic green button">Edit</Link>
                        <Link to={`/portfolios/delete/${portfolio.post_id}`} className="ui basic red button">Delete</Link>  
                    </div>
                </div>
            );
        }
    }

    renderList(){
        console.log(this.props.portfolios);
        return this.props.portfolios.map(portfolio => {

            console.log(portfolio);

            // Only render my Portfolio

            // if(portfolio.user_id === this.props.currentUserId){
                return (
                    <div className="card" key={portfolio.post_id}>
                        
                        {/* <i className="large middle aligned icon camera" /> */}
                        <div className="content">
                            <div className="header">
                                <Link to={`/portfolios/${portfolio.post_id}`} className="header">
                                    {portfolio.title}
                                </Link>
                            </div>
                            <div className="meta">
                                {portfolio.type}
                            </div>
                            <div className="description">
                                {portfolio.description}
                            </div>
                        </div>
                        {this.renderAdmin(portfolio)}
                    </div>
                );
            // }
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
    console.log(`PortfolioList mapstatetoprops : ${Object.values(state.portfolios)}`)
    return {
        portfolios: Object.values(state.portfolios),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchPortfolios })(PortfolioList);