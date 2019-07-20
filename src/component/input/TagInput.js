import React from 'react';

class TagInput extends React.Component{
    render(){
        return (
            <div>
                <label>This is Tag Input</label>
                <input  autoComplete="off" />
            </div>
        );
    }
}

export default TagInput;