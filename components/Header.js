import * as React from "react";
import {Text, View, StyleSheet} from "react-native";
import {styles} from '../core/styles';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {title} = this.props
        return(
            <View>
                <Text style={styles.titre}>{title}</Text>
            </View>
            )
        
    }
}
