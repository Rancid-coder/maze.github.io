export interface ProjectsItem {
  id: string;
  image: string;
  name: string;
  institution: string;
  period: string;
  description: string;
  url: string;
}

export const projectsItems: ProjectsItem[] = [
  {
    id: "smartwatch",
    image: "images/wearable.png",
    name: "Balvia Ecosystems Wearable Application",
    institution: "Balvia Ecosystems",
    period: "Nov, 2024 - Dec, 2025",
    description:
      "The Balvia Ecosystems wearable application extends the comprehensive digital health experience to smartwatch platforms, providing users with immediate access to wellness management directly from their wrist. Designed specifically for wearable devices, the app delivers essential health tracking and medication reminders, all optimized for the compact interface and on-the-go nature of smartwatch usage. I designed and implemented the whole user experience for this wearable application from the ground up, taking into account the opportunities and limitations of wearable technology. Redesigning the health management interface for much smaller screens while preserving easy-to-use navigation and quick information displays for on-the-go use was the main difficulty. The application ensures smooth data synchronization across all user devices by connecting to the Spring Boot backend architecture that was already set up for the mobile ecosystem. Health information, prescription regimens, and user preferences may all be accessed from a smartwatch or phone thanks to this connectivity. The implementation of this application produced a wearable experience that was both responsive and effective.",
    url: "",
  },
  {
    id: "mobile",
    image: "images/mobile.png",
    name: "Balvia Ecosystems Mobile Application",
    institution: "Balvia Ecosystems",
    period: "Apr, 2025 - Dec, 2025",
    description:
      "The Balvia Ecosystems mobile application represents a comprehensive digital solution designed to enhance user wellness and health management. Built with modern technologies and a user-centric approach, the app delivers a seamless experience for tracking daily health activities, managing medication schedules, and promoting the overall user's health. Flutter was used for the application's development because of its strong cross-platform features, which guarantee reliable performance on both iOS and Android devices. I joined the project after a colleague established the initial architecture and foundational structure. Taking over the development, I led the application through several iterations, expanding its functionality and refining the user experience to better serve the wellness needs of users. The backend infrastructure was architected by another colleague using Spring Boot, creating a robust and scalable server-side foundation. While the backend was primarily his domain, I contributed to its evolution by implementing additional entities when it was necessary. This collaboration between frontend and backend development ensured a cohesive and well-integrated final product.",
    url: "",
  },
  {
    id: "web",
    image: "images/web.png",
    name: "Balvia Ecosystems Web Application",
    institution: "Balvia Ecosystems",
    period: "Jun, 2025 - Dec, 2025",
    description:
      "The Balvia Ecosystems web application is the official online presence of Balvia Ecosystems, a Portuguese health-tech company dedicated to creating integrated digital solutions for medication administration and assistance for independent living. In order to make medication routines safer and easier, particularly for older persons and their caretakers, the company develops an ecosystem of technologies, such as intelligent pill dispenser, smartwatch and smartphone applications. Built using Flutter, the website is designed to be responsive and performant across devices, showcasing Balvia’s brand with modern UI patterns. Its development follows a modular architecture, keeping the content and layout structure clean, scalable, and easy to maintain — which supports efficient updates and future expansions of the site as the product ecosystem grows.",
    url: "https://balviaecosystems.com/",
  },
];
