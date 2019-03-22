import React, {Component} from 'react'
// import './EditComp.scss'
import {connect} from "react-redux";
import {Link, Router} from '../../../routes'


class ListTable extends Component {
    deleteItem = (id) => {
        this.props.dispatch({ type: "deletePost", payload: id })
    }

    goToEdit = (id) => {
        Router.push('/admin/edit?id=' + id)
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
                                <td><a onClick={() => this.goToEdit(a._id)}>edit</a></td>
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

const mapStateToProps = function(state) {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(ListTable)