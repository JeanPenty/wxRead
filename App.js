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

import FriendMindPage from "./src/found/friendMindPage";
import CirclePage from "./src/found/circlePage";
import FoundVipPage from "./src/found/VipPage";
import FoundFreePage from "./src/found/freePage";
import WellBeingPage from "./src/found/wellBeingPage";
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

              <Stack.Screen name="found_friend_mind" component={FriendMindPage} options={{
                  title:"朋友的想法",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="found_circle" component={CirclePage} options={{
                  title:"小圈子",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="found_vip" component={FoundVipPage} options={{
                  title:"付费会员专享",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="found_free" component={FoundFreePage} options={{
                  title:"免费领书",
                  headerBackTitle:'返回',
              }}/>
              <Stack.Screen name="found_well_being" component={WellBeingPage} options={{
                  title:"福利场",
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
