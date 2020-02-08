import { TouchableOpacity, StyleSheet, View } from 'react-native';
import FontAwesome from 'react-native-fontawesome';
import React, { Component } from 'react';
import { white } from '../colors';

const styles = StyleSheet.create({
    button: {
        marginRight: 20,
        fontSize: 22,
        color: white,
    },
});

interface HeaderButtonProps {
    icon: string;
    onPress: () => void;
}
export default class HeaderButton extends Component<HeaderButtonProps> {
    public render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <FontAwesome
                        icon={this.props.icon}
                        style={styles.button}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

