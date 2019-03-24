import React, {Component} from 'react'
import './index.scss'
import {connect} from "react-redux";
import Default from '../../../layouts/default'
import AdminMenu from '../../../components/Admin/AdminMenu/AdminMenu'
import ListTable from '../../../components/Admin/ListTable/ListTable'
import EditForm from '../../../components/Admin/EditForm/EditForm'
import {Router} from "../../../routes";


class EditComp extends Component {

    constructor() {
        super();
        this.state = {
            isEdit: false
        }
    }

    static async getInitialProps({ store, isServer, pathname, query }) {
        await store.dispatch({ type: "getAllPosts" });
        const data = await store.getState()
        let postById
        if(query.id) {
            await store.dispatch({type: "getPostById", payload: query.id})
            postById = await store.getState()
        }
        return {data, postById }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!this.state.isEdit && Router.router.query.id){
            this.setState({
                isEdit: 'true'
            })
        }
    }

    renderTable = () => {
        return (
            <ListTable
                data={this.props.data.allPosts}
            />
        )
    }

    renderEditPage = () => {
        return(
            <EditForm
                data={this.props.postById.postById}
                id={Router.router.query.id}
            />
        )
    }

    render() {
        return(
            <Default>
                <div className={'container'}>
                    <AdminMenu/>
                    {
                        this.state.isEdit ?
                            this.renderEditPage():
                            this.renderTable()
                    }
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

export default connect(mapStateToProps)(EditComp)

