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
      lastUpdated: "2025-01-01",
      sections: [
        {
          title: "Introduction",
          content:
            '<p>Welcome to Till ("<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>"). We are committed to protecting your privacy and ensuring you have a positive experience when using our app. This Privacy Policy explains how we collect, use, and safeguard your information when you use Till.</p><p>By using Till, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not use the app.</p>',
        },
        {
          title: "Information We Collect",
          badge: "Minimal Data",
          content:
            "<p>Till is designed with privacy in mind. We collect the minimum amount of data necessary to provide you with a great experience:</p><ul><li><strong>Location Data:</strong> Used locally on your device to calculate prayer times and Qibla direction. Your location is never sent to our servers or shared with third parties.</li><li><strong>Device Sensors:</strong> The magnetometer (compass) is accessed locally to provide Qibla direction. This data stays on your device.</li><li><strong>User Preferences:</strong> Your countdown events, settings, and preferences are stored locally on your device and synced via iCloud if enabled.</li><li><strong>Usage Analytics:</strong> We may collect anonymous, aggregated usage data to help us improve the app. This data cannot be used to identify you personally.</li></ul>",
        },
        {
          title: "How We Use Your Information",
          content:
            "<p>The information we access is used solely to provide and improve the app's functionality:</p><ul><li><strong>Prayer Times:</strong> Your location is used on-device to calculate accurate prayer times for your area.</li><li><strong>Qibla Direction:</strong> Your location and device compass are used on-device to determine the direction of the Kaaba.</li><li><strong>Countdowns &amp; Reminders:</strong> Your event data is stored locally to power countdown timers, reminders, and Live Activities.</li><li><strong>Football Schedules:</strong> Match data is fetched from third-party sports APIs to display upcoming fixtures for your selected teams.</li><li><strong>App Improvement:</strong> Anonymous analytics help us understand which features are most popular and identify areas for improvement.</li></ul>",
        },
        {
          title: "Data Storage & Security",
          badge: "On-Device",
          content:
            "<p>Your personal data — including countdowns, prayer time settings, and preferences — is stored locally on your device. If you have iCloud enabled, some data may be synced across your Apple devices via iCloud, which is governed by <a href=\"https://www.apple.com/legal/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Apple's Privacy Policy</a>.</p><p>We do not operate our own servers to store your personal data. We implement appropriate technical measures to protect the data processed within the app.</p>",
        },
        {
          title: "Third-Party Services",
          content:
            '<p>Till may use the following third-party services:</p><ul><li><strong>Apple Services:</strong> iCloud for data sync, StoreKit for in-app purchases, and WidgetKit/ActivityKit for widgets and Live Activities. These are governed by <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple\'s Privacy Policy</a>.</li><li><strong>Sports Data Providers:</strong> We fetch publicly available football fixture data from third-party APIs. No personal data is shared with these providers.</li><li><strong>RevenueCat:</strong> Used to manage subscriptions and in-app purchases. RevenueCat may collect anonymous purchase data. See <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat\'s Privacy Policy</a>.</li></ul><p>We do not sell, trade, or rent your personal information to third parties.</p>',
        },
        {
          title: "Notifications & Background Activity",
          content:
            "<p>Till may send local notifications for countdown events, prayer times, and reminders. These notifications are scheduled locally on your device and do not require a server connection.</p><p>Live Activities and Dynamic Island updates run in the background using Apple's ActivityKit framework. No personal data leaves your device during these updates.</p><p>You can manage notification permissions at any time in your device's Settings app under Till.</p>",
        },
        {
          title: "Children's Privacy",
          content:
            "<p>Till is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href=\"mailto:mesutcydev@gmail.com\">mesutcydev@gmail.com</a> so we can take appropriate action.</p>",
        },
        {
          title: "Your Rights",
          content:
            '<p>Depending on your jurisdiction, you may have the following rights regarding your data:</p><ul><li><strong>Access:</strong> Request information about the data we process.</li><li><strong>Deletion:</strong> Since your data is stored locally, you can delete it by removing the app or clearing app data in Settings.</li><li><strong>Opt-Out:</strong> You can disable analytics and notifications at any time in the app\'s settings.</li><li><strong>Data Portability:</strong> Your data is stored in standard formats within your iCloud account and on your device.</li></ul><p>To exercise any of these rights, please contact us at <a href="mailto:mesutcydev@gmail.com">mesutcydev@gmail.com</a>.</p>',
        },
        {
          title: "Changes to This Privacy Policy",
          content:
            '<p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p><p>Continued use of the app after any changes to this Privacy Policy constitutes your acceptance of those changes.</p>',
        },
        {
          title: "Contact Us",
          content:
            '<p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p><ul><li><strong>Email:</strong> <a href="mailto:mesutcydev@gmail.com">mesutcydev@gmail.com</a></li><li><strong>Website:</strong> <a href="https://mesut.uk" target="_blank" rel="noopener noreferrer">mesut.uk</a></li></ul><p>We will respond to your enquiry within 30 days.</p>',
        },
      ],
    },
    support: {
      intro:
        "Need help with Till? Browse the features below, check our FAQ, or follow the troubleshooting steps to resolve common issues.",
      features: [
        { name: "Countdown Timers", icon: "⏳" },
        { name: "Prayer Times", icon: "🕌" },
        { name: "Qibla Compass", icon: "🧭" },
        { name: "Football Teams", icon: "⚽" },
        { name: "Reminders", icon: "🔔" },
        { name: "Couple Tracker", icon: "💑" },
        { name: "Dynamic Island", icon: "🏝️" },
        { name: "Multi-Slot Display", icon: "📱" },
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
            "Long-press your Lock Screen, tap Customise, then tap the widget area. Search for Till and choose from available widgets including countdown timers, prayer times, and more.",
        },
        {
          question: "Is Till free to use?",
          answer:
            "Till is free to download with core countdown features included. Some premium features like unlimited Live Activities, football team tracking, and advanced customisation are available through an optional subscription.",
        },
        {
          question: "How do Prayer Times work?",
          answer:
            "Prayer times are calculated based on your current location using established astronomical calculation methods. You can choose your preferred calculation method in Settings.",
        },
        {
          question: "How does the Qibla Compass work?",
          answer:
            "The Qibla Compass uses your device's GPS and magnetometer to determine the direction of the Kaaba in Makkah from your current location. Hold your phone flat for best results.",
        },
        {
          question: "Can I track multiple countdowns at the same time?",
          answer:
            "Yes! You can create as many countdowns as you like and run multiple Live Activities simultaneously from your Lock Screen and Dynamic Island.",
        },
        {
          question: "How do I contact support?",
          answer:
            "You can reach us by email at mesutcydev@gmail.com. We typically respond within 24 hours.",
        },
      ],
      troubleshooting: [
        {
          title: "Live Activities not appearing",
          steps: [
            "Open Settings → Till and ensure Live Activities are enabled.",
            "Check that you are running iOS 16.1 or later.",
            "Go to Settings → General → Background App Refresh and make sure Till is enabled.",
            "Restart the app and try starting the Live Activity again.",
            "If the issue persists, restart your iPhone.",
          ],
        },
        {
          title: "Prayer Times seem inaccurate",
          steps: [
            "Open Settings → Privacy & Security → Location Services and ensure Till has location access set to 'While Using' or 'Always'.",
            "Open Till → Settings and verify the correct calculation method is selected for your region.",
            "Make sure your device's date and time are set to automatic (Settings → General → Date & Time).",
            "Force-close Till and reopen it to refresh prayer time calculations.",
          ],
        },
        {
          title: "Qibla Compass not working correctly",
          steps: [
            "Ensure Location Services are enabled for Till.",
            "Calibrate your compass by moving your phone in a figure-8 motion.",
            "Move away from magnetic interference such as electronics, magnets, or metal objects.",
            "Remove any magnetic phone case or accessory.",
            "If the compass still seems off, restart your device and try again.",
          ],
        },
        {
          title: "Widgets not updating",
          steps: [
            "Remove the widget from your Home Screen or Lock Screen and add it again.",
            "Check that Background App Refresh is enabled for Till in Settings.",
            "Ensure the app has not been force-closed, as this can delay widget updates.",
            "Restart your iPhone if widgets remain stuck.",
          ],
        },
        {
          title: "Notifications not received",
          steps: [
            "Go to Settings → Notifications → Till and ensure notifications are allowed.",
            "Check that the notification type you expect (banners, sounds, badges) is enabled.",
            "Make sure Do Not Disturb or a Focus mode is not silencing Till's notifications.",
            "Open the app and verify that notifications are enabled for the specific countdown or prayer time.",
            "Restart your device if the issue continues.",
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
