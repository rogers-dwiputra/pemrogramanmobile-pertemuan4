import React, { useState } from 'react'
import { View, Text, Button, TextInput, ScrollView, Image, FlatList, TouchableHighlight } from 'react-native'

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const App = () => {
  const [page, setPage] = useState('HelloWorld')

  if(page == 'HelloWorld'){
    return (
      <View style={{ marginHorizontal: 8 }}>
      <Button
      title="Pindah ke halaman Flatlist"
      onPress={() => {
        setPage('Flatlist')
      }}
      />
      <ContohPertemuan4/>
      </View>
    )
  }
  else {
    return (
      <View>
      <Button
      title="Pindah ke halaman Hello World"
      onPress={() => {
        setPage('HelloWorld')
      }}
      />
      <ContohFlatlist/>
      </View>
    )
  }
}

const ContohPertemuan4 = () => {
  const [bilangan1, setBilangan1] = useState()
  const [bilangan2, setBilangan2] = useState()
  return (
    <View>
      <TouchableHighlight 
      style={{ marginBottom: 8 }}
      onPress={() => { alert("Hello World di Klik") }}>
      <Text>Halo Dunia</Text>
      </TouchableHighlight>
      <Cat nama="Meow 1" usia="1"/>
      <Cat nama="Meow 2"/>
      <Cat nama="Meow 3"/>
      <TextInput
      placeholder="Bilangan 1"
      onChangeText={(text) => { setBilangan1(text) }}
      />
      <TextInput
      placeholder="Bilangan 2"
      onChangeText={(text) => { setBilangan2(text) }}
      />
      <Button
      title="Tampilkan Hasil Penjumlahan"
      onPress={() => {
        alert(bilangan1+bilangan2)
      }}
      />
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    </View>
  )
}

const Cat = (props) => {
 const [isHungry, setIsHungry] = useState("Lapar")

 return (
   <>
   <Text style={{ marginBottom: 8 }}>Saya Kucing, Nama Saya {props.nama}, Saya {isHungry}</Text>
   <Button
   title="Kasi Makan Kucing"
   onPress={() => {
     setIsHungry("Kenyang")
   }}
   />
   </>
 ) 
}

const ContohFlatlist = () => {
  const [refreshing, setRefreshing] = useState(false)
  return (
    <View>
      <FlatList
      data={[
        {key: "Data 1"},
        {key: "Data 2"},
        {key: "Data 3"}
      ]}
      renderItem={({item}) => {
        return (
        <Text>{item.key}</Text>
        )
      }}
      onRefresh={() => {
        setRefreshing(true)
        //misalkan ambil data dari API
        console.log("Pull to Refresh Dilakukan")
        setRefreshing(false)
      }}
      refreshing={refreshing}
      />
    </View>
  )
}
export default App;