# CalorAI Taste Profile

A beautifully designed, fluid React Native application built to discover your unique culinary preferences. Users can swipe through carefully curated dishes using a Tinder-like gesture interface to generate a personalized Taste Profile.

Built as a technical assessment focusing on **Clean Architecture**, **Responsive UI**, and **High-Performance Animations**.

## 📱 Features

- **Tinder-like Swiping Interface**: Extremely fluid, 60fps card swiping interactions powered by `react-native-reanimated` and `react-native-gesture-handler`.
- **Glassmorphism Aesthetic**: A stunning, modern UI using frosted glass containers (`expo-blur`) over rich, dynamic gradients (`expo-linear-gradient`).
- **State Management**: Lightweight and efficient global state handling using the **React Context API**, tracking user "likes" and "dislikes" across the app.
- **Haptic Feedback**: Subdued device vibrations provide tactile feedback during swipe events.
- **Clean Architecture**: Highly modular structure with distinct layers for routing, state, theme tokens, data models, and domain-specific UI components.
- **Strictly Typed**: Written 100% in TypeScript to prevent runtime errors.

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) / [Expo SDK 54+](https://expo.dev/)
- **Navigation**: [React Navigation 7](https://reactnavigation.org/)
- **Animations & Gestures**: 
  - `react-native-reanimated` (v3)
  - `react-native-gesture-handler`
- **UI Libraries**: 
  - `expo-blur`
  - `expo-linear-gradient`
  - `expo-haptics`
  - `react-native-svg`

## 📂 Architecture & Folder Structure

```text
src/
├── assets/          # Static files (fonts, images, SVGs)
├── components/      # Reusable UI elements
│   ├── common/      # Generic elements (Buttons, GlassContainers, AppText)
│   └── domain/      # Feature-specific elements (SwipeCards)
├── constants/       # App-wide constants (layouts, string configs)
├── context/         # React Context API (TasteProfile state)
├── data/            # Mock dataset simulating an API payload
├── hooks/           # Custom React hooks containing isolated business/animation logic
├── navigation/      # React Navigation setup and route types
├── screens/         # Top-level container components (Intro, Swipe, Results)
├── theme/           # Centralized design tokens (Colors, Spacing, Typography)
└── types/           # Global TypeScript models (Food, Cuisine interfaces)
```

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed, along with either the **Expo Go** app on your physical device, or an iOS Simulator / Android Emulator running on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hukshh/calorAi.git
   cd calorAi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Expo development server:**
   ```bash
   npx expo start
   ```

### Running the App
- Press `i` in the terminal to open in the iOS Simulator.
- Press `a` in the terminal to open in the Android Emulator.
- Scan the QR code with the **Expo Go** app on your physical device.

## 🎨 Design System

This app utilizes a centralized design token system. To modify the app's overall look and feel, you only need to adjust the values inside the `src/theme/` directory.

- **`colors.ts`**: Manages the dark mode background, primary green accents, and transparent glassmorphism rgba values.
- **`typography.ts`**: Maintains font scale hierarchies (`h1`, `h2`, `body`, `caption`) to prevent inline font sizing.
- **`spacing.ts`**: Ensures consistent padding and margins scaling across different device sizes.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
