import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const fetchInstagramData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://insta-stealthy-story-surfer-server.vercel.app/api/instagram/${username}`
      );
      setUserInfo(response.data.userInfo);
      setError("");
    } catch (err) {
      setError("Error fetching data");
      setUserInfo(null);
    }
    setLoading(false);
  };

  return (
    <Container>
      <Box
        textAlign="center"
        my={4}
        p={2}
        style={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          borderRadius: "15px",
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Instagram Story Viewer
        </Typography>
      </Box>
      <TextField
        label="Instagram Username"
        value={username}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchInstagramData();
          }
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={fetchInstagramData}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Search my Ex"}
      </Button>
      {error && <Typography color="error">{error}</Typography>}
      {userInfo && (
        <Card style={{ marginTop: "20px" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar
                  alt={userInfo.full_name}
                  src={userInfo.profile_pic_url}
                  style={{ width: 150, height: 150 }}
                />
              </Grid>
              <Grid item xs={12} sm container direction="column">
                <Typography variant="h5">{userInfo.full_name}</Typography>
                <Typography variant="body1">
                  {userInfo.biography || "No biography available"}
                </Typography>
                <Typography variant="body2">
                  Posts: {userInfo.media_count}
                </Typography>
                <Typography variant="body2">
                  Followers: {userInfo.follower_count}
                </Typography>
                <Typography variant="body2">
                  Following: {userInfo.following_count}
                </Typography>
                {userInfo.bio_links && userInfo.bio_links.length > 0 && (
                  <Box style={{ marginTop: "20px" }}>
                    <Typography variant="h6">Bio Links:</Typography>
                    {userInfo.bio_links.map((link) => (
                      <Typography key={link.link_id} variant="body2">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.title}
                        </a>
                      </Typography>
                    ))}
                  </Box>
                )}
                {userInfo.stories && userInfo.stories.length > 0 ? (
                  <Box style={{ marginTop: "20px" }}>
                    <Typography variant="h6">Stories:</Typography>
                    {userInfo.stories.map((story, index) => (
                      <Box key={index} style={{ marginTop: "10px" }}>
                        <img
                          src={story.image_versions2.candidates[0].url}
                          alt={`Story ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: "100%",
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Typography variant="body2">No stories available</Typography>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
      <Card style={{ marginTop: "20px", padding: "20px" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">About Instagram</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Instagram is a photo and video sharing social networking service
              founded by Kevin Systrom and Mike Krieger. The service, which was
              first launched on iOS in October 2010, allows users to upload
              media that can be edited with filters and organized by hashtags
              and geographical tagging. Posts can be shared publicly or with
              pre-approved followers.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">History of Instagram</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Instagram was acquired by Facebook in April 2012 for approximately
              US$1 billion in cash and stock. The app has been known for its
              influence on social media trends, especially among younger
              generations. As of 2021, Instagram is one of the largest social
              media platforms in the world, with over 1 billion monthly active
              users.
            </Typography>
            <Typography variant="body1" paragraph>
              The platform continues to evolve with new features such as
              Stories, IGTV, and Reels, which allow users to create and share
              short-form videos. Instagram has also introduced shopping
              features, allowing users to purchase products directly from the
              app.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">Key Features of Instagram</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              <b>Stories:</b> Instagram Stories allow users to share photos and
              videos that disappear after 24 hours. This feature has become
              extremely popular, with over 500 million people using Stories
              every day.
            </Typography>
            <Typography variant="body1" paragraph>
              <b>IGTV:</b> IGTV is a standalone video application by Instagram
              for Android and iOS smartphones. It allows for longer videos
              compared to Instagram feeds.
            </Typography>
            <Typography variant="body1" paragraph>
              <b>Reels:</b> Instagram Reels is a feature that allows users to
              create short, engaging videos set to music or other audio. Reels
              can be shared with followers or, if the account is public, can be
              discovered by the larger Instagram community through the Explore
              page.
            </Typography>
            <Typography variant="body1" paragraph>
              <b>Shopping:</b> Instagram Shopping allows users to purchase
              products directly from the app. Businesses can tag products in
              their posts, and users can view and purchase these products
              without leaving Instagram.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">Instagram's Impact on Society</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Instagram has significantly influenced the way people communicate
              and share information. It has given rise to influencers, who can
              reach millions of followers and have a substantial impact on
              trends and consumer behavior. Instagram has also been a platform
              for social movements, providing a space for activism and
              awareness.
            </Typography>
            <Typography variant="body1" paragraph>
              However, Instagram has also faced criticism for its impact on
              mental health, particularly among younger users. The platform's
              focus on appearance and the prevalence of edited and filtered
              images can contribute to unrealistic expectations and body image
              issues.
            </Typography>
            <Typography variant="body1" paragraph>
              Despite these challenges, Instagram continues to be a powerful
              tool for connection and communication, enabling users to share
              their lives and interests with a global audience.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">Future of Instagram</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              The future of Instagram looks promising as it continues to
              innovate and introduce new features. The platform is expected to
              further integrate augmented reality (AR) and virtual reality (VR)
              to enhance user experience. Additionally, Instagram is likely to
              expand its e-commerce capabilities, making it even easier for
              users to shop and businesses to sell products.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Container>
  );
};

export default App;
