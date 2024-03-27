import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeedPostCard = ({ avatar, date, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text style={styles.avatarText}>From {avatar}</Text>
        </View>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.border} />
      <Text style={styles.textContent}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 5, // Adjusted margin
    marginBottom: 10, // Adjusted margin
    padding: 15,
    elevation: 3,
    marginTop: 20,
    width: 350
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarText: {
    fontWeight: "700",
    marginLeft: 5,
    fontFamily: 'bodyfont'
  },
  dateText: {
    fontWeight: "700",
    color: 'gray',
    fontFamily: 'bodyfont'
  },
  border: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  textContent: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'opensans'
  },
});

export default FeedPostCard;
