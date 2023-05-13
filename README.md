# die-with-us
**DISCLAIMER:** this app will not be monetized or even published to any app store. This repo is for educational-only purposes.

`die-with-us` is a educational-only clone of [Die With Me](https://diewithme.online/) app built by [Dries Depoorter](https://driesdepoorter.be/) and [David Surprenant](https://davidsurprenant.com/). The idea behind this repo is try new stuff (like `expo-dev-client`, `eas`, native modules and other backend technologies).

## Folder structure
```
├── app/                                      # All app's screens
├── src/                                      # All source code
│   ├── shared-folders/                       # Shared components, utils, libs, etc across the project
│   └── screens/                              # All app's screens source code
│       └── screen-1/                         # Specific screen folder
│           └── screen-1-related-folders/     # Specific screen components, utils, libs, etc
```
## Requirements
- `nodejs ^18`
- [expo account](https://expo.dev/)
- [eas-cli](https://github.com/expo/eas-cli)
```
npm install -g eas-cli
eas login
```

## How to run locally
1. Clone this repo
2. Run installation command
```
 yarn install # or npm or pnpm
```
3. Create a development build to run the app on emulator/simulator or physical device (Android only)
```
yarn run build:dev:android         # for both android emulator and physical device
```
or
```
yarn run build:dev:ios:simulator   # for ios simulator only
```
4. Run development command
```
yarn start
```

## TODO
- [ ] better handling of Expo env vars
- [ ] message reactions (maybe)
- [ ] message replies (maybe)
