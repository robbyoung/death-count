import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import store from '../store';
import { OptionSet } from '../state';
import { backgroundColor, white, buttonColor } from '../colors';
import { getDeathStatsForPlaythrough, getOptionSetsForSelectedGame, getSelectedOptionSet } from '../selectors';
import OptionStats, { OptionStatsProps } from '../components/optionStats';
import OptionPicker from '../components/optionPicker';
import { selectOptionSetAction } from '../actions';

const styles = StyleSheet.create({
    statsScreen: {
        backgroundColor: backgroundColor,
        height: '100%',
    },
    header: {
        backgroundColor: buttonColor,
    }
})

interface StatsState {
    stats: OptionStatsProps[] | undefined;
    optionSets: OptionSet[];
    selected: OptionSet;
}
export default class Stats extends Component<NavigationInjectedProps, StatsState> {
    private unsubscribe = () => undefined;

    public static navigationOptions = () => {
        return {
            title: 'Death Stats',
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
        if(this.state === null) {
            return <View><Text>Invalid state</Text></View>
        }

        const picker = <OptionPicker
            options={this.state.optionSets.map(set => ({ key: set.title, value: set.id }))}
            onSelect={(key) => this.onOptionSetSelect(key)}
            selected={this.state.selected === undefined ? undefined : this.state.selected.id}
        />

        if (!this.state.stats) {
            return <View>{picker}</View>
        }

        return (
            <View style={styles.statsScreen}>
                {picker}
                {this.state.stats.map((statProps, index) => <OptionStats {...statProps} key={index}/>)}
            </View>
        );
    }

    private refreshState() {
        const state = store.getState();
        this.setState({
            stats: getDeathStatsForPlaythrough(state),
            optionSets: getOptionSetsForSelectedGame(state),
            selected: getSelectedOptionSet(state),
        });
    }

    private onOptionSetSelect(id: string) {
        store.dispatch(selectOptionSetAction(id));
    }
}
