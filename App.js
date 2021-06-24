import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import SafeArea from './components/SafeArea';
import Players from './utils/playersEnum';
import Tile from './components/Tile';
import CurrentPlayerText from './components/CurrentPlayerText';
import { hasWon, isTie } from './utils/gameLogic';

const getInitialState = () => {
  let state = [];
  for(let i=0; i<9; i++) {
    state.push({id: i+1, player: Players.NONE})
  };

  return state;
}

const App = ({

}) => {


  /** DEFINE THE STATE BELLOW */

  const [state, setState] = useState(getInitialState());
  const [currentPlayer, setCurrentPlayer] = useState(Players.FIRST);


  /** DEFINE THE EFFECTS BELLOW */

  /** gets called when the state of the game changes so we could check
   * if one player has won the game or if there is a tie. If the game cannot be continued,
   * either because one player has won or there is a tie, open an alert with the option to reset the game
   */
  useEffect(() => {

    /** check if someone has won the game */
    let winner = hasWon(state);
    if (winner === Players.NONE) {

      /** if not check if there is a tie */
      if (isTie(state))
        Alert.alert(
          "The game is over",
          "There has been a tie",
          [
            {
              text: "Reset",
              onPress: () => setState(getInitialState()),
            },
          ]
        );
    } else {
      Alert.alert(
        "The game is over",
        `Player ${winner === Players.FIRST ? 'one' : 'two'} has won`,
        [
          {
            text: "Reset",
            onPress: () => setState(getInitialState()),
          },
        ]
      );
    }
  }, [state]);


  /** DEFINE THE HANDLERS BELLOW */

  /** gets called when a tile has been touched
   * 
   * @param {number} itemId the id of the selected item
   */
  const onTouchItemHandler = itemId => {
    let shouldChangePlayer = false;

    const stateCopy = state.map(m => {
      if (m.id === itemId && m.player === Players.NONE) {
        m.player = currentPlayer;
        shouldChangePlayer = true;
      }

      return m;
    });

    setState(stateCopy);

    if (!shouldChangePlayer) return;
    let newPlayer = currentPlayer === Players.FIRST ? Players.SECOND : Players.FIRST;
    setCurrentPlayer(newPlayer);
  }

  /** renders an item (tile)
   * 
   * @param {Object} item the item that will be rendered
   * @param {number} item.id the id of the item that will be rendered
   * @param {player} item.player the player that owns the tile. Players.NONE if no player owns the tile yet
   */
  const renderItem = item => {
    return (
      <Tile 
        key={item.id} 
        {...item} 
        onTouchItemHandler={onTouchItemHandler} 
      />
    )
  }
  

  /** define the return statement bellow */
  return (
    <SafeArea>
      <View style={styles.bigContainer}>

        <View style={styles.upperContainer}>
          <CurrentPlayerText currentPlayer={currentPlayer} />
        </View>

        <View style={styles.container}>
          {
            state.map(renderItem)
          }
        </View>

        <View style={styles.lowerContainer}>
          <Button
            title="Reset"
            onPress={() => setState(getInitialState())}
          />
        </View>
        
      </View>
    </SafeArea>
  )

}

/** define the styles for the App.js component */
const styles = StyleSheet.create({
  bigContainer: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  upperContainer: {
    position: 'absolute',
    top: 20
  },
  lowerContainer: {
    position: 'absolute',
    bottom: 20
  }
});

// export the component
export default App;