import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './style';

/**
 * Simple wrapper on top of the native SafeAreaView that solves the problem of the SafeArea component
 * 
 * @component
 * 
 * @param {Object} children the components that will be passed to this component from the calling container 
 */
const SafeArea = ({
    children
}) => {

    /** define the return statement bellow */
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            {children}
        </SafeAreaView>
    )

}

/** export the component */
export default SafeArea;