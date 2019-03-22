import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react'
import Default from '../layouts/default'
import {Router, Route} from '../routes'
import ListOfOffers from '../components/ListOfOffers/ListOfOffers'
import OfferPage from '../components/OfferPage/OfferPage'
import {connect} from "react-redux";

const fakePromise = data =>
    new Promise((resolve, reject) => setTimeout(() => resolve(data), 100));


class List extends Component {
    static async getInitialProps({ query, store }) {
        await store.dispatch({ type: "getAllPosts", payload: "foo1" });
        const list = await store.getState()
        const data = await fakePromise({
            slug: query.slug
        });
        return { list, data };
    }

    renderListPage = () => {
        return (
            <ListOfOffers
                title={'Лучшие предложения'}
                count={4}
                data={this.props.list.allPosts}
            />
        )
    };
    renderItemPage =() => {
        return (
            <OfferPage
                id={this.props.data.slug}
            />
        )
    };

    render() {
        return(
            <Default>
                <div className={'container'}>
                    {
                        this.props.data.slug ?
                            this.renderItemPage()
                            : this.renderListPage()
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

export default connect(mapStateToProps)(List);