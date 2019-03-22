import axios from "axios";
import {Router} from "../routes";

export default function deletePost() {
    let url = `http://localhost:4000/listHome/delete/${action.payload}`;
    axios.delete(url).then(response => {
        Router.push("/admin");
    });
}