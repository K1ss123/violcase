const tg = window.Telegram.WebApp;
tg.expand();

function sendData() {
  const data = {
    name: "Ім'я користувача",
    score: 42,
    timestamp: new Date().toISOString()
  };
  tg.sendData(JSON.stringify(data));
}
