import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import { StyleSheet, Text, View } from 'react-native';

Amplify.configure({
    Auth: {
        identityPoolId: 'arn:aws:cognito-idp:us-east-1:140109379489:userpool/us-east-1_ebxdGuzZF', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'US East (Virginia)', // REQUIRED - Amazon Cognito Region
        userPoolId: 'us-east-1_ebxdGuzZF', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: '344vf234u1okuch0u7jqulgte3', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Analytics: {
      appId: '344vf234u1okuch0u7jqulgte3', //OPTIONAL -  Amazon Pinpoint App ID
      region: 'US East (Virginia)', //OPTIONAL -  Amazon service region
  }
  
 });

// const AppWithAuth = withAuthenticator(App);

// const federated = {
//     google_client_id: '931888698125-affefnf2d3gl8qgs3qo18ec18rdv46ul.apps.googleusercontent.com',
// };

// ReactDOM.render(<AppWithAuth federated={federated}/>, document.getElementById('root'))




 class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);