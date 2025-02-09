export interface ContactInfo {
    name: string;
    title: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    location: string;
    profilePhotoUrl: string;
    urlExternas: ExternalUrl[];
}

export interface ExternalUrl {
    iconClass: string;
    url: string;
}

export interface About {
    title: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    description: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
}

export interface Technologies {
    title: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    list: Technology[];
}

export interface Technology {
    name: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    iconClass: string;
}

export interface Experience {
    title: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    list: ExperienceDetail[];
}

export interface ExperienceDetail {
    company: string;
    position: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    start: Date;
    end: Date;
    description: {
        en: string[];
        es: string[];
        it: string[];
        fr: string[];
        pt: string[];
    };
}

export interface Projects {
    title: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    list: ProjectDetails[];
}

export interface ProjectDetails {
    title: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    description: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    link: string;
}

export interface Education {
    title: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    list: EducationDetail[];
}

export interface EducationDetail {
    institution: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    degree: {
        en: string;
        es: string;
        it: string;
        fr: string;
        pt: string;

    };
    start: Date;
    end: Date;
}

export interface Metadata {
    id: string;
    private: boolean;
    createdAt: string;
}

export interface Result {
    id: string;
    data: {
        contactInfo: ContactInfo;
        about: About;
        technologies: Technologies;
        experience: Experience;
        projects: Projects;
        education: Education;
    };
}

export interface RootObject {
    record: Result[];
    metadata: Metadata;
}