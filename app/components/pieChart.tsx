import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Pie from 'react-native-pie';
import { StatDisplayProps } from './statDisplay';
import { chartColors } from '../colors';

const CHART_MARGINS = 20;
const styles = StyleSheet.create({
	chart: {
		margin: CHART_MARGINS,
	},
});

export interface PieChartProps {
	data: StatDisplayProps[];
}
export default class PieChart extends Component<PieChartProps> {
	public render() {
		const firstColor = chartColors[0];
		const repeatedColors = chartColors.slice(1);
		return (
			<View style={styles.chart}>
				<Pie
					radius={(Dimensions.get('window').width - CHART_MARGINS * 2) / 2}
					sections={this.props.data.map(
						(data, index) => ({
							percentage: data.percentage,
                            color: index === 0 ? firstColor : repeatedColors[index % repeatedColors.length],
                        })
					)}
				/>
			</View>
		);
	}
}
