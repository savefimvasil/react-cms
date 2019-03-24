import axios from "axios";
import {Router} from "../routes";

import {getAllPosts, getPostById} from  './posts'

import {deletePost, updatePostById, addPost} from './admin'

const reducer = async (state, action) => {
    switch (action.type) {
        case 'getAllPosts': {
            let data = await getAllPosts()
            return({...state, 'allPosts': data})
        }
        case 'getPostById': {
            let data = await getPostById(action.payload)
            return({...state, 'postById': data})
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
