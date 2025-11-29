import { groq } from "next-sanity";

export const PROFILE_QUERY = groq`*[_type == "profile"][0]{
  _id,
  name,
  headline,
  image,
  bio,
  email,
  socialLinks
}`;

export const WORK_EXPERIENCE_QUERY = groq`*[_type == "workExperience"] | order(startDate desc){
  _id,
  company,
  role,
  startDate,
  endDate,
  description
}`;

export const PROJECTS_QUERY = groq`*[_type == "project"] | order(_createdAt desc){
  _id,
  title,
  slug,
  image,
  description,
  technologies,
  link,
  githubLink
}`;
