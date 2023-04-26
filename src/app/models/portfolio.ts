export interface portfolio {
    basics:       Basics;
    skills:       Skill[];
    projects:     Project[];
    work:         Work[];
    publications: Publication[];
    education:    Education[];
    volunteer:    Volunteer[];
    awards:       Award[];
    languages:    any[];
    interests:    any[];
    references:   any[];
    certificates: any[];
    meta:         Meta;
}

export interface Award {
    title:    string;
    date:     Date;
    awarder:  string;
    summary:  string;
    fullDate: FullDate;
}

export interface FullDate {
    year?:  number;
    month?: number | null;
}

export interface Basics {
    name:              string;
    label:             string;
    image:             string;
    email:             string;
    phone:             string;
    url:               string;
    summary:           string;
    profiles:          Profile[];
    headline:          string;
    blog:              string;
    yearsOfExperience: number;
    username:          string;
    locationAsString:  string;
    region:            string;
    karma:             number;
    id:                string;
    followers:         number;
    following:         number;
    picture:           string;
    website:           string;
}

export interface Profile {
    network:  string;
    username: string;
    url:      string;
}

export interface Education {
    institution: string;
    url:         string;
    area:        string;
    studyType:   string;
    startDate:   Date;
    endDate:     Date;
    score:       string;
    courses:     any[];
    description: string;
    activities:  string;
    start:       FullDate;
    end:         FullDate;
    website:     string;
    gpa:         string;
}

export interface Meta {
    note:         string;
    canonical:    string;
    version:      string;
    lastModified: Date;
}

export interface Project {
    name:            string;
    description:     string;
    url:             string;
    highlights:      any[];
    keywords:        any[];
    roles:           any[];
    startDate:       string;
    endDate:         string;
    entity:          string;
    type:            string;
    displayName:     string;
    website:         string;
    summary:         string;
    primaryLanguage: string;
    languages:       string[];
    libraries:       string[];
    githubUrl:       string;
    repositoryUrl:   string;
    start:           End;
    end:             End;
    images:          Image[];
    videos:          Video[];
}

export interface End {
    year:  number | null;
    month: number | null;
    day:   null;
}

export interface Image {
    resolutions: Resolutions;
}

export interface Resolutions {
    micro:     Desktop;
    thumbnail: Desktop;
    mobile:    Desktop;
    desktop:   Desktop;
}

export interface Desktop {
    url:    string;
    size:   number;
    width:  number;
    height: number;
}

export interface Video {
    url:      string;
    source:   string;
    sourceId: string;
}

export interface Publication {
    name:            string;
    publisher:       string;
    releaseDate:     Date;
    url:             string;
    summary:         string;
    fullReleaseDate: End;
    website:         string;
}

export interface Skill {
    name:              string;
    level:             string;
    keywords:          any[];
    rating:            number;
    yearsOfExperience: number;
}

export interface Volunteer {
    organization: string;
    position:     string;
    url:          string;
    startDate:    Date;
    endDate:      Date;
    summary:      string;
    highlights:   any[];
    location:     string;
    start:        FullDate;
    end:          FullDate;
    website:      string;
}

export interface Work {
    name:          string;
    location:      string;
    description:   string;
    position:      string;
    url:           string;
    startDate:     Date;
    endDate:       string;
    summary:       string;
    highlights:    string[];
    isCurrentRole: boolean;
    start:         FullDate;
    end:           FullDate;
    company:       string;
    website:       string;
}