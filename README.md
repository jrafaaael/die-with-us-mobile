# die-with-us
**DISCLAIMER:** this app will not be monetized or even published to any app store. This repo is for educational-only purposes.

`die-with-us` is a educational-only clone of [Die With Me](https://diewithme.online/) app built by [Dries Depoorter](https://driesdepoorter.be/) and [David Surprenant](https://davidsurprenant.com/). The idea behind this repo is try new stuff (like `expo-dev-client`, `eas`, native modules and some cool backend technologies).

<div>
 <img style="height: auto; width: 24%;" src="https://github.com/jrafaaael/die-with-us-mobile/assets/70046023/99ddb5ae-3725-4cb1-8aae-e3c6d2e22a3e" />
 <img style="height: auto; width: 24%;" src="https://github.com/jrafaaael/die-with-us-mobile/assets/70046023/a0293793-82e8-4ce2-b42e-8b9f32af645d" />
 <img style="height: auto; width: 24%;" src="https://github.com/jrafaaael/die-with-us-mobile/assets/70046023/28c9d577-59fb-4f79-a3b9-cc38458edab0" />
 <img style="height: auto; width: 24%;" src="https://github.com/jrafaaael/die-with-us-mobile/assets/70046023/a254bd12-43c6-41c1-b8ca-cae5e2c68e17" />
</div>

## Backend
- [nodejs + nestjs](https://github.com/jrafaaael/die-with-us-nest)

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
3. Copy `.env.example` and rename it with stage sufix
```
cp .env.example .env.development # or .env.preview or .env.production
```
4. Add correct values in `.env.*` file
5. Create a development build to run the app on emulator/simulator or physical device (Android only)
```
yarn run build:dev:android         # for both android emulator and physical device
```
or
```
yarn run build:dev:ios:simulator   # for ios simulator only
```
6. Run development command
```
yarn start
```

## TODO
- [x] better handling of Expo env vars
- [ ] message reactions (maybe)
- [ ] message replies (maybe)
