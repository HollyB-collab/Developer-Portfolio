export type portfolioType = {
  workExperience: experienceType[],
  education: educationType[],
  skills: skillsType[],
  projects: projectsType[],
  contact: contactType
};

export type experienceType = {
  "title": string;
  "company": string;
  "websiteLink": string;
  "location"?: string;
  "dates": string;
  "responsibilities": string[];
};

export type educationType = {
  "school": string,
  "degree"?: string,
  "graduation": number,
  "image"?: string,
};

export type skillsType = {
  "name": string,
  "level": string,
  "progressbar": number
};

export type projectsType = {
  "title": string,
  "primary": boolean,
  "description": string,
  "githubLink": string,
  "imageUrl"?: string
};

export type contactType = {
  "name": string,
  "title": string,
  "location": string,
  "email": string,
  "website": string,
  "githublink"?: string,
  "linkedinlink"?: string,
  "twitterlink"?: string,
  "stackoverflowLink"?: string,
  "codepenLink"?: string
};