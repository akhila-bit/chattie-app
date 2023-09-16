import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
import firebase from 'firebase/app';
import { auth, database } from '../misc/firebase';

const Signin = () => {
  const signinwithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        database.ref(`profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      Alert.success('Signedin', 4000);
    } catch (e) {
      Alert.error(e.message, 4000);
    }
  };

  const onGooglesignin = () => {
    signinwithProvider(new firebase.auth.GoogleAuthProvider());
  };

  const onfacebooksignin = () => {
    signinwithProvider(new firebase.auth.FacebookAuthProvider());
  };

  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>Progressive chat platform for neophtyes</p>
              </div>

              <div className="mt-3">
                <Button block color="green" onClick={onGooglesignin}>
                  <Icon icon="google" />
                  Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};
export default Signin;
