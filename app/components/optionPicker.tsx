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
        const pickerItems = this.props.selected === undefined ? 
            [(<Picker.Item label={'None Selected'} value={undefined} key=''></Picker.Item>)] : [];
        this.props.options.forEach(option => pickerItems.push(
            <Picker.Item label={option.key} key={option.value} value={option.value}></Picker.Item>
        ))
        
        return (
            <View style={styles.container}>
                <Picker
                    onValueChange={(key) => this.props.onSelect(key)}
                    selectedValue={this.props.selected}>
                    {pickerItems}
                </Picker>
            </View>
        );
    }
}
