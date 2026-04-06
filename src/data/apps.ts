import { AppData } from "./types";

export const apps: AppData[] = [
  {
    slug: "till",
    name: "Till.",
    subtitle: "Countdown & Live Activities for iPhone",
    description:
      "Your all-in-one countdown and Live Activity companion for iPhone. Track what matters most — right from your Dynamic Island and Lock Screen.",
    icon: "/images/apps/till/icon.png",
    screenshots: [],
    appStoreUrl: "https://apps.apple.com/app/till/id6742490007",
    status: "live",
    featured: true,
    category: "Utilities",
    features: [
      {
        icon: "⏱",
        title: "Countdown Timers",
        description:
          "Create beautiful countdowns for any event and track them live on your Dynamic Island.",
      },
      {
        icon: "🕌",
        title: "Prayer Times",
        description:
          "Accurate prayer times based on your location, displayed right on your Lock Screen.",
      },
      {
        icon: "🧭",
        title: "Qibla Compass",
        description:
          "Real-time Qibla direction using your device compass and location.",
      },
      {
        icon: "⚽",
        title: "Football Teams",
        description:
          "Track your favorite teams with custom logos and colors on the Dynamic Island.",
      },
      {
        icon: "🔔",
        title: "Reminders",
        description:
          "Set reminders and see them as Live Activities so you never miss what matters.",
      },
      {
        icon: "💑",
        title: "Couple Tracker",
        description:
          "Track your relationship milestones with a beautiful couple countdown.",
      },
      {
        icon: "🏝️",
        title: "Custom Dynamic Island",
        description:
          "Fully customize what appears on your Dynamic Island with your own content.",
      },
      {
        icon: "📊",
        title: "Multi-Slot Display",
        description:
          "Run up to 5 simultaneous Live Activities for different trackers.",
      },
    ],
    privacy: {
      lastUpdated: "March 12, 2026",
      sections: [
        {
          title: "Your Privacy Matters",
          badge: "Overview",
          content:
            "Till. is designed with privacy at its core. We do not collect, store, or transmit any personal data to our servers. All your data stays on your device.",
        },
        {
          title: "1. Information We Collect",
          content:
            'Till. does <strong>not</strong> collect personal information. The app may access the following device features only when you explicitly grant permission:<ul><li><strong>Location (When In Use)</strong> — Used solely to fetch accurate prayer times based on your geographic coordinates and to determine Qibla direction. Your location is sent directly to the Aladhan prayer times API and is never stored on our servers.</li><li><strong>Photo Library</strong> — Used only when you choose to upload a custom team logo or couple photo for the Dynamic Island display. Photos are processed locally on your device and are never uploaded anywhere.</li><li><strong>Motion &amp; Compass</strong> — Used to power the Qibla compass feature. Sensor data is processed in real-time on your device and is never recorded or transmitted.</li></ul>',
        },
        {
          title: "2. Live Activities & Dynamic Island",
          content:
            "Till. uses Apple's ActivityKit to display countdown timers, prayer times, reminders, and custom information on the Lock Screen and Dynamic Island. All Live Activity data is processed and rendered entirely on your device by iOS. No data is sent to external servers for this feature.",
        },
        {
          title: "3. Advertising",
          content:
            'Till. displays ads provided by <strong>Google AdMob</strong>. AdMob may collect certain device and usage data to serve relevant advertisements. This data collection is governed by Google\'s privacy policy.<ul><li>We use Apple\'s App Tracking Transparency (ATT) framework. You will be asked for permission before any tracking occurs.</li><li>If you decline tracking, you will still see ads, but they will not be personalized.</li><li>For more information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google\'s Privacy Policy</a>.</li></ul>',
        },
        {
          title: "4. Data Storage",
          content:
            "All app settings, reminders, couple dates, football team configurations, and preferences are stored locally on your device using iOS standard storage mechanisms (UserDefaults and App Group containers). We do not operate any backend servers or cloud databases.",
        },
        {
          title: "5. Third-Party Services",
          content:
            '<ul><li><strong>Aladhan API</strong> — Prayer times are fetched from <a href="https://aladhan.com/prayer-times-api" target="_blank" rel="noopener">aladhan.com</a>. Only your latitude and longitude are sent to calculate prayer times. No personal identifiers are transmitted.</li><li><strong>Google AdMob</strong> — Used for displaying advertisements. See section 3 above.</li><li><strong>Apple StoreKit</strong> — Used for in-app purchases. Transactions are handled entirely by Apple.</li></ul>',
        },
        {
          title: "6. Children's Privacy",
          content:
            "Till. is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information through the app, please contact us so we can take appropriate action.",
        },
        {
          title: "7. Data Retention & Deletion",
          content:
            "Since all data is stored locally on your device, you have full control. You can delete all app data at any time by uninstalling Till. from your device. No residual data remains on any server.",
        },
        {
          title: "8. Changes to This Policy",
          content:
            'We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last Updated" date. Continued use of the app after changes constitutes acceptance of the revised policy.',
        },
        {
          title: "9. Contact Us",
          content:
            'If you have any questions or concerns about this Privacy Policy, please contact us at:<br/><strong>Email:</strong> <a href="mailto:mesutcydev@gmail.com">mesutcydev@gmail.com</a>',
        },
      ],
    },
    support: {
      intro:
        "Need help with Till.? Browse the FAQ below or reach out directly — we usually respond within 24 hours.",
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
            'Go to Settings → Till. → Live Activities → enable "Allow Live Activities"',
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
      ],
    },
  },
];

export function getAppBySlug(slug: string): AppData | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getFeaturedApps(): AppData[] {
  return apps.filter((app) => app.featured);
}

export function getAllAppSlugs(): string[] {
  return apps.map((app) => app.slug);
}
