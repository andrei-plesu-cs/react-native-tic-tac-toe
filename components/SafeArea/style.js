import { StyleSheet, Platform, StatusBar } from 'react-native';

/** define the styles for the component */
const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
})

export default styles;