import * as React from 'react';
import {Button, View, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import {styles} from '../core/styles';

export default class Homepage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <SafeAreaView style={styles.container}>
          <View>
          <Header title = 'Connexion/Inscription'/>
          <View style={styles.bouton}>
            <Button
              title="Connexion"
              onPress={() => navigate('Login')}
              color= "royalblue"
            />
            </View>
            <View style={styles.bouton}>
            <Button
              title="Inscription"
              color= "royalblue"
              onPress={() => navigate('Subscribe')}
            />
            </View>
          </View>
        </SafeAreaView>
    )
  }
}