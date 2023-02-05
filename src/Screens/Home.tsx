import React from "react";
import {
    SafeAreaView,
    StatusBar,
    Text,
    useColorScheme,
    View,
    StyleSheet
  } from 'react-native';

import NavBar from '../Components/NavBar';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from "react-native-gesture-handler";


const Home = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={styles.view}>
        <Text style={styles.text}>Home Screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("About")}>
            <Text style={styles.text}>Go To About</Text>
            </TouchableOpacity>

        </View>
 
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>InitApp.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView> */}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  view:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    width: 200,
    backgroundColor: "grey"
  },

  text:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : "red"
  }
});

export default Home;