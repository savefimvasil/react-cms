import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Default from '../../layouts/default'
import {connect} from "react-redux";
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu'

const fakePromise = data =>
    new Promise((resolve, reject) => setTimeout(() => resolve(data), 100));

class Index extends Component {
    static async getInitialProps({ query, store }) {
        await store.dispatch({ type: "getAllPosts" });
        const list = await store.getState()
        const data = await fakePromise({
            slug: query.slug
        });
        return { data, list };
    }

    render() {
        return(
            <Default>
                <div className={'container'}>
                    <h1>Админ</h1>
                    <AdminMenu/>
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

export default connect(mapStateToProps)(Index);
