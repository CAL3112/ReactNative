import * as React from 'react';
import {Button, View, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import {styles} from '../core/styles';
import * as SQLite from 'expo-sqlite';

class Homepage extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const db = SQLite.openDatabase("database.db");
    db.transaction(tx => {tx.executeSql("create table if not exists user (id integer primary key not null, name text, mail text, mdp text);");});
    db.transaction(tx => {tx.executeSql("select * from user",[], (_, { rows}) =>console.log(rows))})
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

export default Homepage;