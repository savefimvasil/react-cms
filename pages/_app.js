import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import axios from 'axios'
import {Router} from '../routes'

async function getAllPosts() {
    let url = 'http://localhost:4000/listHome';
    let adds = []
    await axios.get(url)
        .then(response => {
            adds = response.data
        });
    return adds
}

const reducer = async (state = {foo: ''}, action) => {
    switch (action.type) {
        case 'getAllPosts': {
            let a = await getAllPosts()
            return({...state, 'allPosts': a})
        }
        case 'deletePost': {
            let url = `http://localhost:4000/listHome/delete/${action.payload}`;
            axios.delete(url).then(response => {
                Router.push("/admin");
            });
            break
        }
        default:
            return state
    }
};

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        ctx.store.dispatch({type: 'FOO', payload: 'foo'});
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);