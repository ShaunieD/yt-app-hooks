import axios from 'axios';

const KEY = 'AIzaSyAUkKhiTRuStIsHoIU67Y5svL8ftVWgaug';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY

    }

});