import { Alert, Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import { EditableInput } from '../EditableInput';
import { database } from '../../misc/firebase';
import { ProvideBlock } from './ProvideBlock';

const Dashboard = ({ OnsignOut }) => {
  const { profile } = useProfile();
  const onSave = async newData => {
    console.log(newData);
    const useNameRef = database
      .ref(
        `/pr
    ofiles/${profile.uid}`
      )
      .child('name');
    try {
      await useNameRef.set(newData);
      Alert.success('Name updated', 4000);
    } catch (e) {
      Alert.error(e.message, 4000);
    }
  };
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
