import * as React from 'react';
import {Button, View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/Header';
import {styles} from '../core/styles';
import {emailValide, mdpValide} from '../core/functions';
import {connect} from "react-redux";


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email: "",
        password: ""
        };
  }

  validationLogin(){
    const {navigate} = this.props.navigation;
    const bonEmail = emailValide(this.state.email);
    const bonMDP = mdpValide(this.state.password);
    if(bonEmail && bonMDP){
      const {users} = this.props
      var userConnect = false
      for(var i=0; i<users.length; i++){
        if(users[i].email == this.state.email && users[i].password == this.state.password) {
          userConnect = true
          this.props.navigation.navigate('Connected', {mail: this.state.email})}
        }
        if(userConnect == false) {
          Alert.alert("Le couple identifiant mot de passe n'est pas bon.")
        }
      }
     
    else if(!bonEmail && !bonMDP){Alert.alert("L'adresse mail et le mot de passe sont incorrects")} 
    else if(!bonEmail){Alert.alert("L'adresse mail est incorrecte")}
    else {Alert.alert("Le mot de passe est incorrect")}
  }
  
  render(){
    const {navigate} = this.props.navigation;
    console.log(this.props)

    return(
            <SafeAreaView style={styles.container}>
                <View>
                    <Header title = 'Connexion'/>
                    <TextInput
                    label="Email"
                    returnKeyType="next"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, borderRadius: 5}}
                    value={this.state.email}
                    onChangeText={text => this.setState({email: text})}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    placeholder="Adresse mail"
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    />
                    <TextInput
                    label="password"
                    returnKeyType="done"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, borderRadius: 5}}
                    value={this.state.password}
                    onChangeText={text => this.setState({password: text})}
                    autoCapitalize="none"
                    autoCompleteType="password"
                    textContentType="password"
                    placeholder="Mot de passe"
                    secureTextEntry={true}
                    ref={(input) => { this.secondTextInput = input; }}
                    />
                    <View style={styles.bouton}>
                    <Button
                      title="Se Connecter"
                      color= "royalblue"
                      onPress={() => this.validationLogin()}
                    />
                    </View>
                    <View style={styles.phrase}>
                        <TouchableOpacity onPress={() => navigate('Subscribe')}>
                          <Text style={styles.lien}>Inscrivez-vous</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(Login)
