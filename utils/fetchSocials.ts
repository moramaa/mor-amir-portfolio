import { groq } from "next-sanity";
import { sanityClient } from "../sanity.cli";
import { Social } from "../typings";

const query = groq`
*[_type == "social"]
`;

export const fetchSocial = async () => {
    const res = await sanityClient.fetch(query);
     const socials: Social[] = res;

return socials
};