/*
 * How it works?
 * Telegram send message url: "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$id}&parse_mode=html&text={$text}
 * Options: token, admins, message, parse_mode
 */

const sendMessage = (options) => {
  const admins = options.admins;
  const token = options.token;
  admins.forEach((chat_id) => {
    axios
      .get(`https://api.telegram.org/bot${token}/sendMessage`, {
        params: {
          chat_id: chat_id,
          parse_mode: options.parse_mode || "markdown",
          text: options.message,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};

module.exports = {
  sendMessage,
};
