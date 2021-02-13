import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

class ActionsButtons extends Component {
    render() {

        const { reset,plus } = this.props;

        return (
            <React.Fragment>
                <TouchableOpacity
                    onPress={reset}
                    style={styles.btnReset} >
                    <Text style={styles.btnTextReset} >Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={plus}
                    style={styles.btnReset} >
                    <Text style={styles.btnTextReset} >+10</Text>
                </TouchableOpacity>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    btnReset: {
        marginTop: 50,
        width: 100,
        height: 50,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
    },
    btnTextReset: {
        color: '#7f8c8d',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default ActionsButtons;
