import axios from 'axios'

export const fetcher = async (address: string, params: any): Promise<any> => {
    return await axios
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
