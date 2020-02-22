import { View, StyleSheet, Picker, Text } from 'react-native';
import React, { Component } from 'react';
import { white } from '../colors';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    title: {
        color: white,
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5,
    },
    pickerBackground: {
        backgroundColor: white,
        borderRadius: 5,
        width: '100%',
    },
});

export interface OptionPickerProps {
    title: string;
    selected: string;
    options: { key: string; value: string }[];
    onSelect: (key: string) => void;
}
export default class OptionPicker extends Component<OptionPickerProps> {
    public render() {
        const pickerItems =
            this.props.selected === undefined
                ? [
                      <Picker.Item
                          label={'None Selected'}
                          value={undefined}
                          key=""></Picker.Item>,
                  ]
                : [];
        this.props.options.forEach(option =>
            pickerItems.push(
                <Picker.Item
                    label={option.key}
                    key={option.value}
                    value={option.value}></Picker.Item>,
            ),
        );

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={styles.pickerBackground}>
                    <Picker
                        onValueChange={key => this.props.onSelect(key)}
                        selectedValue={this.props.selected}>
                        {pickerItems}
                    </Picker>
                </View>
            </View>
        );
    }
}
