import React, {Component} from 'react'
import './index.scss'
import axios from 'axios'
import AdminMenu from '../../../components/Admin/AdminMenu/AdminMenu'
import Default from '../../../layouts/default'
import { Router } from '../../../routes'
import {connect} from "react-redux";

class AddComp extends Component {
    state = {
        titleUA: '',
        titleRU: '',
        postBodyUA: '',
        postBodyRU: '',
        postBodyMiniUA: '',
        postBodyMiniRU: ''
    }

    changeHandler(e, item) {
        const val = this.state
        val[item] = e.target.value
        this.setState(val)
    }

    sendData(e) {
        this.props.dispatch({ type: "addPost", payload: this.state })
    }

    render() {
        return(
            <Default>
                <div className={'container'}>
                    <AdminMenu/>
                    <div className={'Index'}>
                        <div className={'form-group'}>
                            <label htmlFor="titleUA">TitleUA</label>
                            <input id={'titleUA'} onChange={(e) => this.changeHandler(e, 'titleUA')} type="text"/>
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="titleRU">TitleRU</label>
                            <input id={'titleRU'} onChange={(e) => this.changeHandler(e, 'titleRU')} type="text"/>
                        </div>

                        <div className={'form-group'}>
                            <label htmlFor="postBodyUA">postBodyUA</label>
                            <textarea rows={5} id={'postBodyUA'} onChange={(e) => this.changeHandler(e, 'postBodyUA')} type="text"/>
                        </div>

                        <div className={'form-group'}>
                            <label htmlFor="postBodyRU">postBodyRU</label>
                            <textarea rows={5} id={'postBodyRU'} onChange={(e) => this.changeHandler(e, 'postBodyRU')} type="text"/>
                        </div>

                        <div className={'form-group'}>
                            <label htmlFor="postBodyMiniUA">TitleUA</label>
                            <input id={'postBodyMiniUA'} onChange={(e) => this.changeHandler(e, 'postBodyMiniUA')} type="text"/>
                        </div>

                        <div className={'form-group'}>
                            <label htmlFor="postBodyMiniRU">TitleUA</label>
                            <input id={'postBodyMiniRU'} onChange={(e) => this.changeHandler(e, 'postBodyMiniRU')} type="text"/>
                        </div>

                        <button onClick={(e) => this.sendData(e)}>
                            add
                        </button>
                    </div>
                </div>
            </Default>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(AddComp)
