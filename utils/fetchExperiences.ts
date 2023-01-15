import { groq } from "next-sanity";
import { sanityClient } from "../sanity.cli";
import { Experience } from "../typings";

const query = groq ` *[_type == "experience"] {
    ...,
    technologies[]->
}` ;

export const fetchExperiences = async () => {
    const res = await sanityClient.fetch(query);

    const experiences: Experience[] = res;

//console.log("fetching", experiences);
return experiences
};