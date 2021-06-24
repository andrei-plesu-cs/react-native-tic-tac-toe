import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, Button } from 'react-native';
import SafeArea from './components/SafeArea';
import Players from './utils/playersEnum';
import Tile from './components/Tile';
import CurrentPlayerText from './components/CurrentPlayerText';

const getInitialState = () => {
  let state = [];
  for(let i=0; i<9; i++) {
    state.push({id: i+1, player: Players.NONE})
  };

  return state;
}

const App = ({

}) => {

  const [state, setState] = useState(getInitialState());
  const [currentPlayer, setCurrentPlayer] = useState(Players.FIRST);

  const onTouchItemHandler = itemId => {
    const stateCopy = state.map(m => {
      if (m.id === itemId)
        m.player = currentPlayer;
      return m;
    });
    
    setState(stateCopy);
    let newPlayer = currentPlayer === Players.FIRST ? Players.SECOND : Players.FIRST;
    setCurrentPlayer(newPlayer);
  }

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