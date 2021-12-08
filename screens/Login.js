import * as React from 'react';
import {Button, View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/Header';
import {styles} from '../core/styles';


export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email: "",
        password: ""
        };
  }
  render(){
        const {navigate} = this.props.navigation;
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
              onPress={() => {
                if (this.state.email === "" || this.state.password === "") {Alert.alert("Veuillez remplir tous les champs.")
                } else {navigate('Connected',{mail: this.state.email})}
            }
            }
              color= "royalblue"

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

