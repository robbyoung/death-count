import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import FontAwesome, { SolidIcons } from 'react-native-fontawesome';
import { white, buttonColor, backgroundColor } from '../colors';
import { ExpandedPlaythrough } from '../state';

const styles = StyleSheet.create({
    container: {
        backgroundColor: buttonColor,
        margin: 15,
        marginBottom: 0,
        padding: 10,
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: white,
        fontSize: 22,
    },
    details: {
        color: backgroundColor,
        fontSize: 18,
    },
    deleteButton: {
        color: white,
        fontSize: 30,
        paddingRight: 5,
    }
});

interface PlaythroughDisplayProps {
    playthrough: ExpandedPlaythrough;
    onDelete: (id: string) => void;
    onSelect: (id: string) => void;
}
export default class PlaythroughDisplay extends Component<PlaythroughDisplayProps> {
    public render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => this.props.onSelect(this.props.playthrough.id)}>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.title}>
                            {this.props.playthrough.name}
                        </Text>
                        <Text style={styles.details}>
                            {this.props.playthrough.deathCount} Deaths  •  {this.props.playthrough.gameName}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.onDelete(this.props.playthrough.id)}>
                        <FontAwesome
                            icon={SolidIcons.times}
                            style={styles.deleteButton}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
}
