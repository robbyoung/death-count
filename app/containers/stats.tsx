import { View, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import store from '../store';
import { OptionSet } from '../state';
import { backgroundColor, white, buttonColor } from '../colors';
import { getDeathStatsForPlaythrough, getOptionSetsForSelectedGame, getSelectedOptionSet } from '../selectors';
import StatDisplay, { StatDisplayProps } from '../components/statDisplay';
import OptionPicker from '../components/optionPicker';
import { selectOptionSetAction } from '../actions';
import PieChart from '../components/pieChart';

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
    stats: StatDisplayProps[] | undefined;
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
        if (this.state === null) {
            return <View />
        }

        const picker = <OptionPicker
            options={this.state.optionSets.map(set => ({ key: set.title, value: set.id }))}
            onSelect={(key) => this.onOptionSetSelect(key)}
            selected={this.state.selected === undefined ? undefined : this.state.selected.id}
        />

        if (!this.state.stats) {
            return <View style={styles.statsScreen}>{picker}</View>
        }

        return (
            <View style={styles.statsScreen}>
                <ScrollView>
                    {picker}
                    <PieChart
                        data={this.state.stats}
                    ></PieChart>
                    {this.state.stats.map((statProps, index) => <StatDisplay {...statProps} key={index} />)}
                </ScrollView>
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
