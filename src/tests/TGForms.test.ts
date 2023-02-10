import 'dotenv/config'
import { TGForms } from '../client'
const client = new TGForms(process.env.BOT_TOKEN || '')

test('Check if bot is connected to Telegram Server', async () => {
    const response = await client.getBotInfo()
    expect(response.data.ok).toBe(true)
})

test('Check if bot is sending message', async () => {
    const response = await client.sendMessage(701469970, 'Hello World!')
    expect(response.data.ok).toBe(true)
})
