import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor } from '../colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: buttonColor,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        padding: 5,
    },
    title: {
        color: white,
        fontWeight: 'bold',
        fontSize: 24,
    },
    statsRow: {
        flexDirection: 'row',
    },
    count: {
        color: white,
        fontSize: 18,
        width: '50%',
    },
    percentage: {
        color: white,
        fontSize: 18,
        textAlign: 'right',
        width: '50%',
    }
});

export interface StatDisplayProps {
    name: string;
    count: number;
    percentage: number;
}
export default class StatDisplay extends Component<StatDisplayProps> {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.name}</Text>
                <View style={styles.statsRow}>
                    <Text style={styles.count}>{this.props.count} Deaths</Text>
                    <Text style={styles.percentage}>{this.props.percentage}% of Deaths</Text>
                </View>
            </View>
        );
    }
}
