import React from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="xl">
        {/* make container max width even larger
         */}

      <Box mt={5} mb={2}>
        <Box m="20px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold" }}
            >
              About
            </Typography>
          </Box>
        </Box>

        <Card
          sx={{
            backgroundColor: "rgba(245, 245, 245, 0.8)",
            boxShadow: 3,
            padding: 4,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Welcome to MESSAGE CHECK!
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "black", fontFamily: "Arial, sans-serif" }}
            >
              MESSAGE CHECK is a fact-checking dashboard, and a predictive
              learning platform to identify existing fact-checks that match
              dis/misinformation claims going viral. It also enables
              fact-checkers to predict misinformation around events and identify
              seasonal or event-based trends that cause a surge in
              misinformation. The dashboard is part of the Misleading Data
              Predictor (MDP) created collaboratively by teams at Vishvas News
              and IIT-Kharagpur.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Explanatory note from the team at Department of Computer Science
              Engineering at the Indian Institute of Technology (IIT),
              Kharagpur:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "black", fontFamily: "Arial, sans-serif" }}
            >
              Processing the Vishvas News database of debunked news-stories:
              Vishvas News shared with us approx. 10,000 news-stories that have
              been debunked (verified to be false) over the last several years.
              We populated a database with these stories. Specifically, we store
              the headline, URLs, tags, person names, etc. of the news-stories
              in the database. Also if the news-story has a relevant image, that
              image is stored in the database.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ color: "black", fontFamily: "Arial, sans-serif" }}
            >
              Text Queries in English: Our text-matching system takes a text
              query as input and produces a list of stories from the database
              with the most matching similarity. The system contains a two-stage
              ensemble pipeline consisting of 3 AI models for measuring text
              similarity. We first use (1) the BM25 retrieval algorithm, and (2)
              cosine similarity of Fasttext sentence embeddings to get ranked
              lists of all the news stories, based on their similarity to the
              query. Then, the union set of the top 25 stories from each of the
              two above models is fed to a (3) BERTScore model which produces
              another ranked list of stories similar to the query. A fourth
              ranked list is also created from this union set of stories based
              on reverse chronological order of the story date, to account for
              recency in the results.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ color: "black", fontFamily: "Arial, sans-serif" }}
            >
              Each of the three models has been used for a specific reason –
              <ul>
                <li>
                  BM25 is a very robust and lightweight text retrieval
                  algorithm;
                </li>
                <li>
                  Fasttext embeddings can handle character n-grams aiding with
                  typos / slight differences in spellings (e.g., if the user
                  wrongly spells a name in the query);
                </li>
                <li>
                  BERTScore to aid in multilingual matching (e.g., if the query
                  is in English, this will help to identify matching stories in
                  both English and Hindi).
                </li>
              </ul>
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ color: "black", fontFamily: "Arial, sans-serif" }}
            >
              Note that we load the BERTScore model with
              distilbert-base-multilingual which is a relatively lightweight
              version of the BERT model which can capture multilingual
              information, to ensure that the system can give quick answers to
              queries.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ color: "black", fontFamily: "Arial, sans-serif" }}
            >
              Finally, we merge the four ranked lists using a reciprocal rank
              fusion (RRF) method to get the final ranked lists. We then show
              all the stories with a similarity percentage greater than a
              certain threshold value (which we set through manual testing).
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ color: "black", fontFamily: "Arial, sans-serif" }}
            >
              Text Queries containing Indian languages: Before sending the query
              to the ranking algorithms, we check if more than 40% tokens in the
              query are non-english characters, and if so, we label these as
              multilingual queries. We first translate such queries to English
              using IndicTrans2 (an open-source BERT-based translation model).
              We then process this translated query using the three models, and
              then pass the additional ranked lists (along with the original
              ones) to the RRF method for merging them.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ color: "black", fontFamily: "Arial, sans-serif" }}
            >
              Image Query: Given an image as the query, we use ResNet-50, an
              open-source vision-transformer model, to get a dense embedding
              representation of the image query. We have collected images from
              all of the stories in the database and precomputed their embedding
              representations. We then calculate the most similar story
              embeddings with that of the query.
            </Typography>

            {/* <Divider sx={{ my: 3 }} /> */}

            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold" }}
            >
              About Vishvas News
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ color: "black", fontFamily: "Arial, sans-serif" }}
            >
              Contact
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ color: "black", fontFamily: "Arial, sans-serif" }}
            >
              Do you have any query, concern or feedback? Write to us at{" "}
              <a href="mailto:mdp@jagrannewmedia.com">mdp@jagrannewmedia.com</a>
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ color: "black", fontFamily: "Arial, sans-serif" }}
            >
              You can also reach the Vishvas News team via WhatsApp on
              +91-9205270923.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About;
