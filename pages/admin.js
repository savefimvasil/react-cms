import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Default from '../layouts/default'
import {connect} from "react-redux";
import AdminMenu from '../components/Admin/AdminMenu/AdminMenu'
import EditComp from '../components/Admin/EditComp/EditComp'
import AddComp from '../components/Admin/AddComp/AddComp'

const fakePromise = data =>
    new Promise((resolve, reject) => setTimeout(() => resolve(data), 100));

class Admin extends Component {
    static async getInitialProps({ query, store }) {
        await store.dispatch({ type: "getAllPosts", payload: "foo1" });
        const list = await store.getState()

        const data = await fakePromise({
            slug: query.slug
        });
        return { data, list };
    }

    renderAddComp = () => {
        return(
            <AddComp/>
        )
    };
    renderEditComp = () => {
        return(
            <EditComp
                data={this.props.list.allPosts}
            />
        )
    };
    renderErrComp = () => {
        return(
            <div>Выберите меню</div>
        )
    };

    render() {
        return(
            <Default>
                <div className={'container'}>
                    <h1>Админ</h1>
                    <AdminMenu/>
                    {
                        this.props.data.slug === 'add' ?
                            this.renderAddComp() :
                        this.props.data.slug === 'edit' ?
                            this.renderEditComp() :
                            this.renderErrComp()

                    }
                </div>
            </Default>
        )
    }
}

export default connect(state => state)(Admin);