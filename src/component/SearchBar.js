import React from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends React.Component {
    state = { term: ''};

    // onFormSubmit = (event) => {
    //     // Prevents form from submitting by itself
    //     event.preventDefault();

    //     this.props.onSubmit(this.state.term);
    // }
    onSearchInputChange = (event) => {
        if(event.target.value){
            this.setState({term: event.target.value});
        } else {
            this.setState({term: ''})
        }
    }
    render(){
        return(
            <TextField style={{padding:24}}
                id="searchInput"
                placeholder="Search for Portfolios"
                margin="normal"
                onChange={this.onSearchInputChange}/>
        );
    }
}

export default SearchBar;