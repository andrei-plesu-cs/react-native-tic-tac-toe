import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Players from '../../utils/playersEnum';
import styles from './style';

const Tile = ({
    id = '',
    player = '',
    onTouchItemHandler = () => {}
}) => {

    /** define the return statement bellow */
    return (
        <View key={id} style={styles.tile}>
            <TouchableOpacity 
                onPress={() => onTouchItemHandler(id)} 
                style={[styles.innerItem, {backgroundColor: player === Players.SECOND ? 'red' : (player === Players.FIRST ? 'blue' : '#fff')}]}
            >
                <View></View>
            </TouchableOpacity>
        </View>
    )

}

/** export the component */
export default Tile;