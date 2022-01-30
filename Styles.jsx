import {StyleSheet} from 'react-native'


const Colors = {
    black: '#111',
    white: '#fff',
    pink: "#B83280",
    grey: "#2D3748"
}


const Styles = StyleSheet.create({
    screen:{
        flex: 1,
    },

    h1:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15
    },

    p:{
        fontSize: 15,
        color: '#ddd'
    }

})


export {
    Colors,
    Styles
}