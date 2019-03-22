import axios from "axios";
import {Router} from "../routes";

import getAllPosts from  './posts'

import {deletePost, updatePostById, addPost} from './admin'

const reducer = async (state = {foo: ''}, action) => {
    switch (action.type) {
        case 'getAllPosts': {
            let data = await getAllPosts()
            return({...state, 'allPosts': data})
        }
        case 'deletePost': {
            deletePost(action.payload)
            break
        }
        case 'updatePostById': {
            updatePostById(action.payload.id, action.payload.data)
            break
        }
        case 'addPost': {
            addPost(action.payload)
            break
        }
        default:
            return state
    }
};

export default reducer