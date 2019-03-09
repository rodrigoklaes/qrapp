import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';


export default class TypePerson extends Component {
  state = {
    data: [
        {
            label: 'Visitante',
        },
        {
            label: 'Prestador de Serviços',
        },
        { 
            label: 'Múltiplos visitantes (Festas e eventos)',
        }
    ],
};

// update state radio button
onPress = data => this.setState({ data });

// state button
onPressButton = () => {
  this.setState({
    
  })
}

  render() {
    return (
      <View style={styles.MainContainer}>
        
        <View style={styles.Image}>
          <Image 
            style={{width: 100, height: 100}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </View>

        <Text style={styles.Title}>Quem você gostaria de autorizar a entrar no condomínio?</Text>
        
        <View>
          <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
        </View>

        <TouchableOpacity
         style={styles.Button}
         onPress={this.onPressButton}
        >
          <Text style={styles.TextTouchableOpacity}> Próximo </Text>
       </TouchableOpacity>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 80,
  },
  Image: {
    alignItems: 'center',
    marginBottom: 60,
    justifyContent: 'center',
  },
  Title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 30
  },
  Button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 30,
    marginLeft: 75,
    marginRight: 75,
    borderRadius: 20
  },
  TextTouchableOpacity: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});