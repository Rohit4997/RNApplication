import React from "react";
import { Text, TouchableOpacity, View} from 'react-native';


const About = ({navigation}) => {
    return(
        <View>
            <Text>About Screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Text>Go To Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

export default About;