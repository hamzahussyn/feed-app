import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import FeedPostCard from "../components/FeedCard";
import { fetchFeedPosts } from "../api/service/feed";

const FeedScreen = () => {
  const [feedListig, setFeedListing] = useState([]);

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isAtBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height;
    if (isAtBottom) {
      console.log("Scrolled to the bottom!");
    }
  };

  useEffect(() => {
    fetchFeedPosts().then((res) => setFeedListing(res));
  }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
      }}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <View style={{ paddingBottom: 20 }}>
        {feedListig.length
          ? feedListig.map((f) => (
              <FeedPostCard
                avatar={null}
                date="12-2-3"
                text={f.text}
                key={f._id}
              />
            ))
          : null}
      </View>
    </ScrollView>
  );
};

export default FeedScreen;
