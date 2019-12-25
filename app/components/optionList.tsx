import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor, backgroundColor } from '../colors';

const styles = StyleSheet.create({
    row: {
        backgroundColor: buttonColor,
        borderBottomColor: backgroundColor,
        borderBottomWidth: 2,
    },
    text: {
        color: white,
        fontSize: 22,
        margin: 10,
    }
});

interface OptionListProps {
    options: string[];
    onSelect: (string) => void;
}
export default class OptionList extends Component<OptionListProps> {

    public render() {
        const rows = this.props.options.map((option, index) => {
            return (
                <TouchableOpacity
                    onPress={() => this.props.onSelect(option)}
                    key={`option ${index}`}>
                    <View style={styles.row}>
                        <Text style={styles.text}>{option}</Text>
                    </View>
                </TouchableOpacity>
            );
        });
        return rows;
    }
}
