import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor } from '../colors';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        width: 200,
        backgroundColor: buttonColor,
        height: 200,
        borderRadius: 100,
        fontSize: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: white,
    },
});

interface DeathButtonProps {
    onPress: () => void;
}
export default class DeathButton extends Component<DeathButtonProps> {
    public render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.onPress()}>
                        <FontAwesome icon={SolidIcons.skull} style={styles.button} />
                </TouchableOpacity>
            </View>
        );
    }
}
