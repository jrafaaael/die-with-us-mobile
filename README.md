# die-with-us
**DISCLAIMER:** this app will not be monetized or even published to any app store. This repo is for educational-only purposes.

`die-with-us` is a educational-only clone of [Die With Me](https://diewithme.online/) app built by [Dries Depoorter](https://driesdepoorter.be/) and [David Surprenant](https://davidsurprenant.com/). The idea behind this repo is try new stuff (like `expo-dev-client`, `eas`, native modules and other backend technologies).

## Folder structure
This repo is a [yarn workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/) (as recommended in [Expo docs](https://docs.expo.dev/guides/monorepos)). All the source code lives in the `apps` folder.

```
├── apps/
│   ├── api/            # nodejs nestjs backend
│   ├── mobile/         # react-native + expo mobile app
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
 yarn install
```
3. Create a development build to run the app on emulator/simulator or physical device (Android only)
```
yarn workspace die-with-us-mobile run build:dev:android         # for both android emulator and physical device
```
or
```
yarn workspace die-with-us-mobile run build:dev:ios:simulator   # for ios simulator only
```
4. Run development commands in separate terminals
```
yarn run mobile:dev
```
```
yarn run api:dev
```

## TODO
- [ ] better handling of Expo env vars
- [ ] message reactions (maybe)
- [ ] message replies (maybe)
