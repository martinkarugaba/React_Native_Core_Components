import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text>lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
        <Text>lightgreen box</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#fafafa',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'orange',
  },
  box: {
    width: 200,
    height: 200,
    // padding: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 0,
    borderColor: '#112840',
  },
  lightblueBg: {
    backgroundColor: 'lightblue',
  },
  lightgreenBg: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  }
});

export default App;
