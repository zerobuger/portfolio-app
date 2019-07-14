import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TagInput from '../input/TagInput';

class PortfolioForm extends React.Component {
    renderError({ error, touched }){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error': '' }`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render(){
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <Field name="github" component={this.renderInput} label="Enter Github Address" />

                <Field name="timeline" component={this.renderInput} label="Enter Timeline" />
                <Field name="goal" component={this.renderInput} label="Enter Goal" />
                <Field name="member" component={this.renderInput} label="Enter Member" />
                <Field name="job" component={this.renderInput} label="Enter Job" />
                <Field name="type" component={TagInput} label="Enter Type" />
                <button className="ui button primary">Submit</button>              
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        // only ran if the user did not enter a title
        errors.title = 'You must enter a title';
    }
    if(!formValues.description){
        // only ran if the user did not enter a description
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'portfolioForm',
    validate
})(PortfolioForm);