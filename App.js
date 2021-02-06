import React from 'react';
import { StyleSheet, View } from 'react-native';
// import * as firebase from 'firebase';
// import Home from './src/screren/Home'
// import Contact from './src/screren/Contact'
// import About from './src/screren/About'
import Navigation from './src/config/Nav'


// const firebaseConfig = {
//   apiKey: "AIzaSyD70WIZUPNkFt4pWcbILvaXU7Q3JkvxLC0",
//   authDomain: "native-47458.firebaseapp.com",
//   databaseURL: "https://native-47458-default-rtdb.firebaseio.com",
//   projectId: "native-47458",
//   storageBucket: "native-47458.appspot.com",
//   messagingSenderId: "61297949748",
//   appId: "1:61297949748:web:552c8eee6de9b509325e61",
//   measurementId: "G-NH5BED9775"
// };
// firebase.initializeApp(firebaseConfig);

export default function App() {


  return (

      <Navigation />
    // <Container style={styles.container}>
    //     <Content>
    //       <Form>
    //         <Item floatingLabel>
    //           <Label>Username</Label>
    //           <Input 
              
    //           />
    //         </Item>
    //         <Item floatingLabel last>
    //           <Label>Password</Label>
    //           <Input />
    //         </Item>
    //         <Button style={{marginTop:30}}
            
    //         block
    //         success
    //         >
    //           <Text style={{color:"black"}}>Login</Text>
    //         </Button>
    //         <Button style={{marginTop:30}}
    //        block 
    //         >
    //           <Text  style={{color:"white"}}>Sign Up</Text>
    //         </Button>
    //       </Form>
    //     </Content>
    //   </Container>

  //   <Container>
  //   <Header />
  //   <Content>
  //     <Card>
  //       <CardItem>
  //         <Icon active name="logo-googleplus" />
  //         <Text>Google Plus</Text>
  //         <Right>
  //           <Icon name="arrow-forward" />
  //         </Right>
  //        </CardItem>
  //        <CardItem>
  //             <Icon active name="logo-googleplus" />
  //             <Text>Google Plus</Text>
  //             <Right>
  //               <Icon name="arrow-backward" />
  //             </Right>
  //            </CardItem>
  //            <CardItem>
  //             <Left>
  //               <Thumbnail source={{uri: 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
  //               <Body>
  //                 <Text>NativeBase</Text>
  //                 <Text note>GeekyAnts</Text>
  //               </Body>
  //             </Left>
  //           </CardItem>
  //      </Card>
  //      <ListItem>
  //           <CheckBox  />
  //           <Body>
  //             <Text>Daily Stand Up</Text>
  //           </Body>
  //         </ListItem>
  //         <ListItem>
  //           <CheckBox checked={true} color="green"/>
  //           <Body>
  //             <Text>Finish list Screen</Text>
  //           </Body>
  //         </ListItem>
  //         <ScrollView></ScrollView>
  //         <List>
  //           <ListItem avatar>
  //             <Left>
  //               <Thumbnail source={{ uri: 'https://images.pexels.com/photos/5749784/pexels-photo-5749784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
  //             </Left>
  //             <Body>
  //               <Text>Kumar Pratik</Text>
  //               <Text note>Doing what you like will always keep you happy . .</Text>
  //             </Body>
  //             <Right>
  //               <Text note>3:43 pm</Text>
  //             </Right>
  //           </ListItem>
  //         </List>
  //         <List>
  //           <ListItem avatar>
  //             <Left>
  //               <Thumbnail source={{ uri: 'https://images.pexels.com/photos/5749784/pexels-photo-5749784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
  //             </Left>
  //             <Body>
  //               <Text>Kumar Pratik</Text>
  //               <Text note>Doing what you like will always keep you happy . .</Text>
  //             </Body>
  //             <Right>
  //               <Text note>3:43 pm</Text>
  //             </Right>
  //           </ListItem>
  //         </List>
  //         <List>
  //           <ListItem avatar>
  //             <Left>
  //               <Thumbnail source={{ uri: 'https://images.pexels.com/photos/5749784/pexels-photo-5749784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
  //             </Left>
  //             <Body>
  //               <Text>Kumar Pratik</Text>
  //               <Text note>Doing what you like will always keep you happy . .</Text>
  //             </Body>
  //             <Right>
  //               <Text note>3:33 pm</Text>
  //             </Right>
  //           </ListItem>
  //         </List>
       
      
      
  //   </Content>
  // </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 220,
  },
});
