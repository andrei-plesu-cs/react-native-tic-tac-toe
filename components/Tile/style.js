import { StyleSheet, Platform, StatusBar } from 'react-native';

/** define the styles for the component */
const styles = StyleSheet.create({
    tile: {
        width: '33.33%',
        padding: 10,
        aspectRatio: 1,
    },
    innerItem: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black'
    }
})

export default styles;