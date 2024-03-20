**Expo Black Bar reproducible example**
For this bug to occur, you need three things:

1. React Native Expo project (seemingly any version)
2. Android device with notch or punch hole camera
3. The StatusBar hidden prop to be set to true. This is the case with both the react native StatusBar element and the expo-status-bar. The result is the same.
