import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Typography,
} from "@mui/material";
import { addDays, format } from "date-fns";

const Info = () => {
  const today = new Date();

  return (
    <Card style={{ marginTop: "20px", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Instagram Insights
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Written by 1uv0cean
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">About Instagram</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Posted on {format(today, "MMMM d, yyyy")}
          </Typography>
          <Typography variant="body1" paragraph>
            Instagram is a photo and video sharing social networking service
            founded by Kevin Systrom and Mike Krieger. The service, which was
            first launched on iOS in October 2010, allows users to upload media
            that can be edited with filters and organized by hashtags and
            geographical tagging. Posts can be shared publicly or with
            pre-approved followers. Instagram's intuitive interface and wide
            array of editing tools have made it a favorite among users looking
            to share their visual experiences with friends and followers.
          </Typography>
          <Typography variant="body1" paragraph>
            The platform's success can be attributed to its focus on visual
            content, ease of use, and the community aspect it fosters. With the
            integration of features like Stories, IGTV, and Reels, Instagram has
            continuously evolved to meet the changing needs and preferences of
            its users.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">History of Instagram</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Posted on {format(addDays(today, -4), "MMMM d, yyyy")}
          </Typography>
          <Typography variant="body1" paragraph>
            Instagram was acquired by Facebook in April 2012 for approximately
            US$1 billion in cash and stock. The acquisition was a strategic move
            by Facebook to capture the growing market of mobile photo sharing.
            Since its acquisition, Instagram has seen exponential growth in its
            user base, expanding from 30 million users at the time of the
            acquisition to over 1 billion monthly active users as of 2021.
          </Typography>
          <Typography variant="body1" paragraph>
            The platform continues to evolve with new features such as Stories,
            IGTV, and Reels, which allow users to create and share short-form
            videos. Instagram has also introduced shopping features, allowing
            users to purchase products directly from the app. These features
            have helped Instagram maintain its position as a leader in the
            social media landscape, constantly innovating to keep users engaged.
          </Typography>
          <Typography variant="body1" paragraph>
            Instagram's acquisition history also includes several other
            strategic purchases. For example, the company acquired the video
            creation platform Luma in 2013 to enhance its video capabilities.
            These acquisitions have played a significant role in Instagram's
            growth and feature expansion over the years.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Key Features of Instagram</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Posted on {format(addDays(today, -10), "MMMM d, yyyy")}
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Stories:</b> Instagram Stories allow users to share photos and
            videos that disappear after 24 hours. This feature has become
            extremely popular, with over 500 million people using Stories every
            day. Stories can include text, music, and interactive elements like
            polls and questions, making them a dynamic way to engage with
            followers.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>IGTV:</b> IGTV is a standalone video application by Instagram for
            Android and iOS smartphones. It allows for longer videos compared to
            Instagram feeds. IGTV is designed to be a mobile-first experience,
            offering full-screen vertical videos and catering to the increasing
            demand for video content on mobile devices.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Reels:</b> Instagram Reels is a feature that allows users to
            create short, engaging videos set to music or other audio. Reels can
            be shared with followers or, if the account is public, can be
            discovered by the larger Instagram community through the Explore
            page. This feature is Instagram's answer to the growing popularity
            of short-form video content, driven by platforms like TikTok.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Shopping:</b> Instagram Shopping allows users to purchase
            products directly from the app. Businesses can tag products in their
            posts, and users can view and purchase these products without
            leaving Instagram. The shopping feature integrates seamlessly with
            Instagram's visual focus, allowing brands to showcase their products
            in a compelling way.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Explore Page:</b> The Explore page on Instagram helps users
            discover new content and accounts based on their interests. It uses
            algorithms to curate content that users are likely to engage with,
            making it a powerful tool for content discovery and engagement.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Filters and Editing Tools:</b> Instagram offers a wide range of
            filters and editing tools that allow users to enhance their photos
            and videos before sharing them. These tools are designed to be easy
            to use, helping users create professional-looking content with
            minimal effort.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Instagram's Impact on Society</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Posted on {format(addDays(today, -13), "MMMM d, yyyy")}
          </Typography>
          <Typography variant="body1" paragraph>
            Instagram has significantly influenced the way people communicate
            and share information. It has given rise to influencers, who can
            reach millions of followers and have a substantial impact on trends
            and consumer behavior. Influencers leverage their large followings
            to promote products, share personal stories, and shape public
            opinion, creating a new form of celebrity in the digital age.
          </Typography>
          <Typography variant="body1" paragraph>
            Instagram has also been a platform for social movements, providing a
            space for activism and awareness. Hashtags such as #BlackLivesMatter
            and #MeToo have gained global traction, highlighting the platform's
            role in mobilizing people and spreading important messages.
          </Typography>
          <Typography variant="body1" paragraph>
            However, Instagram has also faced criticism for its impact on mental
            health, particularly among younger users. The platform's focus on
            appearance and the prevalence of edited and filtered images can
            contribute to unrealistic expectations and body image issues.
            Studies have shown that excessive use of Instagram can lead to
            feelings of inadequacy, anxiety, and depression among teenagers and
            young adults.
          </Typography>
          <Typography variant="body1" paragraph>
            Despite these challenges, Instagram continues to be a powerful tool
            for connection and communication, enabling users to share their
            lives and interests with a global audience. The platform's ability
            to bring people together, regardless of geographical barriers, is
            one of its most significant strengths.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Future of Instagram</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Posted on {format(addDays(today, -24), "MMMM d, yyyy")}
          </Typography>
          <Typography variant="body1" paragraph>
            The future of Instagram looks promising as it continues to innovate
            and introduce new features. The platform is expected to further
            integrate augmented reality (AR) and virtual reality (VR) to enhance
            user experience. AR filters and VR experiences are likely to become
            more prevalent, offering users immersive ways to interact with
            content.
          </Typography>
          <Typography variant="body1" paragraph>
            Additionally, Instagram is likely to expand its e-commerce
            capabilities, making it even easier for users to shop and businesses
            to sell products. The integration of shopping features with AR could
            allow users to virtually try on products before purchasing, creating
            a seamless shopping experience.
          </Typography>
          <Typography variant="body1" paragraph>
            The platform's focus on video content is expected to continue, with
            more emphasis on IGTV and Reels. Live streaming and interactive
            video features are also likely to evolve, providing users with more
            dynamic ways to engage with their audience.
          </Typography>
          <Typography variant="body1" paragraph>
            Instagram's commitment to user safety and mental health will also
            play a crucial role in its future. The platform is expected to
            introduce more tools and resources to help users manage their mental
            well-being and create a positive online environment.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default Info;
