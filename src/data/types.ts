export interface AppFeature {
  icon: string;
  title: string;
  description: string;
}

export interface AppFAQ {
  question: string;
  answer: string;
}

export interface AppPrivacy {
  lastUpdated: string;
  sections: {
    title: string;
    badge?: string;
    content: string;
  }[];
}

export interface AppSupport {
  intro: string;
  faq: AppFAQ[];
  troubleshooting?: {
    title: string;
    steps: string[];
  }[];
}

export interface AppData {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  screenshots: string[];
  appStoreUrl: string;
  status: "live" | "coming" | "dev";
  featured: boolean;
  category?: string;
  features: AppFeature[];
  faq?: AppFAQ[];
  privacy: AppPrivacy;
  support: AppSupport;
}
