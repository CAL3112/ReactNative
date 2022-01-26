import * as React from 'react';
import {Button, View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import Header from '../components/Header';
import {styles} from '../core/styles';
import {emailValide, mdpValide, nomValide} from '../core/functions';
import {connect} from "react-redux";
import * as SQLite from 'expo-sqlite';

class MdpOublie extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email: "",
        password: "",
        nom: "",
        };
  }
  validationSubscibe(){
    const {navigate} = this.props.navigation;
    const bonEmail = emailValide(this.state.email);
    const bonNom = nomValide(this.state.nom);
    const bonMDP = mdpValide(this.state.password);
    if(bonEmail && bonMDP && bonNom){

        const formData = new FormData();
        formData.append("mail", this.state.email)
        formData.append("password", this.state.password)

        fetch('http://jdevalik.fr/api/updateser.php', {
            method: 'POST',
            body: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then((response) => response.json())
            .then((json) => {
                if(json == false){
                Alert.alert(
                    'Erreur',
                    'L\'e-mail saisi existe déjà. Veuillez saisir une autre adresse mail ou vous connecter.',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                );
            } else {
                this.props.navigation.navigate('Subscribed', {name: this.state.nom});
            }
            })
            .catch((error) => {
                console.error(error);
            }
            );
    }
    else if(!bonEmail && !bonMDP && !bonNom){Alert.alert("Le nom, l'adresse mail et le mot de passe sont incorrects")}
    else if(!bonMDP && !bonNom){Alert.alert("Le nom et le mot de passe sont incorrects")}
    else if(!bonEmail && !bonNom){Alert.alert("Le nom et l'adresse sont incorrects")}
    else if(!bonEmail && !bonMDP){Alert.alert("L'adresse mail et le mot de passe sont incorrects")}
    else if(!bonEmail){Alert.alert("L'adresse mail est incorrecte")}
    else if(!bonMDP){Alert.alert("Le mot de passe est incorrect")}
    else {Alert.alert("Le nom est incorrect")}
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Header title = 'Mot de passe oublié'/>
                <TextInput
                    label="Nom"
                    returnKeyType="next"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, borderRadius: 5}}
                    value={this.state.nom}
                    onChangeText={text => this.setState({nom: text})}
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
                    placeholder="Nouveau mot de passe"
                    secureTextEntry={true}
                    ref={(input) => { this.thirdTextInput = input; }}
                />
                <View style={styles.bouton}>
                    <Button
                    color= "royalblue"
                    title="Changer de mot de passe"
                    onPress={() => this.validationSubscibe()}
                    />
                </View>
                <View style={styles.bouton}>
                    <Button
                    color= "royalblue"
                    title="retour a l' Accueil"
                    onPress={() => navigate('Homepage')}
                    />
                </View>
                
            </View>
        </SafeAreaView>
    )
  }
}

export default MdpOublie
