import axios from "axios";
import {Router} from "../routes";

import getAllPosts from  './posts'

import deletePost from './admin'

const reducer = async (state = {foo: ''}, action) => {
    switch (action.type) {
        case 'getAllPosts': {
            let data = await getAllPosts()
            return({...state, 'allPosts': data})
        }
        case 'deletePost': {
            daletePost()
            break
        }
        default:
            return state
    }
};

export default reducer