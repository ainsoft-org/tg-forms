# tg-forms@0.1.1

Small JavaScript library for **Sending and Creating Telegram Forms**

## Installation

`npm install tg-forms --save`

## Getting started

```JavaScript
import {sendMessage} from 'tg-forms'

const options = {
    token: process.env.BOT_TOKEN,
    admins: [1234567,-1274287329], //Telegram admin chat IDs
    parse_mode: "markdown", //Default is markdown
    message: "Custom **message** you _want_ to send",
}

sendMessage(options);

```
