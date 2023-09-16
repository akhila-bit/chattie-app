import { useState } from 'react';
import { auth } from '../../misc/firebase';
import { Alert, Button, Icon, Tag } from 'rsuite';
import firebase from 'firebase/app';

export const ProvideBlock = () => {
  console.log(auth.currentUser.providerData[0].providerId);
  const [isConnected, setisConnected] = useState({
    'google.com': auth.currentUser.providerData.some(
      data =>
        // console.log(data.providerId === 'google.com');
        data.providerId === 'google.com'
    ),
    'facebook.com': auth.currentUser.providerData.some(
      data => data.providerId == 'facebook.com'
    ),
  });
  console.log(isConnected);

  const updateisConnected = (providerId, value) => {
    setisConnected(p => {
      return {
        ...p,
        [providerId]: value,
      };
    });
  };
  const unlink = async providerId => {
    try {
      if (auth.currentUser.providerData.length === 1) {
        throw new Error(`cant disconnect fom ${providerId}`);
      }
      await auth.currentUser.unlink(providerId);
      updateisConnected(providerId, false);
      Alert.info(`Disconnected fom ${providerId}`, 4000);
    } catch (e) {
      Alert.error(e.message, 4000);
    }
  };

  const unlinkFacebook = () => {
    unlink('facebook.com');
  };
  const unlinkGoogle = () => {
    unlink('google.com');
  };

  const link = async providerObj => {
    try {
      await auth.currentUser.linkWithPopup(providerObj);
      Alert.info(`Linked to  ${providerObj.providerId}`, 4000);
      updateisConnected(providerObj.providerId, true);
    } catch (e) {
      Alert.error(e.message, 4000);
    }
  };

  const linkfacebook = () => {
    link(new firebase.auth.FacebookAuthProvider());
  };
  const linkgoogle = () => {
    link(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <div>
      {isConnected['google.com'] && (
        <Tag color="green" closable onClose={unlinkGoogle}>
          <Icon icon="google" />
          Connected
        </Tag>
      )}
      {isConnected['facebook.com'] && (
        <Tag color="blue" closable onClose={{ unlinkFacebook }}>
          <Icon icon="facebook" />
          Connected
        </Tag>
      )}

      <div className="mt-2">
        {!isConnected['google.com'] && (
          <Button block color="green" onClick={linkgoogle}>
            <Icon icon="google" />
            Link to Google
          </Button>
        )}
        {!isConnected['facebook.com'] && (
          <Button block color="blue" onClick={linkfacebook}>
            <Icon icon="facebook" />
            Link to facebook
          </Button>
        )}
      </div>
    </div>
  );
};
