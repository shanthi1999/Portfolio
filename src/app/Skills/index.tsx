"use client";
import React from "react";
import { Card, CardContent, Typography, CardMedia, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import CONFIG from "../../../config/helper.json";

// Styled components
const AnimatedCard = styled(Card)`
  margin: 1em;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    margin: 0.5em;
  }
`;

const StyledCardMedia = styled(CardMedia)({
  height: "5em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  "@media (max-width: 768px)": {
    height: "5em",
  },
});

const CustomCardMedia = styled('img')({
  width: '100%',
  height: 'auto',
});

const SkillCard = styled(Card)`
  margin: 1em;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    margin: 0.5em;
  }
`;

const SkillCardContent = styled(CardContent)`
  padding: 0.6em;
`;

const SkillTitle = styled(Typography)`
  font-weight: 600;
  font-size: ${(props) => (props.theme.breakpoints.down('sm') ? '0.9em' : '1em')};
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;

const SkillDescription = styled(Typography)`
  font-size: ${(props) => (props.theme.breakpoints.down('sm') ? '0.7em' : '0.8em')};
  text-align: start;
  margin: 0.7em 0em;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;

const SkillDescriptionInfo = styled(Typography)`
  font-size: ${(props) => (props.theme.breakpoints.down('sm') ? '0.6em' : '0.6em')};
  text-align: start;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;

const SectionTitle = styled(Typography)`
  color: #194C75;
  font-weight: 700;
  text-align: center;
  font-size: ${(props) => (props.theme.breakpoints.down('sm') ? '1.7em' : '1em')};
  margin: ${(props) => (props.theme.breakpoints.down('sm') ? '0.8em 0em' : '0.3em 0em')};
  text-transform: none;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;

const SectionDescription = styled(Typography)`
  font-weight: 500;
  max-width: ${(props) => (props.theme.breakpoints.down('sm') ? '90%' : '70%')};
  text-align: center;
  line-height: 1.7em;
  text-transform: none;
  color: #194C75;
  font-size: ${(props) => (props.theme.breakpoints.down('sm') ? '0.75em' : '0.7em')};
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;

// Components
const CustomCardMediaComponent = ({ image, title }: any) => (
  <StyledCardMedia>
    <CustomCardMedia src={image} alt={title} />
  </StyledCardMedia>
);

interface SkillCardProps {
  title: string;
  description: string;
  image: string;
  descriptionInfo: string;
}

const SkillCardComponent = ({ title, description, image, descriptionInfo }: SkillCardProps) => (
  <SkillCard>
    <CustomCardMediaComponent image={image} title={title} />
    <SkillCardContent>
      <SkillTitle variant="body2" sx={{fontSize:"0.7em"}}>
        {title}
      </SkillTitle>
    </SkillCardContent>
  </SkillCard>
);

export const Skills = () => {
  const skills = CONFIG.skills;

  return (
    <Grid
      id="skills"
      container
      xs={12}
      sm={12}
      md={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={{ xs: "0.1em", sm: "0.5em" }}
      borderTop="1px solid #bfbfbf"
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        flexDirection="column"
      >
        <SectionTitle>
          Skills and Expertise
        </SectionTitle>
        <SectionDescription mb="2em" gutterBottom>
          I am proficient in these below skills, and have successfully used them
          to develop robust web applications. I continuously learn and stay
          updated with the latest advancements to enhance my skills further.
        </SectionDescription>
      </Grid>
      {skills.map((skill) => (
        <Grid item xs={6} sm={2} md={2} key={skill.title}>
          <SkillCardComponent
            title={skill.title}
            description={skill.description}
            descriptionInfo={skill.descriptionInfo}
            image={skill.image}
          />
        </Grid>
      ))}
    </Grid>
  );
};
