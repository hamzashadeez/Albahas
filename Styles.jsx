import {StyleSheet} from 'react-native'


const Colors = {
    black: '#03192e',
    white: '#fff',
    // pink: "#B83280",
    pink: "pink",
    grey: "#2D3748",
    color1: '#041c32',
    color2: '#04293a',
    color3: '#064663',
}


const Styles = StyleSheet.create({
    screen:{
        flex: 1,backgroundColor: Colors.black
    },

    h1:{
        fontSize: 27,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 15,
        color: Colors.pink,
        letterSpacing: 2
    },

    header:{
        backgroundColor: Colors.color1,elevation: 2

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