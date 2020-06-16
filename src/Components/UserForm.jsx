import React, { Component } from 'react'

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'This is a mandatory field'
    }
    if (!values.email) {
        errors.email = 'This is a mandatory field'
    }
    if (!values.website) {
        errors.website = 'This is a mandatory field'
    }

    return errors
}

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.state,
            ...props.initialValues,
            errors: {},
        }
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { errors, ...noErrors } = this.state
        const result = validate(noErrors)

        if (!Object.keys(result).length) {
            const { handleSubmit, initialValues, handleUpdate } = this.props
            if(initialValues.id) {
                handleUpdate(initialValues.id, noErrors)
            } else {
                handleSubmit(noErrors)
            }
        }
        else {
            this.setState({ errors: result })
        }
    }

    render() {
        const { errors } = this.state
        const { initialValues } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input defaultValue={initialValues.name} placeholder="Name" name="name" onChange={this.handleChange} />
                {errors.name && <p>{errors.name}</p>}
                <input defaultValue={initialValues.email} placeholder="E-Mail" name="email" onChange={this.handleChange} />
                {errors.email && <p>{errors.email}</p>}
                <input defaultValue={initialValues.website} placeholder="Website" name="website" onChange={this.handleChange} />
                {errors.website && <p>{errors.website} </p>}
                <input type="submit" value="Send" />
            </form>
        )
    }
}

export default UserForm