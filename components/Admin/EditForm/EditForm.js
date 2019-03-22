import React, {Component} from 'react'
import './EditForm.scss'
import axios from 'axios'
import { Router } from '../../../routes'
import {connect} from "react-redux";

class EditForm extends Component {
    state = {
        _id: '',
        titleUA: '',
        titleRU: '',
        postBodyUA: '',
        postBodyRU: '',
        postBodyMiniUA: '',
        postBodyMiniRU: ''
    }

    componentWillMount() {
        let url = `http://localhost:4000/listHome/select/${this.props.id}`;
        axios.get(url).then((response) => {
            this.setState(response.data)
        });
    }

    changeHandler(e, item) {
        const val = this.state
        val[item] = e.target.value
        this.setState(val)
    }

    sendData(e) {
        this.props.dispatch({ type: "updatePostById", payload: {id: this.props.id, data: this.state} })
    }

    render() {
        return(
            <div className={'AddComp'}>
                <div className={'form-group'}>
                    <label htmlFor="titleUA">TitleUA</label>
                    <input id={'titleUA'} onChange={(e) => this.changeHandler(e, 'titleUA')} type="text" value={this.state.titleUA}/>
                </div>
                <div className={'form-group'}>
                    <label htmlFor="titleRU">TitleRU</label>
                    <input
                        id={'titleRU'}
                        onChange={(e) => this.changeHandler(e, 'titleRU')}
                        type="text"
                        value={this.state.titleRU}
                    />
                </div>

                <div className={'form-group'}>
                    <label htmlFor="postBodyUA">postBodyUA</label>
                    <textarea
                        rows={5}
                        id={'postBodyUA'}
                        onChange={(e) => this.changeHandler(e, 'postBodyUA')}
                        value={this.state.postBodyUA}
                    />
                </div>

                <div className={'form-group'}>
                    <label htmlFor="postBodyRU">postBodyRU</label>
                    <textarea
                        rows={5}
                        id={'postBodyRU'}
                        onChange={(e) => this.changeHandler(e, 'postBodyRU')}
                        value={this.state.postBodyRU}
                    />
                </div>

                <div className={'form-group'}>
                    <label htmlFor="postBodyMiniUA">postBodyMiniUA</label>
                    <input
                        id={'postBodyMiniUA'}
                        onChange={(e) => this.changeHandler(e, 'postBodyMiniUA')}
                        type="text"
                        value={this.state.postBodyMiniUA}
                    />
                </div>

                <div className={'form-group'}>
                    <label htmlFor="postBodyMiniRU">postBodyMiniRU</label>
                    <input
                        id={'postBodyMiniRU'}
                        onChange={(e) => this.changeHandler(e, 'postBodyMiniRU')}
                        type="text"
                        value={this.state.postBodyMiniRU}
                    />
                </div>

                <button onClick={(e) => this.sendData(e)}>
                    add
                </button>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(EditForm)