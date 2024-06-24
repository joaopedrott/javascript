import axios from 'axios'

export const googleBooksApis = axios.create({
    baseURL:'https://www.googleapis.com/books'
})

googleBooksApis.get('v1/volumes?q=qualquercoisa')
