import fetcher from './fetcher'

/**
 * Parse modes of messages
 */
export type parses = 'HTML' | 'Markdown' | 'MarkdownV2'

export type sendTo = number | number[]

/**
 * The mainstream class of Telegram Client
 */
export class TGForms {
    /**
     * Telegram bot api token
     * @protected
     */
    protected token: string

    /**
     * The parse mode which is only equal to "HTML" or "Markdown" or "MarkdownV2"
     * @protected
     */
    protected parse: parses

    /**
     * Initialize the client wrapper
     * @param apiToken The telegram api token from @BotFather
     * @param parseMode Parse mode which is defaulted to "HTML"
     */
    constructor(apiToken: string, parseMode: parses = 'HTML') {
        this.token = apiToken
        this.parse = parseMode
    }

    /**
     * Get endpoint url where all requests will be sent to
     * @protected
     */
    protected getUrl = () => {
        return `https://api.telegram.org/bot${this.token}`
    }

    /**
     * Send messages to wanted user on Telegram
     * @param to A person or array of persons to send messages to
     * @param message Content of the message which is string
     */
    public sendMessage = (to: sendTo, message: string): any => {
        switch (typeof to) {
            case 'number':
                return fetcher(`${this.getUrl()}/sendMessage`, {
                    chat_id: to,
                    parse_mode: this.parse,
                    text: message
                })
            case 'object':
                return to.forEach((char: number) => {
                    return fetcher(`${this.getUrl()}`, {
                        chat_id: to,
                        parse_mode: this.parse,
                        text: char
                    })
                })
            default:
                throw new Error(
                    "The receiver's address should be unique number or array of numbers!"
                )
        }
    }
}
