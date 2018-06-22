import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../Actions';
import { bindActionCreators } from 'redux';

class Lists extends Component {
    deleteItem = (index) => {
        const items = this.props.items.filter((item, _index) => _index !== index);
        this.props.updateItem(items);
    }

    render(){
        const { items } = this.props;
        return(
            <div>
                <h4>Lists</h4>
                <ul>
                    {
                        items.length > 0 ? items.map((list, index) => {
                            return(
                                <li key={index}>
                                    <span>Name: {list.name} - Password: {list.password}</span>
                                    <button onClick={() => this.deleteItem(index)}>delete</button>
                                </li>
                            )
                        })
                        :
                        <p>Пустой массив</p>
                    } 
                </ul>
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return {
        items: state.items
    }
}

const putActionsToProps = (reducer) => {
    return {
        updateItem: bindActionCreators(updateItem, reducer)
    }
}

export default connect(putStateToProps, putActionsToProps)(Lists);