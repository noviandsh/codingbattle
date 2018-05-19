import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground
} from 'react-native';
import LoginPage from './src/LoginPage';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./assets/images/bg.jpg')} blurRadius={0.5} style={styles.container}>
        <View style={styles.transBg}>
          <LoginPage />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  transBg: {
    flex: 1,
    backgroundColor: 'rgba(0, 1, 51, 0.75)',
  }
});
