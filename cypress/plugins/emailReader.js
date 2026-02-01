const imaps = require("imap-simple");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

module.exports = async () => {
  const config = {
    imap: {
      user: process.env.CYPRESS_EMAIL,
      password: process.env.CYPRESS_EMAIL_PASSWORD,
      host: "imap.gmail.com",
      port: 993,
      tls: true,
      authTimeout: 10000,
    },
  };

  const connection = await imaps.connect(config);
  await connection.openBox("INBOX");

  for (let i = 0; i < 5; i++) {
    // retry 5 times
    const messages = await connection.search(["UNSEEN"], {
      bodies: ["TEXT"],
      markSeen: true,
    });

    if (messages.length) {
      const body = messages[messages.length - 1].parts[0].body;
      const match = body.match(/\b\d{6}\b/);
      if (match) return match[0];
    }

    await sleep(3000); // wait 3s before retry
  }

  throw new Error("2FA email not received after retries");
};
