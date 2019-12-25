import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps, ScrollView } from 'react-navigation';
import store from '../store';
import { backgroundColor, white, buttonColor } from '../colors';
import OptionList from '../components/optionList';
import { addDeathDetailAction, completeDeathAction } from '../actions';
import { getOptionsForNewDeath } from '../selectors';

const styles = StyleSheet.create({
    newDeathScreen: {
        backgroundColor: backgroundColor,
        height: '100%',
    },
    header: {
        backgroundColor: buttonColor,
    },
    title: {
        fontSize: 22,
        color: white,
        margin: 10,
        fontWeight: 'bold',  
    }
})

interface NewDeathState {
    title: string;
    options: string[];
}
export default class NewDeath extends Component<NavigationInjectedProps, NewDeathState> {
    private unsubscribe = () => undefined;

    public static navigationOptions = () => {
		return {
            title: 'New Death',
            headerTintColor: white,
            headerStyle: styles.header,
        };
    };

    public componentDidMount() {
        this.refreshState();
        this.unsubscribe = store.subscribe(
            () => this.refreshState()
        );
    }

    public componentWillUnmount() {
        this.unsubscribe();
    }

    public render() {
        if(!this.state) {
            return (<View><Text>Invalid state</Text></View>)
        }

        return (
            <ScrollView style={styles.newDeathScreen}>
                <Text style={styles.title}>{this.state.title}</Text>
                <OptionList
                    options={this.state.options}
                    onSelect={(option) => this.addDetail(option)}></OptionList>
            </ScrollView>
        );
    }

    private refreshState() {
        const state = store.getState();
        const unfinishedOptions = getOptionsForNewDeath(state);
        if (unfinishedOptions === undefined) {
            this.completeAndReturn();
        } else {
            this.setState(unfinishedOptions);
        }
    }
    
    private addDetail(detail: string) {
        const action = addDeathDetailAction(this.state.title, detail);
        store.dispatch(action);
    }

    private completeAndReturn() {
        this.unsubscribe();
        const action = completeDeathAction();
        store.dispatch(action);
        this.props.navigation.goBack();
    }
}
