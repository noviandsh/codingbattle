import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import LoginPage from './component/LoginPage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
