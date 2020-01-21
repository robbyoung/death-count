import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor } from '../colors';
import FontAwesome, { SolidIcons } from 'react-native-fontawesome';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,
        padding: 15,
    },
    button: {
        width: 50,
        backgroundColor: buttonColor,
        height: 50,
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: white,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    textbox: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        flexGrow: 100,
        backgroundColor: white,
        fontSize: 22,
        height: 50,
        paddingLeft: 10,
    },
});

interface OptionInputProps {
    placeholder: string;
    onSubmit: (option: string) => void;
}
interface OptionInputState {
    text: string;
}
export default class OptionInput extends Component<
    OptionInputProps,
    OptionInputState
> {
    public state: OptionInputState = {
        text: '',
    };

    public render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.text}
                    onChangeText={text => this.updateText(text)}
                    style={styles.textbox}
                    placeholder={this.props.placeholder}></TextInput>
                <TouchableOpacity onPress={() => this.submitAndClear()}>
                    <FontAwesome
                        icon={SolidIcons.check}
                        style={styles.button}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    private updateText(text: string) {
        this.setState({ text });
    }

    private submitAndClear() {
        this.props.onSubmit(this.state.text);
        this.updateText('');
    }
}
