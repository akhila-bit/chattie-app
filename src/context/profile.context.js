import { useContext, createContext, useState, useEffect } from 'react';
import { auth, database } from '../misc/firebase';

const ProfileContext = createContext();
export const ProfileProvider = ({ children }) => {
  const [profile, setprofile] = useState(null);
  const [isLoding, setisLoding] = useState(true); //track of signin

  useEffect(() => {
    let userRef;
    //global pofile state mgmt subscibe to realtime sub
    const authUnsub = auth.onAuthStateChanged(authObj => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on('value', snap => {
          const { name, createdAt, avata } = snap.val();
          const data = {
            name,
            avata,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };
          setprofile(data);
          setisLoding(false);
        });
      } else {
        if (userRef) {
          userRef.off();
        }
        setprofile(null);
        setisLoding(false);
      }
    });
    return () => {
      authUnsub();
      if (userRef) {
        userRef.off();
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, isLoding }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
