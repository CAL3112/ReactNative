import * as React from "react";
import {Text, View, StyleSheet} from "react-native";
import {styles} from '../core/styles';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){ 
        return(
            <View>
                <Text style={styles.titre}>{this.props.title}</Text>
            </View>
            )
    }
}