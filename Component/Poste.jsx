import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function Poste({ post }) {
  const onPress = () => {
    // todo
  }
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>
          {post.name} {post.code}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 5,
    width: 300,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0015AF',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
