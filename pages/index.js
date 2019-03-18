import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Default from '../layouts/default'
import IndexHeader from '../components/Index/indexHeader/indexHeader'
import ListOfOffers from '../components/ListOfOffers/ListOfOffers'
import {connect} from "react-redux";

class Index extends Component {
    static async getInitialProps({ store, isServer, pathname, query }) {
        await store.dispatch({ type: "getAllPosts", payload: "foo1" });
        const data = await store.getState()
        return {data}
    }

    render() {
        return(
            <Default>
                <div>
                    <IndexHeader/>
                    <ListOfOffers
                        title={'Лучшие предложения'}
                        count={4}
                        data={this.props.data.allPosts}
                    />
                </div>
            </Default>
        )
    }
}

export default connect(state => state)(Index);