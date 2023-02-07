import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import State from './State'

export default function Countries({ country }) {
  const [isOpen, setIsOpen] = useState(false)

  const onPress = () => {
    // todo
    setIsOpen(!isOpen)
  }
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{country.name}</Text>
        {isOpen ? (
          <ScrollView>
            {country.wilayats.map((wilaya) => {
              //   return <State key={wilaya.id} wilaya={wilaya} />
              return <State wilaya={wilaya} />
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
    width: 380,
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
