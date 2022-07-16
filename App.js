import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from "./src/navigator/appNavigator";

import ReadSearchPage from "./src/read/readSearchPage";
import BookStorePage from "./src/read/bookStorePage";

import TopListPage from "./src/read/topListPage";
import BookListPage from "./src/read/bookListPage";
import FreePage from "./src/read/freePage";
import VipPage from "./src/read/vipPage";
import ClassifyPage from "./src/read/classifyPage";
import NewBookPage from "./src/read/newBookPage";
import ListenBookPage from "./src/read/listenBookPage";
function Home() {
    return (
        <AppNavigator/>
    );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator  initialRouteName={"Home"}>
              <Stack.Screen name="Home" component={Home} options={{
                  headerShown: false,
              }}/>
              <Stack.Screen name="read_search" component={ReadSearchPage} options={{
                  title:"阅读搜素",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="book_store" component={BookStorePage} options={{
                  title:"书城",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="classify" component={ClassifyPage} options={{
                  title:"分类",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="topList" component={TopListPage} options={{
                  title:"榜单",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="bookList" component={BookListPage} options={{
                  title:"书单",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="vip" component={VipPage} options={{
                  title:"会员",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="free" component={FreePage} options={{
                  title:"免费",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="newBook" component={NewBookPage} options={{
                  title:"新书",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="listenBook" component={ListenBookPage} options={{
                  title:"听书",
                  headerBackTitle:'返回',
              }}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
