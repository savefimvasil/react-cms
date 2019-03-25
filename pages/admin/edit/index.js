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
            isEdit: false,
            id: null
        }
    }

    static async getInitialProps({ store, state, isServer, pathname, query }) {
        await store.dispatch({ type: "getAllPosts" });
        const data = await store.getState()
        let postById
        if(query.id) {
            await store.dispatch({type: "getPostById", payload: query.id})
            postById = await store.getState()
        } else postById = data
        return {data, postById }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!this.state.isEdit && Router.router.query.id){
            this.setState({
                isEdit: true,
            })
        } else if(this.state.isEdit && !Router.router.query.id){
            this.setState({
                isEdit: false,
            })
        }
    }

    renderTable = () => {
        if(this.state.isEdit) {
            return(
                <EditForm
                    data={this.props.postById.postById}
                    id={Router.router.query.id}
                />
            )
        } else {
            return (
                <ListTable
                    data={this.props.data.allPosts}
                />
            )
        }
    }

    render() {
        return(
            <Default>
                <div className={'container'}>
                    <AdminMenu/>
                    {
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

