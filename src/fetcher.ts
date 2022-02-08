import axios from 'axios'

export const fetcher = (address: string, params: any) => {
    axios
        .get(address, {
            params
        })
        .then((response) => {
            return response
        })
        .catch((error) => {
            throw new Error(error.message)
        })
}

export default fetcher
