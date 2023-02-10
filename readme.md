# Documentation

![Logo](./assets/logo.png)

@tg-forms is a simple library for sending and creating Telegram forms. It allows you to easily send messages to your Telegram chats, as well as validate your bot token and retrieve basic information about your bot.

## Contents

- [Documentation](#documentation)
  - [Contents](#contents)
  - [Getting started](#getting-started)
    - [Importing the Library](#importing-the-library)
    - [Initializing the Client](#initializing-the-client)
    - [Validating the Bot Token](#validating-the-bot-token)
    - [Sending Messages](#sending-messages)
    - [Error Handling](#error-handling)
  - [Contact us](#contact-us)
  - [License](#license)

## Getting started

To use the tg-forms library, you need to install it via npm:

```sh
npm install tg-forms
```

### Importing the Library

To use the tg-forms library in your code, you can import it with the following code:

```TypeScript
import 'dotenv/config'
import { TGForms } from 'tg-forms
```

### Initializing the Client

To initialize the client, you need to provide it with your bot token, which you can store in your environment variables. If you don't have a bot token, you can create one by talking to the BotFather on Telegram.

```TypeScript
const client = new TGForms(process.env.BOT_TOKEN || '')
```

### Validating the Bot Token

You can use the `getBotInfo()` method to validate your bot token and retrieve basic information about your bot. The method returns an object with an ok field that indicates whether the token is valid.

```TypeScript
const valid = await client.getBotInfo()
console.log(valid) // {ok: true} if BOT TOKEN is valid
```

### Sending Messages

To send a message to your Telegram chat, you can use the `sendMessage()` method, which takes two arguments: the `chat_id` of your chat and the `text` of the message you want to send. The `chat_id` can be obtained by sending a message to the userinfobot on Telegram.

```TypeScript
const sendMessage = await client.sendMessage(701469900, 'Hello World')
console.log(sendMessage) // {ok: true} if message is sent
```

### Error Handling

In case of errors, you can catch them by using the catch statement. The error will be logged to the console.

```TypeScript
main().catch((e) => console.log('Error:', e))
```

## Contact us

If you have any questions or suggestions, you can contact us at [ainsoft.org](https://ainsoft.org).
Open-source support: oss@ainsoft.org

## License

The tg-forms library is released under the MIT License.

MIT License

Copyright (c) 2023 Ainsoft.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

```sh
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
