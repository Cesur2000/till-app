export interface App {
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
  features: { title: string; description: string; icon: string }[];
  faq?: { question: string; answer: string }[];
  privacyPolicy?: {
    lastUpdated: string;
    sections: { title: string; badge?: string; content: string }[];
  };
  support?: {
    intro: string;
    features?: { name: string; icon: string }[];
    faq?: { question: string; answer: string }[];
    troubleshooting?: { title: string; steps: string[] }[];
  };
}

const apps: App[] = [
  {
    slug: "till",
    name: "Till.",
    subtitle: "Countdown & Live Activities for iPhone",
    description:
      "Your all-in-one countdown and Live Activity companion for iPhone. Track what matters most — right from your Dynamic Island and Lock Screen.",
    icon: "/apps/till/icon.png",
    screenshots: [],
    appStoreUrl: "#",
    status: "live",
    featured: true,
    category: "Utilities",
    features: [
      {
        title: "Countdown Timers",
        description:
          "Create beautiful countdowns for birthdays, holidays, weddings, and any event that matters to you. See days, hours, minutes, and seconds remaining at a glance.",
        icon: "⏳",
      },
      {
        title: "Prayer Times",
        description:
          "Accurate daily prayer times based on your location. Never miss a prayer with timely notifications and Live Activity countdowns to the next prayer.",
        icon: "🕌",
      },
      {
        title: "Qibla Compass",
        description:
          "Find the Qibla direction from anywhere in the world with a precise, easy-to-read compass powered by your device's sensors.",
        icon: "🧭",
      },
      {
        title: "Football Teams",
        description:
          "Follow your favourite football teams and get live countdowns to upcoming matches. Stay connected to the beautiful game, right from your Lock Screen.",
        icon: "⚽",
      },
      {
        title: "Reminders",
        description:
          "Set quick reminders alongside your countdowns. Get notified at the right time so you never forget what matters.",
        icon: "🔔",
      },
      {
        title: "Couple Tracker",
        description:
          "Track the time since you and your partner have been together. Celebrate every moment with a live, always-updating counter on your Home Screen.",
        icon: "💑",
      },
      {
        title: "Custom Dynamic Island",
        description:
          "Bring your countdowns to life on the Dynamic Island. See real-time updates without ever opening the app — beautifully integrated into iOS.",
        icon: "🏝️",
      },
      {
        title: "Multi-Slot Display",
        description:
          "Run multiple Live Activities at once. Track several countdowns, prayer times, and match schedules simultaneously from your Lock Screen.",
        icon: "📱",
      },
    ],
    faq: [
      {
        question: "What is Till?",
        answer:
          "Till is an all-in-one countdown and Live Activity app for iPhone. It lets you track countdowns, prayer times, football matches, and more — right from your Dynamic Island and Lock Screen.",
      },
      {
        question: "How do I create a countdown?",
        answer:
          'Tap the "+" button on the home screen, choose your event type, set a title and date, then tap Save. Your countdown will appear on the main screen and can be added to your Lock Screen or Dynamic Island.',
      },
      {
        question: "How do Live Activities work?",
        answer:
          "Live Activities display real-time countdown information on your Lock Screen and Dynamic Island. To start one, tap the Live Activity button on any countdown. They update automatically and stay visible without opening the app. Requires iPhone 14 Pro or later for Dynamic Island.",
      },
      {
        question: "How do I add Till to my Lock Screen?",
        answer:
          "Long-press your Lock Screen, tap Customise, then tap the widget area. Search for Till and choose from available widgets including countdown timers, prayer times, and more. You can also start a Live Activity from inside the app for a richer Lock Screen experience.",
      },
      {
        question: "Is Till free to use?",
        answer:
          "Till is free to download with core countdown features included. Some premium features like unlimited Live Activities, football team tracking, and advanced customisation are available through an optional subscription.",
      },
      {
        question: "How do Prayer Times work?",
        answer:
          "Prayer times are calculated based on your current location using established astronomical calculation methods. You can choose your preferred calculation method in Settings. Notifications can be enabled for each prayer, and a Live Activity can count down to the next prayer time throughout the day.",
      },
      {
        question: "How does the Qibla Compass work?",
        answer:
          "The Qibla Compass uses your device's GPS and magnetometer to determine the direction of the Kaaba in Makkah from your current location. For best results, hold your phone flat and away from magnetic interference. Calibrate by moving your phone in a figure-8 motion if the compass seems inaccurate.",
      },
      {
        question: "Can I track multiple countdowns at the same time?",
        answer:
          "Yes! You can create as many countdowns as you like and run multiple Live Activities simultaneously. This lets you track several events, prayer times, and match schedules at the same time from your Lock Screen and Dynamic Island.",
      },
      {
        question: "How do I contact support?",
        answer:
          "You can reach us by email at mesutcydev@gmail.com. We typically respond within 24 hours. You can also visit the support page on our website for FAQs and troubleshooting guides.",
      },
    ],
    privacyPolicy: {
      lastUpdated: "March 12, 2026",
      sections: [
        {
          title: "Your Privacy Matters",
          badge: "Overview",
          content:
            "<p>Till. is designed with privacy at its core. We do not collect, store, or transmit any personal data to our servers. All your data stays on your device.</p>",
        },
        {
          title: "1. Information We Collect",
          content:
            '<p>Till. does <strong>not</strong> collect personal information. The app may access the following device features only when you explicitly grant permission:</p><ul><li><strong>Location (When In Use)</strong> — Used solely to fetch accurate prayer times based on your geographic coordinates and to determine Qibla direction. Your location is sent directly to the Aladhan prayer times API and is never stored on our servers.</li><li><strong>Photo Library</strong> — Used only when you choose to upload a custom team logo or couple photo for the Dynamic Island display. Photos are processed locally on your device and are never uploaded anywhere.</li><li><strong>Motion &amp; Compass</strong> — Used to power the Qibla compass feature. Sensor data is processed in real-time on your device and is never recorded or transmitted.</li></ul>',
        },
        {
          title: "2. Live Activities & Dynamic Island",
          content:
            "<p>Till. uses Apple's ActivityKit to display countdown timers, prayer times, reminders, and custom information on the Lock Screen and Dynamic Island. All Live Activity data is processed and rendered entirely on your device by iOS. No data is sent to external servers for this feature.</p>",
        },
        {
          title: "3. Advertising",
          content:
            '<p>Till. displays ads provided by <strong>Google AdMob</strong>. AdMob may collect certain device and usage data to serve relevant advertisements. This data collection is governed by Google\'s privacy policy.</p><ul><li>We use Apple\'s App Tracking Transparency (ATT) framework. You will be asked for permission before any tracking occurs.</li><li>If you decline tracking, you will still see ads, but they will not be personalized.</li><li>For more information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google\'s Privacy Policy</a>.</li></ul>',
        },
        {
          title: "4. Data Storage",
          content:
            "<p>All app settings, reminders, couple dates, football team configurations, and preferences are stored locally on your device using iOS standard storage mechanisms (UserDefaults and App Group containers). We do not operate any backend servers or cloud databases.</p>",
        },
        {
          title: "5. Third-Party Services",
          content:
            '<ul><li><strong>Aladhan API</strong> — Prayer times are fetched from <a href="https://aladhan.com/prayer-times-api" target="_blank" rel="noopener">aladhan.com</a>. Only your latitude and longitude are sent to calculate prayer times. No personal identifiers are transmitted.</li><li><strong>Google AdMob</strong> — Used for displaying advertisements. See section 3 above.</li><li><strong>Apple StoreKit</strong> — Used for in-app purchases. Transactions are handled entirely by Apple.</li></ul>',
        },
        {
          title: "6. Children's Privacy",
          content:
            "<p>Till. is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information through the app, please contact us so we can take appropriate action.</p>",
        },
        {
          title: "7. Data Retention & Deletion",
          content:
            "<p>Since all data is stored locally on your device, you have full control. You can delete all app data at any time by uninstalling Till. from your device. No residual data remains on any server.</p>",
        },
        {
          title: "8. Changes to This Policy",
          content:
            '<p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last Updated" date. Continued use of the app after changes constitutes acceptance of the revised policy.</p>',
        },
        {
          title: "9. Contact Us",
          content:
            '<p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p><p><strong>Email:</strong> <a href="mailto:mesutcydev@gmail.com">mesutcydev@gmail.com</a></p>',
        },
      ],
    },
    support: {
      intro:
        "Till. is your all-in-one countdown and Live Activity companion for iPhone. Track what matters most — right from your Dynamic Island and Lock Screen.",
      features: [
        { name: "Countdown Timers", icon: "⏱" },
        { name: "Prayer Times", icon: "🕌" },
        { name: "Qibla Compass", icon: "🧭" },
        { name: "Football Teams", icon: "⚽" },
        { name: "Reminders", icon: "🔔" },
        { name: "Couple Tracker", icon: "💑" },
        { name: "Custom Dynamic Island", icon: "🏝️" },
        { name: "Multi-Slot Display", icon: "📊" },
      ],
      faq: [
        {
          question: "How do I start a Live Activity?",
          answer:
            'Navigate to the feature you want (e.g. Prayer Times, Custom Island, Reminders), configure your settings, and tap the "Start Activity" button. The countdown will appear on your Dynamic Island and Lock Screen.',
        },
        {
          question: "Why doesn't the Dynamic Island show on my phone?",
          answer:
            "Dynamic Island is available on iPhone 14 Pro and later models. On older iPhones, Live Activities will still appear on the Lock Screen. Make sure Live Activities are enabled in Settings → Till.",
        },
        {
          question: "How do I add my own football team logo?",
          answer:
            'Go to Custom Island → Football Teams → tap a team card or "+" to add a new team. You can pick a logo from your Photo Library, set team colors, and enter the team name and short code.',
        },
        {
          question: "Prayer times are not accurate for my location.",
          answer:
            'Make sure location access is granted (Settings → Till. → Location → "While Using"). Also try the "Use Current Location" button to refresh. Till. uses the Aladhan API with the Diyanet (Turkey) calculation method by default.',
        },
        {
          question: "Can I run multiple Live Activities at once?",
          answer:
            "iOS supports up to 5 simultaneous Live Activities. You can run a Prayer Times activity alongside a Custom Island activity, for example.",
        },
        {
          question: "The Qibla compass is not working.",
          answer:
            "Ensure you have granted location and motion permissions. Also, keep your device away from magnets and metal objects that can interfere with the compass sensor. Try calibrating by moving your phone in a figure-8 pattern.",
        },
        {
          question: "How do I restore my purchases?",
          answer:
            'Go to the app\'s settings or premium section and tap "Restore Purchases". Your previous purchases will be restored automatically through your Apple ID.',
        },
        {
          question: "My settings reset after closing the app.",
          answer:
            "Till. automatically saves your Custom Island configuration. If settings appear to reset, try force-quitting and reopening the app. If the issue persists, contact support.",
        },
        {
          question: "How do I stop a Live Activity?",
          answer:
            'Open Till., go to the active feature tab, and tap "Stop Activity". You can also long-press the Live Activity on your Lock Screen and tap "End Activity".',
        },
      ],
      troubleshooting: [
        {
          title: "Live Activity not appearing",
          steps: [
            "Go to Settings → Till. → Live Activities → enable \"Allow Live Activities\"",
            "Make sure you're running iOS 16.1 or later",
            "Restart the app and try starting the activity again",
          ],
        },
        {
          title: "Location not working",
          steps: [
            "Go to Settings → Privacy & Security → Location Services → Till.",
            'Select "While Using the App"',
            "Return to Till. and refresh",
          ],
        },
        {
          title: "Ads not loading",
          steps: [
            "Ad availability depends on your region and network connection.",
            "This does not affect app functionality.",
            "Consider upgrading to Premium to remove ads entirely.",
          ],
        },
      ],
    },
  },
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getFeaturedApps(): App[] {
  return apps.filter((app) => app.featured);
}

export function getAllApps(): App[] {
  return apps;
}
