import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import Header from '../components/Header';
import {styles} from '../core/styles';


export default class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email: "",
        password: "",
        nom: ""
        };
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Header title = 'Inscription'/>
                <TextInput
                    label="Nom"
                    returnKeyType="next"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, borderRadius: 5}}
                    value={this.state.nom}
                    onChangeText={text => this.setState({nom: text})}
                    autoCapitalize="none"
                    placeholder="Nom"
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}

                />
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
                    onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                    ref={(input) => { this.secondTextInput = input; }}


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
                    ref={(input) => { this.thirdTextInput = input; }}

                />
                <View style={styles.bouton}>
                    <Button
                    color= "royalblue"
                    title="S'incrire"
                    onPress={() => {
                        if (this.state.email === "" || this.state.password === "") {Alert.alert("Veuillez remplir tous les champs.")
                        } else {navigate('Subscribed',{mail: this.state.email})}}}
                    />
                </View>
                <View style={styles.phrase}>
                    <TouchableOpacity
                    onPress={() => navigate('Login')}>
                    <Text style={styles.lien}>Connectez-vous !</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )

    
  }
}