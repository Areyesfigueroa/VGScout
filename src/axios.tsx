import axios from 'axios';

const instance = axios.create({
    baseURL: "https://rawg-video-games-database.p.rapidapi.com",
	headers: {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "a5e3fb3ebcmsh203426ca241b46ep1630eejsn0f17cd94c4f4"
    }
});

instance.interceptors.request.use((request:object): object => {
    //console.log(request);
    return request;
});

export default instance;