import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import FeedPostCard from '../components/FeedCard';

const FeedScreen = () => {
  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height;
    if (isAtBottom) {
      console.log('Scrolled to the bottom!');
      // Your code to handle scrolling to the bottom goes here
    }
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}
      onScroll={handleScroll}
      scrollEventThrottle={16} 
    >
      <View style={{ paddingBottom: 20 }}> 
        <FeedPostCard
          avatar={null}
          date="12-9-2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
        />
        {/* Add more FeedPostCard components as needed */}
      </View>
    </ScrollView>
  );
};

export default FeedScreen;
