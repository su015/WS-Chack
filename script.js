function sendOrder(platform) {
  const name = document.getElementById("name").value.trim();
  const product = document.getElementById("product").value.trim();
  const payment = document.getElementById("payment").value;

  if (!name || !product) {
    alert("Please fill all details");
    return;
  }

  // 🔴 REPLACE THESE VALUES
  const BOT_TOKEN = " 8318720033:AAGEmSwAXk1BANwB4kivRX7ceqRudvzHrdc ";
  const CHAT_ID = " 7549804367 ";

  const TELEGRAM_USERNAME = "@zamir_Xp";
  const DISCORD_USER_ID = "YOUR_DISCORD_ID";
  const INSTAGRAM_USERNAME = "YOUR_INSTAGRAM_USERNAME";

  const message = `
🛒 NEW ORDER

👤 Name: ${name}
📦 Product: ${product}
💳 Payment: ${payment}
🧭 Buy Via: ${platform.toUpperCase()}
`;

  // Send to Telegram Bot (YOU)
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  });

  // Redirect customer
  if (platform === "telegram") {
    window.location.href =
      `https://t.me/${TELEGRAM_USERNAME}?text=` +
      encodeURIComponent("Hello, I placed an order.");
  }

  if (platform === "discord") {
    alert("Order sent! Please message me on Discord.");
    window.location.href = `https://discord.com/users/${DISCORD_USER_ID}`;
  }

  if (platform === "instagram") {
    alert("Order sent! Please message me on Instagram.");
    window.location.href = `https://ig.me/m/${INSTAGRAM_USERNAME}`;
  }
}
