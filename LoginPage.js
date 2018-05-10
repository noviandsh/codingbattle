import React from 'react';
import { 
    StyleSheet, 
    Text, 
		View,
		Image
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.loginContainer}>
				<View style={styles.loginHeader}>
					<View style={styles.leftLogo} ></View>
					<View style={styles.centerLogo} >	
						<Image source={require('./img/logo-v2.png')} style={styles.logo} />
					</View>
					<View style={styles.rightLogo} ></View>
				</View>
				<View style={styles.loginFooter}>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
		justifyContent: 'space-between'
  },
  loginHeader: {
		flex: 2,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 0.5,
		borderColor: '#eee'
	},
	logo: {
		width: 100, 
		height: 100,
	},
	centerLogo: {
		flex: 2,
		alignItems: 'center'
	},
	leftLogo: {
		flex: 2,
		height: 10,
		marginRight: 30,
		backgroundColor: '#CE93D8'
	},
	rightLogo: {
		flex: 2,
		height: 10,
		marginLeft: 30,
		backgroundColor: '#CE93D8'
	},
  loginFooter: {
		flex: 4,
    backgroundColor: '#fff'
  }
});
