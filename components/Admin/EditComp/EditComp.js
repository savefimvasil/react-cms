import React, {Component} from 'react'
import './EditComp.scss'
import {connect} from "react-redux";
import {Link, Router} from '../../../routes'
import ListTable from '../../../components/Admin/ListTable/ListTable'
import EditForm from '../../../components/Admin/EditForm/EditForm'


class EditComp extends Component {
    state = {
        isEdit: false
    }
    componentDidMount() {
        let query = Router.router.query.id
        const state = this.state
        if(query) {
            state.isEdit = true
            this.setState(state)
        }
    }

    renderTable = () => {
        return (
            <ListTable
                data={this.props.data}
            />
        )
    }

    renderEdit = () => {
        return(
            <EditForm
                id={Router.router.query.id}
            />
        )
    }

    render() {
        return(
            <div>
                {
                    !this.state.isEdit ?
                        this.renderTable()
                        : this.renderEdit()
                }
            </div>
        )
    }
}

export default connect(state => state)(EditComp)