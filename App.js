import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Countries from './Component/Countries'

import { CountriesData } from './variables'

export default function App() {
  const [isShown, setIsShown] = useState(false)

  return (
    <View style={styles.container}>
      <StatusBar />

      <Countries country={CountriesData[0]} />
      {/* <View>
      <Country title={"algeria"} isClick={setIsShown} isShown={isShown}/>
      </View>

{ isShown?  (

  <ScrollView >
      {wilaya.map(w=>{
        return <Wilaya title={w}/>
        
      })}
      </ScrollView>
      ): null
    } */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#F6FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
