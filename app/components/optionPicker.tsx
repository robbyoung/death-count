import { View, StyleSheet, Picker } from 'react-native';
import React, { Component } from 'react';
import { white } from '../colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        margin: 5,
        borderRadius: 5,
    },
});

export interface OptionPickerProps {
    selected: string;
    options: { key: string; value: string }[];
    onSelect: (key: string) => void;
}
export default class OptionPicker extends Component<OptionPickerProps> {
    public render() {
        return (
            <View style={styles.container}>
                <Picker
                    onValueChange={(key) => this.props.onSelect(key)}
                    selectedValue={this.props.selected}>
                    {this.props.selected === undefined ? <Picker.Item label={'Pick One'} value={undefined}></Picker.Item> : undefined}
                    {this.props.options.map(option => (
                        <Picker.Item label={option.key} key={option.value} value={option.value}></Picker.Item>
                    ))}
                </Picker>
            </View>
        );
    }
}
