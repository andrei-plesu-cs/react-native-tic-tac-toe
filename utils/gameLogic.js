/**
 * In this file you could find the game logic
 */

import Players from "./playersEnum"

/**
 * Returns the player that has won if any, or the default player in case none of the
 * players has finished the game
 */
export const hasWon = state => {

    let mappedState = state.map(m => m.player);
    let checkedPlayers = [Players.FIRST, Players.SECOND];

    for(let j=0; j<checkedPlayers.length; j++) {
        let player = checkedPlayers[j];

        /** check if the game is won on vertical */
        for(let i=0; i<3; i++) {        
            if (mappedState[i*3] === player && mappedState[i*3+1] === player && mappedState[i*3+2] === player)
                return player;    
        }

        /** check if the game is won on horizontal */
        for(let i=0; i<3; i++) {        
            if (mappedState[i] === player && mappedState[i+3] === player && mappedState[i+6] === player)
                return player;    
        }

        /** check the first diagonal */
        if (mappedState[0] === player && mappedState[4] === player && mappedState[8] === player)
            return player;
            
        /** check the second diagonal */
        if (mappedState[2] === player && mappedState[4] === player && mappedState[6] === player)
            return player;

    }

    return Players.NONE;

}

/**
 * Determines wheter there is a tie in the game or not
 */
export const isTie = state => {
    return !state
        .map(m => m.player)
        .includes(Players.NONE);
}