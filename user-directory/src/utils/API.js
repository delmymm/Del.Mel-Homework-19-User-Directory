import axios from "axios";

export default {
    findEmployee: function () {
        return axios.get("https://randomuser.me/api/?results=20");
    }
}