import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Players from '../../utils/playersEnum';
import styles from './style';

/**
 * Represents a tile that will be coloured depending on what player has clicked on
 * the tile first
 * 
 * @component
 * 
 * @param {number} id the id of the tile in the state that hold all the tiles
 * @param {id} player the id of the player that has tapped on the tile
 * @param {Object} onTouchItemHandler gets called when a tile is pressed and calls the callback with the id of the tile that was pressed
 */
const Tile = ({
    id = undefined,
    player = Players.NONE,
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