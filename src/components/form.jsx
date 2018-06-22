import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chnageNameInput, chnagePasswordInput, createNewItam } from '../Actions/';
import { bindActionCreators } from 'redux';

class Form extends Component {
    onSubmit = (event) => {
        event.preventDefault();
        const item = {
            name: this.props.name,
            password: this.props.password
        };
        const items = [ ...this.props.items, item ];
        this.props.createNewItam(items);
    }

    render(){
        const { name, password, chnageNameInput, chnagePasswordInput } = this.props;
        return(
            <form onSubmit={this.onSubmit} action="" style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', marginTop: '20px', border: '1px solid #bdbdbd', padding: '10px' }}>
                <label htmlFor="" style={{ marginBottom: '10px' }}>
                    <span style={{ marginRight: '10px' }}>Введите имя</span>
                    <input type="text" value={name} onChange={(event) => chnageNameInput(event.target.value)} />
                </label>
                <label htmlFor="" style={{ marginBottom: '10px' }}>
                    <span style={{ marginRight: '10px' }}>Введите пароль</span>
                    <input type="text" value={password} onChange={(event) => chnagePasswordInput(event.target.value)} />
                </label>
                <button type="submit">Создать</button>
            </form>
        )
    }
}

const putStateToProps = (state) => {
    return {
        name: state.name,
        password: state.password,
        items: state.items
    }
}

const putActionsToProps = (reducer) => {
    return {
        chnageNameInput: bindActionCreators(chnageNameInput, reducer),
        chnagePasswordInput: bindActionCreators(chnagePasswordInput, reducer),
        createNewItam: bindActionCreators(createNewItam, reducer)
    }
}

export default connect(putStateToProps, putActionsToProps)(Form);