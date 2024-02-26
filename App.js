import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Button,
} from 'react-native';
const logoImg = require('./assets/twitter.jpg');

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fafafa', padding: 30 }}>
      <ScrollView>
        <Text>
          <Text style={{ color: 'orange' }}>Hello</Text> React Native
        </Text>
        <Image source={logoImg} style={{ height: 300, width: 300 }} />
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </Text>

        <Button
          title="press"
          onPress={() => console.log('Hello React Native')}
          color="amber"
        />
      </ScrollView>
    </View>
  );
}
