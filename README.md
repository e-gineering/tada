# Tada :tada:

Mobile app that reads the birthdays of your contacts and can automatically send a text message to him/her on their special day.
It doesn't need Internet access, only access to your contacts and the ability to send SMS messages.
You can schedule a time to send those messages out, so once a day a service runs to do so. Or, you can manually send a message from within the app.

### Dev Environment Setup
You'll need the following tools installed to develop and run this application:

#### Mac
* XCode
* XCode Command Line Tools

#### All Platforms
* Android Studio - to run an Android simulator
  * Virtual Device 
* node & npm
* expo
  * `npm install --global expo-cli` 

### Running
1. Clone repo
2. Install dependencies: `npm install`
3. On iOS Simulator: `npm run ios`
4. On Android Simulator: `npm run android`