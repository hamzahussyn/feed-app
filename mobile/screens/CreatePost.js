import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CreatePostScreen = () => {
  const [postText, setPostText] = useState("");

  const handlePost = () => {
    // Logic to handle the post creation
    console.log("Posted:", postText);
  };

  return (
    <View style={styles.container}>
      {/* Card with "Create Post" text */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>What's on your mind</Text>
        {/* Text area for typing */}
        <TextInput
          multiline
          placeholder="Write your post here..."
          value={postText}
          onChangeText={setPostText}
          style={styles.textInput}
        />
        {/* Send button */}
        <TouchableOpacity
          activeOpacity={0.1}
          onPress={handlePost}
          style={styles.sendButton}
        >
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    paddingBottom: 10,
    fontFamily: 'titlefont',
    fontSize: 17
  },
  textInput: {
    height: 150,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    padding: 10,
  },
  sendButton: {
    marginTop: 20,
    alignSelf: "flex-end",
    backgroundColor: "teal",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostScreen;
