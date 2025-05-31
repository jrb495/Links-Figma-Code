# Links Figma Code - Mobile App

A React Native mobile application built with Expo.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npx expo start
```

3. Run on iOS simulator:
```bash
npx expo run:ios
```

4. Run on Android emulator:
```bash
npx expo run:android
```

## Project Structure

```
src/
  ├── screens/         # Screen components
  ├── components/      # Reusable components
  │   └── ui/         # UI components
  ├── utils/          # Utility functions
  ├── hooks/          # Custom React hooks
  └── types/          # TypeScript type definitions
```

## Development

- Uses React Native with Expo
- TypeScript for type safety
- NativeWind for styling
- React Navigation for routing

## Building for Production

1. Build for iOS:
```bash
eas build --platform ios
```

2. Build for Android:
```bash
eas build --platform android
```

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## License

MIT

## 🧠 About the Product

**Links** lets golfers:
- Log rounds and tag courses (Public, Private, Muni, $$, etc.)
- Compare two courses head-to-head
- Build a personal "Top 5"
- See where friends have played and what they liked

## 🔧 Project Setup

This repo was initialized with raw code from Figma Make. It may include:
- Unused classes or components
- Redundant styles or layout bugs
- HTML with placeholder text or inconsistent structure

You'll use this as a foundation to:
- Debug UI issues
- Simplify structure
- Migrate to real mobile code if needed

## 🧰 Next Steps

1. Clone the repo locally
2. Use Codex / Cursor / GPT-4 to:
   - Debug layout screen-by-screen
   - Optimize structure
   - Clean unused code
3. Optionally convert into SwiftUI or React Native screen-by-screen

## 🧪 Live Tools to Use

- [Codex (Cursor)](https://www.cursor.sh/)
- [ChatGPT Code Interpreter](https://chat.openai.com/)
- [Figma Make](https://www.figma.com/make/)
- [GitHub Copilot Labs](https://github.com/github/copilot)

---
