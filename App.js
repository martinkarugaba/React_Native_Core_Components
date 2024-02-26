import { View, Text, Image, ImageBackground } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>
        <Text style={{ color: 'white' }}>Hello</Text> World
      </Text>
      <Image
        source={logoImg}
        style={{ height: 300, width: 300, marginTop: 30 }}
      />
      <Image
        source={{uri: 'https://picsum.photos/300'}}
        style={{ height: 300, width: 300, marginTop: 30 }}
      />
    </View>
  );
}
