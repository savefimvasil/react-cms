import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react'
import Default from '../layouts/default'
import {Router, Route} from '../routes'
import ListOfOffers from '../components/ListOfOffers/ListOfOffers'
import OfferPage from '../components/OfferPage/OfferPage'

const fakePromise = data =>
    new Promise((resolve, reject) => setTimeout(() => resolve(data), 100));


class List extends Component {
    static async getInitialProps({ query }) {
        const data = await fakePromise({
            slug: query.slug
        });
        return { data };
    }

    renderListPage = () => {
        return (
            <ListOfOffers/>
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

export default List