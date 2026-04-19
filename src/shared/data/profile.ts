import type {
  Profile,
  SocialLink,
  ContactInfo,
  Language,
} from "@/entities/profile/model/types";

export const profile: Profile = {
  imagePath: "/images/christian.jpg",
  name: "Christian Murillo",
  jobTitle: "Senior Software Engineer",
  residence: "Philippines",
  city: "Manila",
  birthday: "1996/01/01",
};

export const socialLinks: SocialLink[] = [
  {
    icon: "Linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/christianoroceomurillo",
  },
  {
    icon: "Github",
    label: "GitHub",
    url: "https://github.com/christianmurillo10",
  },
];

export const contactAddress: ContactInfo[] = [
  { name: "Country", value: "Philippines" },
  { name: "City", value: "Manila" },
  { name: "Street", value: "1922 Int. 14 Bo. Banana Obesis St." },
];

export const contactSocial: ContactInfo[] = [
  { name: "Email", value: "christianoroceomurillo@gmail.com" },
  { name: "Skype", value: "christianoroceomurillo" },
  { name: "LinkedIn", value: "christianoroceomurillo" },
  { name: "Phone", value: "+63 929 503 5768" },
];

export const languages: Language[] = [
  { name: "Tagalog", value: 100 },
  { name: "English", value: 70 },
];
