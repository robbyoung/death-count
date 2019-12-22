import { View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

interface DeathButtonProps {
    onPress: () => void;
}
export default class DeathButton extends Component<DeathButtonProps> {
    public render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.props.onPress()}>
                        <Text>I died</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
