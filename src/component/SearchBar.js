import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = (event) => {
        // Prevents form from submitting by itself
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }
    render(){
        return(
            <div>
                Search
            </div>
        );
    }
}

export default SearchBar;