import {atom, selector} from 'recoil';
import axios from 'axios'

export const videoInfo = atom({
    key: 'videoInfo',
    default: {},
})

export const getVideos = selector({
    key: 'getVideos',
    get: async () => {
        const config = {
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/videos',
            params: {
                key: 'AIzaSyD2Buic_jeTe_bX8KSr9hdhnedk0jbT4gs',
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 20,
                regionCode: 'KR'
            }
        }
        const {data} = await axios(config)
        return data
    },
    set: ({set}, newValue) => set(videoInfo, newValue)

})

// export const getChannelInfo = selector({
//     key: 'getChannelInfo',
//     get: async () => {
//         const config = {
//             method: 'get',
//             url: 'https://www.googleapis.com/youtube/v3/channels',
//             params: {
//                 key: 'AIzaSyD2Buic_jeTe_bX8KSr9hdhnedk0jbT4gs',
//                 part: 'snippet',
//             }
//         }
//     }
// })
