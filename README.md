# React Native Swipe Onboarding

A customizable and animated swipe onboarding component for React Native, allowing developers to create engaging onboarding experiences with minimal effort.

## Features
- Swipeable onboarding slides
- Fully customizable styles and content
- Smooth animations between slides
- Background and button color support for each slide
- Automatic slide transition with delay support
- Easy-to-use API

## Installation

Install the package via npm:

```bash
npm install react-native-swipe-onboarding
```

Or via Yarn:

```bash
yarn add react-native-swipe-onboarding
```

## Usage

```tsx
import React from 'react';
import { View, Image } from 'react-native';
import SwipeOnboarding from 'react-native-swipe-onboarding';

const App = () => {
  const onboardingData = [
    {
      title: 'Welcome to the App',
      description: 'Discover new features and functionality to enhance your experience.',
      icon: <Image source={require('./assets/icon1.png')} style={{ width: 100, height: 100 }} />,
      backgroundColor: '#FFEEE4',
      buttonColor: '#FF6347',
      buttonTextColor: '#FFFFFF',
      textColor: '#000000',
    },
    {
      title: 'Track Your Progress',
      description: 'Keep track of your activities and monitor your achievements.',
      icon: <Image source={require('./assets/icon2.png')} style={{ width: 100, height: 100 }} />,
      backgroundColor: '#E4F4FF',
      buttonColor: '#4682B4',
      buttonTextColor: '#FFFFFF',
      textColor: '#000000',
    },
    {
      title: 'Stay Connected',
      description: 'Connect with others and share your progress with friends.',
      icon: <Image source={require('./assets/icon3.png')} style={{ width: 100, height: 100 }} />,
      backgroundColor: '#E4FFE5',
      buttonColor: '#32CD32',
      buttonTextColor: '#FFFFFF',
      textColor: '#000000',
    },
  ];

  const handleFinish = () => {
    console.log('Onboarding finished!');
  };

  return (
    <SwipeOnboarding
      data={onboardingData}
      onFinish={handleFinish}
      nextLabel="Next"
      prevLabel="Back"
      finishLabel="Get Started"
      autoChange={true}
      delay={4000}
      indicatorStyle={{ backgroundColor: 'gray' }}
      containerStyle={{ borderRadius: 10 }}
      textStyle={{ fontSize: 16 }}
    />
  );
};

export default App;
```

## Props

| Prop               | Type             | Default Value | Description                                                                 |
|--------------------|------------------|---------------|-----------------------------------------------------------------------------|
| `data`             | `Array`          | `[]`           | Array of objects containing `title`, `description`, `icon`, `backgroundColor`, `buttonColor`, `buttonTextColor`, and `textColor`. |
| `onFinish`         | `Function`       | `undefined`    | Callback function executed after the last slide                            |
| `nextLabel`        | `string`         | `"Next"`      | Label for the "Next" button                                                |
| `prevLabel`        | `string`         | `"Previous"`  | Label for the "Previous" button                                            |
| `finishLabel`      | `string`         | `"Finish"`    | Label for the "Finish" button                                              |
| `indicatorStyle`   | `object`         | `{}`           | Custom styles for the slide indicators                                      |
| `containerStyle`   | `object`         | `{}`           | Custom styles for the overall container                                    |
| `textStyle`        | `object`         | `{}`           | Custom styles for the button text                                           |
| `autoChange`       | `boolean`        | `false`        | Automatically change slides after a delay                                  |
| `delay`            | `number`         | `3000`         | Delay in milliseconds for auto-changing slides (if `autoChange` is `true`) |

## Example Data Structure

```tsx
const onboardingData = [
  {
    title: 'Welcome',
    description: 'This is the first slide.',
    icon: <Image source={require('./assets/icon1.png')} style={{ width: 100, height: 100 }} />,
    backgroundColor: '#FFEEE4',
    buttonColor: '#FF6347',
    buttonTextColor: '#FFFFFF',
    textColor: '#000000',
  },
  {
    title: 'Learn More',
    description: 'Here is some additional information.',
    icon: <Image source={require('./assets/icon2.png')} style={{ width: 100, height: 100 }} />,
    backgroundColor: '#E4F4FF',
    buttonColor: '#4682B4',
    buttonTextColor: '#FFFFFF',
    textColor: '#000000',
  },
];
```

## Customization

You can customize the following:
- **Slide Content**: Provide `title`, `description`, `icon`, `backgroundColor`, `buttonColor`, `buttonTextColor`, and `textColor` for each slide.
- **Buttons**: Change the text, style, and labels for navigation buttons.
- **Indicators**: Style the slide indicators to match your design.
- **Automatic Transition**: Enable or disable auto-changing slides with a custom delay.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
