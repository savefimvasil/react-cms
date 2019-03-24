import axios from "axios";

import {domain} from "./domain";

export async function getAllPosts() {
    let url = `${domain}/listHome`;
    let adds = []
    await axios.get(url)
        .then(response => {
            adds = response.data
        });
    return adds
}

export async function getPostById(id) {
    let url = `${domain}/listHome/select/${id}`;
    let add
    await axios.get(url).then((response) => {
        add = response.data
    });
    return add
}
