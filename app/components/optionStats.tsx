import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor, backgroundColor } from '../colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: buttonColor,
        margin: 5,
        borderRadius: 5,
    },
    text: {
        color: white,
        fontSize: 22,
    }
});

export interface OptionStatsProps {
    name: string,
    count: number,
    percentage: number,
}
export default class OptionStats extends Component<OptionStatsProps> {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.name}</Text>
                <Text style={styles.text}>{this.props.count} Deaths</Text>
                <Text style={styles.text}>{this.props.percentage}% of Deaths</Text>
            </View>
        );
    }
}
