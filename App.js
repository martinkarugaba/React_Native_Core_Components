import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg]}>
        <Text>lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
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
    width: 300,
    height: 300,
    padding: 30,
    borderRadius: 30,
  },
  lightblueBg: {
    backgroundColor: 'lightblue',
  },
  lightgreenBg: {
    backgroundColor: 'lightgreen',
    marginTop: 20,
  },
});

export default App;
