import {
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
import Ad1 from "./components/Advertisement/Ad1";
import Info from "./components/Info";

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
      <Info />
      <Ad1 />
    </Container>
  );
};

export default App;
