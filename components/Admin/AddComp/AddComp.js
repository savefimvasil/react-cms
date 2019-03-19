import React, {Component} from 'react'
import './AddComp.scss'
import axios from 'axios'
import { Router } from '../../../routes'

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
        let url = 'http://localhost:4000/listHome/add';
        console.log(this.state)
        axios.post(url, this.state).then(() => {
            Router.push("/admin");
        });
    }

    render() {
        return(
            <div className={'AddComp'}>
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
        )
    }
}

export default AddComp