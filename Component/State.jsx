import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Poste from './Poste'

export default function State({ wilaya }) {
  const [isOpen, setIsOpen] = useState(false)

  const onPress = () => {
    // todo
    setIsOpen(!isOpen)
  }
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{wilaya.name}</Text>
        {isOpen ? (
          <ScrollView>
            {wilaya.commute.map((post) => {
              return <Poste key={post.code} post={post} />
            })}
          </ScrollView>
        ) : null}
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
    width: 340,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
})
