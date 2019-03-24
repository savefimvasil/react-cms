import axios from "axios";
import {Router} from "../routes";

import {domain} from './domain'

export function deletePost(id) {
    let url = `${domain}/listHome/delete/${id}`;
    axios.delete(url).then(response => {
        Router.push("/admin");
    });
}

export function updatePostById(id, data) {
    let uri = `${domain}/listHome/update/${id}`;
    axios.post(uri, data).then(() => {
        Router.push('/admin')
    });
}

export function addPost(data) {
    let url = `${domain}/listHome/add`;
    axios.post(url, data).then(() => {
        Router.push("/admin");
    });
}
