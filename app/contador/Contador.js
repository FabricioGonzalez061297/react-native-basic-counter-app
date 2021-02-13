import React, { PureComponent } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import CustomButton from './Button';
import ActionsButtons from './ActionsButtons';

//pure conponent mejor performance que necesitan comprobra que no ha cambiado el estado
export class Contador extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handlePlus10 = this.handlePlus10.bind(this);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     const { counter } = this.state;
    //     if (nextState.counter === counter) { return false; }

    //     return true;
    // }

    handleUp() {
        const { counter: ct } = this.state;
        this.setState({ counter: ct + 1 });
    }

    handleDown() {
        const { counter: ct } = this.state;
        this.setState({ counter: ct - 1 });
    }

    handleReset() {
        this.setState({ counter: 0 });
    }

    handlePlus10() {
        const { counter: ct } = this.state;

        this.setState({ counter: ct + 10 });

    }

    render() {

        const { counter } = this.state;

        return (
            <View style={styles.container} >
                <View style={styles.subcontainer} >
                    <CustomButton label="-" action={this.handleDown} />

                    <View style={styles.counterContainer}>

                        <Text style={styles.counter} > {counter} </Text>

                    </View>

                    <CustomButton label="+" action={this.handleUp} />
                </View>
                <View style={styles.subcontainer} >
                    <ActionsButtons plus={this.handlePlus10} reset={this.handleReset} />
                </View>
            </View>
        );
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
    },
    subcontainer: {
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },

    counterContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },
});
