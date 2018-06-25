# Ionic - Hybrid Application framework

Ionic is a hybrid application framework based on Angular framework. It is easy to use and flexible solution for quick development of apps which don't require native apps.

## Ionic Setup

We assume you have latest version of NPM with you :

To install ionic you will need to run

```bash

npm install -g ionic
```

This will install ionic with all dependencies on your system, you can check after installation whether your CMD or terminal is working with - `ionic -v` command

## Creating first Ionic App

To create your first ionic app, type the following command in your command prompt /terminal:

```bash

ionic start <yourAppName> <template>

```

where `<yourAppName>` is replaced by Name of your app and `<template>` can be any of `blank`, `tabs`, `sidemenu` and other available options. These templates will create a sample application for you as mentioned in `<template>`.

After you run this command, change directory to the newly created project using `cd <yourAppName>`

After this you can run your app :

```bash

ionic serve

```

This will start the Live server and you can run your app on browser.

## Testing app on device

1. Using DevApp : You can download Ionic DevApp from Play Store or IOS app store. This app will directly pick your local application running on port 8100 and show it in your mobile. To make this work - make sure you have - all this things set :

* Your mobile and system should be on same Wifi network.
* You should make an Ionic Account on their site and use same login on Phone - Ionic DevApp
* Provide any necessary permission after the app installation.

DevApp is very fast and it has a live reload feature - so whenever you are making applications on your system. You can directly check it on DevApp without doing anything.

2. Using Native SDK: 

You can install the Native Android SDK to build app in your android device. 

Make sure :

1. To set JAVA_HOME correctly
2. To set ANDROID_HOME correctly
3. Upgrading to latest SDK
4. Connection your Android Device to your System via USB
5. Enable Developer Mode on Android Phone - enable USB debugging option.
6. Provide necessary permission to your system to connect to phone (Media permission or higher)
7. Make sure `cordova` is setup. Use the following command to setup Cordova.

```bash
npm install -g cordova

```

Finally run your native SDK build command :

```bash

ionic cordova run android
```

This should create a new APK and install it on your device.

## Ionic App Code Structure

Ionic Frameworks can be divided into few sections :

### UI components

Ionic apps are made of high-level building blocks called components. Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.  [Read More](https://ionicframework.com/docs/components/#overview)

Few Important ones are :

* Action Sheets
* Alerts
* Buttons
* Cards
* Checkbox
* FABs
* Grid
* Inputs
* Lists
* Loading
* Menus
* Modals
* Navigation
* Radio
* Range
* Searchbar
* Segment
* Select
* Slides
* Tabs
* Toggle

### Component APIs and Services APIs

The Component APIs include classes like Checkbox, Toggle or Item and show you how to use them, in addition to listing their selectors(UI designs), available properties and events.

The Service APIs are classes like NavController, MenuController, Config or Platform. These are services provided by Ionic that can be injected into your classes.

Checkout there [full documentation here](https://ionicframework.com/docs/api/)

Some Important ones are:

* ActionSheetController (Service)
* App
* Button
* Checkbox
* Content
* Footer
* Grid
* Header
* HideWhen
* Icon
* Img
* InfiniteScroll
* Input
* Item
* Keyboard
* List
* LoadingController
* Menu
* MenuClose
* MenuController (Service)
* MenuToggle
* ModalController (Service)
* Nav
* Navbar
* NavController (Service)
* NavParams
* RadioButton
* RadioGroup
* Range
* Row
* Scroll
* Searchbar
* Select
* Slides
* Spinner
* Tab
* Tabs

### Ionic Native API

Ionic Native is a TypeScript wrapper for Cordova/PhoneGap plugins that make adding any native functionality you need to your Ionic mobile app easy. This will let you use all smartphone features and capabilities from your JS code.

Some Important ones are :

* Action Sheet
* Background Geolocation
* Barcode Scanner
* Battery Status
* Calendar
* Call Directory
* Call Log
* Camera
* Contacts
* Device Motion
* Device Orientation
* Facebook
* FCM
* File
* File Chooser
* Firebase
* Flashlight
* Geolocation
* Google Maps
* Google Nearby
* HTTP
* Launch Navigator
* Local Notifications
* Location Accuracy
* Screenshot
* SMS
* Social Sharing
* Speech Recognition
* Splash Screen
* SQLite
* Text To Speech
* Vibration
* Youtube Video Player
* Zip

## Ionic CLI Commands

Many of Ionic architectural parts can be created via easy CLI commands. You can [Read Here](https://ionicframework.com/docs/cli/commands.html) for more information :

An example of various kind of `ionic generate` commands is :* ionic generate

* ionic generate component
* ionic generate directive
* ionic generate page
* ionic generate pipe
* ionic generate provider
* ionic generate tabs
* ionic generate component foo
* ionic generate page Login
* ionic generate page Detail --no-module
* ionic generate page About --constants
* ionic generate pipe MyFilterPipe

You can also checkout `cordova run` commands [Here](https://ionicframework.com/docs/cli/cordova/run/) which can be quiet useful while build Native Apps.


## How to install Native API plugins in your App

This issue has been discussed earlier but I am summarizing the steps to be followed while installing a native plugin.

1. Install the Plugin using given commands.

Install the Ionic Native package for each plugin you want to add.

For example, if you want to install the Camera plugin, you will need to run the following command:

```bash

npm install @ionic-native/camera --save

```

Then install the plugin using Cordova or Ionic CLI.

```bash

ionic cordova plugin add cordova-plugin-camera

```

2. Add Plugins to Your App's Module (app.module.ts)

```bash
...

import { Camera } from '@ionic-native/camera';

...

@NgModule({
  ...

  providers: [
    ...
    Camera
    ...
  ]
  ...
})
export class AppModule { }

```

3. Inject the plugin service where you want to use it

```bash
...

import { Camera, CameraOptions } from '@ionic-native/camera';

...
constructor(private camera: Camera) { }

...

const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});


```

These step will be similar in all plugins.

Now you can check many of plugins on [Ionic DevApp](https://ionicframework.com/docs/pro/devapp/) itself without needing to installing any Native SDK.