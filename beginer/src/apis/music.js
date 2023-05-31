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

export const apiGetArtistSongs = (singerId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: 'artistsong',
        method: 'GET',
        params: { id: singerId, page: 1, count: 50 }
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetArtist = (alias) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: 'artist',
        method: 'GET',
        params: { name: alias }
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetChartHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: 'charthome',
        method: 'GET'
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
