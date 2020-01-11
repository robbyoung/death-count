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
    },
});

interface OptionListProps {
    options: string[];
    onSelect?: (string, index) => void;
}
export default class OptionList extends Component<OptionListProps> {
    public render() {
        return this.props.options.map((option, index) => {
            return this.props.onSelect === undefined
                ? this.getNonSelectableRow(option, index)
                : this.getSelectableRow(option, index);
        });
    }

    private getSelectableRow(option: string, index: number) {
        return (
            <TouchableOpacity
                onPress={() => this.props.onSelect(option, index)}
                key={`option ${index}`}>
                <View style={styles.row}>
                    <Text style={styles.text}>{option}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    private getNonSelectableRow(option: string, index: number) {
        return (
            <View style={styles.row} key={`option ${index}`}>
                <Text style={styles.text}>{option}</Text>
            </View>
        );
    }
}
