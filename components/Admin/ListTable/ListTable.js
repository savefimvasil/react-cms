import React, {Component} from 'react'
// import './EditComp.scss'
import {connect} from "react-redux";
import {Link, Router} from '../../../routes'


class ListTable extends Component {
    deleteItem = (id) => {
        this.props.dispatch({ type: "deletePost", payload: id })
    }

    render() {
        return(
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">title</th>
                    <th scope="col">mine descr</th>
                    <th scope="col">edit</th>
                    <th scope="col">del</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.data.map(a => {
                        return(
                            <tr
                                key={a._id}
                            >
                                <td>{a.titleUA}</td>
                                <td>{a.postBodyMiniUA}</td>
                                <td><Link route={'/admin/edit?id=' + a._id}><a>edit</a></Link></td>
                                <td><a onClick={() => this.deleteItem(a._id)}>del</a></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}

export default connect(state => state)(ListTable)