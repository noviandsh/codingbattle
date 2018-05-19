import React from 'react';
import { 
    StyleSheet, 
    Text, 
		View,
		Image,
		Button,
		LayoutAnimation,
		UIManager,
		TouchableHighlight
} from 'react-native';
import Form from './components/Form.js';

export default class App extends React.Component {
	constructor(){
		super();
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		this.state = {a:false,hgh:0}
  }
	infoView = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		this.setState({
			hgh: this.state.a ? 0 : 200,
			a: this.state.a ? false : true
		});
	}
  render() {
    return (
      <View style={styles.loginContainer}>
				<View style={styles.loginHeader}>
					<View style={styles.leftLogo} ></View>
					<View style={styles.centerLogo} >	
						<Image source={require('../assets/images/logo-v2.png')} style={styles.logo} />
					</View>
					<View style={styles.rightLogo} ></View>
				</View>
				<View style={styles.loginFooter}>
					<View style={{height:this.state.hgh,backgroundColor:'blue'}}>
						<Text>loremipsum dolor sit ametttt</Text>
					</View>
					<TouchableHighlight style={styles.btn} onPress={this.infoView} underlayColor="white">
						<View>
							<Text>v</Text>
						</View>
					</TouchableHighlight>
					<Form />
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	info:{
		borderColor: 'purple',
		borderWidth: 0.5,
		alignItems: 'center'
	},
  loginContainer: {
    flex: 1,
    alignItems: 'stretch',
		justifyContent: 'space-between'
  },
  loginHeader: {
		flex: 2,
		flexDirection: 'row',
		alignItems: 'center',
	},
	logo: {
		width: 150, 
		height: 150,
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
	btn: {
		borderBottomLeftRadius: 90,
		borderBottomRightRadius: 90,
		// borderRadius: 100,
		backgroundColor: 'red',
		width: 30,
		height: 15,
		alignItems: 'center',
		// position: 'relative',
		// bottom: 10
	},
  loginFooter: {
		flex: 4,
		alignItems: 'stretch',
  }
});
