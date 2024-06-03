const axios = require("axios");
const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const { IgApiClient } = require("instagram-private-api");

require("dotenv").config();

const app = express();
const port = 8000;

app.use(cors());
const ig = new IgApiClient();

app.get("/instagram/:username", async (req, res) => {
  const { username } = req.params;

  // Check if Instagram credentials are set
  const id = process.env.ID;
  const pw = process.env.PW;

  if (!id || !pw) {
    return res.status(500).json({ error: "Instagram credentials are missing" });
  }

  ig.state.generateDevice(id);
  await ig.account.login(id, pw);

  try {
    const userId = await ig.user.getIdByUsername(username);
    const userInfo = await ig.user.info(userId);
    const feeds = await ig.feed.userStory(userId).items();

    userInfo.username = username;
    userInfo.stories = feeds;

    const response = await axios.get(`https://www.instagram.com/${username}/`);
    const $ = cheerio.load(response.data);
    const userImage = $("meta[property='og:image']").attr("content");

    userInfo.profile_pic_url = userImage;

    res.json({
      userInfo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
