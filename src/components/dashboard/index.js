import { Alert, Button, Divider, Drawer } from 'rsuite';
import { ref, update } from 'firebase/database';

import { useProfile } from '../../context/profile.context';
import { EditableInput } from '../EditableInput';
import { database } from '../../misc/firebase';
import { ProvideBlock } from './ProvideBlock';
// import AvatUploadBtn from './AvatUploadBtn';
import { getUserUpdates } from '../../misc/helpers';

const Dashboard = ({ OnsignOut }) => {
  const { profile } = useProfile();
  const onSave = async newData => {
    try {
      const updates = await getUserUpdates(
        profile.uid,
        'name',
        newData,
        database
      );

      await update(ref(database), updates);

      Alert.success('Nickname has been updated', 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };
  // const onSave = async newData => {
  //   console.log(newData);
  //   const useNameRef = database.ref(`/profiles/${profile.uid}`).child('name');
  //   try {
  //     await useNameRef.set(newData);
  //     Alert.success('Name updated', 4000);
  //   } catch (e) {
  //     Alert.error(e.message, 4000);
  //   }
  // };
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
        <ProvideBlock />
      </Drawer.Header>
      {/*  */}
      <Drawer.Body>
        <h3>Hey {profile.name}</h3>
        <Divider />

        <EditableInput
          name="nickname"
          inputValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-5"> Nickname</h6>}
        />
        {/* <AvatUploadBtn /> */}
      </Drawer.Body>

      <Drawer.Footer>
        <Button block color="red" onClick={OnsignOut}>
          Signout
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;
