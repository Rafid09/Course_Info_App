import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import Semesters from './src/screens/Semesters'
import semester_1 from './src/screens/semester_1'
import semester_2 from './src/screens/semester_2'
import semester_3 from './src/screens/semester_3'
import FacultyList from './src/screens/FacultyList'

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component= {Home} />
        <stack.Screen name="Profile" component= {Profile}/>
        <stack.Screen name="Semesters" component= {Semesters}/>
        <stack.Screen name="semester_1" component= {semester_1}/>
        <stack.Screen name="semester_2" component= {semester_2}/>
        <stack.Screen name="semester_3" component= {semester_3}/>
        <stack.Screen name="FacultyList" component= {FacultyList}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App