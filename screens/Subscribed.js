import * as React from 'react';
import {View, SafeAreaView, Text, Button} from 'react-native';
import Header from '../components/Header';
import {styles} from '../core/styles';


export default class Connected extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
        <SafeAreaView style={styles.container}>
            <View>
            <Header title = 'Vous êtes inscrit'/>
            <Text>Inscrit en tant que {this.props.route.params.name} </Text>
            </View>
            <View style={styles.bouton}>
                <Button
                  title="Accueil"
                  onPress={() => navigate('Homepage')}
                  color= "royalblue"
                />
            </View>
        </SafeAreaView>
    )    
  };
};