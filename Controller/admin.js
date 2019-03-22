import axios from "axios";
import {Router} from "../routes";

export function deletePost(id) {
    let url = `http://localhost:4000/listHome/delete/${id}`;
    axios.delete(url).then(response => {
        Router.push("/admin");
    });
}

export function updatePostById(id, data) {
    let uri = `http://localhost:4000/listHome/update/${id}`;
    axios.post(uri, data).then(() => {
        Router.push('/admin')
    });
}

export function addPost(data) {
    let url = 'http://localhost:4000/listHome/add';
    axios.post(url, data).then(() => {
        Router.push("/admin");
    });
}
