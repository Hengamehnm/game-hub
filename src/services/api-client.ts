import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key: '27142b5afcef46a795bc9bdb12f2b45b'
    }
})