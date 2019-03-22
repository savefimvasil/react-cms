import axios from "axios";

export default async function getAllPosts() {
    let url = 'http://localhost:4000/listHome';
    let adds = []
    await axios.get(url)
        .then(response => {
            adds = response.data
        });
    return adds
}