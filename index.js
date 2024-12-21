// File: index.js
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  useWindowDimensions,
  Animated,
} from 'react-native';

const SwipeOnboarding = ({
  data,
  onFinish,
  nextLabel = 'Next',
  prevLabel = 'Previous',
  finishLabel = 'Finish',
  indicatorStyle = {},
  textStyle = {},
  containerStyle = {},
  autoChange = false,
  delay = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width, height } = useWindowDimensions();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const autoChangeInterval = useRef(null);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    if (autoChange) {
      autoChangeInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % data.length;
          return nextIndex;
        });
      }, delay);
    }

    return () => {
      if (autoChangeInterval.current) {
        clearInterval(autoChangeInterval.current);
      }
    };
  }, [currentIndex, autoChange, delay]);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setCurrentIndex(currentIndex + 1));
    } else {
      onFinish();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setCurrentIndex(currentIndex - 1));
    }
  };

  const renderItem = ({ item }) => (
    <Animated.View
      style={[
        styles.slide,
        containerStyle,
        { width, height, opacity: fadeAnim, backgroundColor: item.backgroundColor || 'white' },
      ]}
    >
      {item.icon && <View style={styles.iconContainer}>{item.icon}</View>}
      <Text style={[styles.title, { color: item.textColor || 'black' }]}>{item.title}</Text>
      <Text style={[styles.description, { color: item.textColor || 'gray' }]}>{item.description}</Text>
    </Animated.View>
  );

  return (
    <View style={[styles.container, { height, width }]}> {/* Ensures full height and width by default */}
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />

      <View style={[styles.indicatorContainer, { position: 'absolute', bottom: 100, alignSelf: 'center' }]}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              indicatorStyle,
              index === currentIndex && styles.activeIndicator,
            ]}
          />
        ))}
      </View>

      <View
        style={[
          styles.buttonContainer,
          { position: 'absolute', bottom: 40, alignSelf: 'center', width: width * 0.8 },
        ]}
      >
        {currentIndex > 0 && (
          <TouchableOpacity
            onPress={handlePrev}
            style={[styles.button, { backgroundColor: data[currentIndex].buttonColor || 'blue' }]}
          >
            <Text style={[styles.buttonText, { color: data[currentIndex].buttonTextColor || 'white' }]}>{prevLabel}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={handleNext}
          style={[styles.button, { backgroundColor: data[currentIndex].buttonColor || 'blue' }]}
        >
          <Text style={[styles.buttonText, { color: data[currentIndex].buttonTextColor || 'white' }]}>
            {currentIndex === data.length - 1 ? finishLabel : nextLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: 'blue',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default SwipeOnboarding;

// To publish on npm, create a package.json file with metadata for the package and run `npm publish`.
