import axios from 'axios'

export const fetcher = (address: string, params: any) => {
    axios
        .get(address, {
            params
        })
        .then((response: any) => {
            return response
        })
        .catch((error: any) => {
            throw new Error(error.message)
        })
}

export default fetcher
