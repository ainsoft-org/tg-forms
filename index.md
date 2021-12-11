# tg-forms@0.1.1

<img src="https://raw.githubusercontent.com/Bytech-Uzbekistan/tg-forms/HEAD/Logo.png"  alt="tg-forms logo"/>

Small JavaScript library for Sending and Creating Telegram Forms

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

# codepen

<iframe height="300" style="width: 100%;" scrolling="no" title="tg forms" src="https://codepen.io/mrabdurakhimov/embed/MWEjXwL?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mrabdurakhimov/pen/MWEjXwL">
  tg forms</a> by Mukhammadyusuf Abdurakhimov (<a href="https://codepen.io/mrabdurakhimov">@mrabdurakhimov</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
