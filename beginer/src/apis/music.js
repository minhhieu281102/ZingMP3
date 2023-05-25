import axios from '../axios'

export const apiGetSong = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: 'song',
        method: 'GET',
        params: { id: id }
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetDetailSong = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: 'infosong',
        method: 'GET',
        params: { id: id }
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetDetailPlaylist = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: 'detailplaylist',
        method: 'GET',
        params: { id: id }
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiSearch = (keyword) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: 'search',
        method: 'GET',
        params: { keyword }
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
