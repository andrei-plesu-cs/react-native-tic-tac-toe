import React from 'react';
import { Text } from 'react-native';
import Players from '../../utils/playersEnum';
import styles from './style';

/**
 * Displays text at the top of the page, telling which player turn is
 * 
 * @component
 * 
 * @param {number} currentPlayer the current player in the game 
 */
const CurrentPlayerText = ({
    currentPlayer = Players.FIRST
}) => {


    /** DEFINE THE HANDLERS BELLOW */

    /** renders the text according to the current player */
    const renderPlayerText = () => {
        switch (currentPlayer) {
            case Players.FIRST:
            return "Player one turn";
            case Players.SECOND:
            return "Player two turn";
            default:
            return "What player is it ???";
        }
    }
    

    /** define the return statement bellow */
    return (
        <Text style={styles.text}>{renderPlayerText()}</Text>
    )

}

/** export the component */
export default CurrentPlayerText;