import React, {Component} from 'react'
import './OfferPage.scss'
import axios from 'axios'

class OfferPage extends Component{
    state = {
        post: {}
    }
    componentWillMount() {
        let url = `http://localhost:4000/listHome/select/${this.props.id}`;
        axios.get(url).then((response) => {
            const data = {}
            data.post = response.data
            this.setState(data)
        });
    }

    render() {
        return (
            <h1>{this.state.post.titleUA}</h1>
        )
    }
}

export default OfferPage

