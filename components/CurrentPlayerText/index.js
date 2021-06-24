import React from 'react';
import { Text } from 'react-native';
import Players from '../../utils/playersEnum';
import styles from './style';

const CurrentPlayerText = ({
    currentPlayer = Players.FIRST
}) => {

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