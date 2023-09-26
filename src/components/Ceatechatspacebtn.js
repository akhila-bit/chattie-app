import {
  Alert,
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Icon,
  Modal,
  Schema,
} from 'rsuite';
import { useModalState } from '../misc/custom-hooks';
import { useCallback, useRef, useState } from 'react';
import firebase from 'firebase/app';
import { database } from '../misc/firebase';
const INITIAL_FOM = {
  name: '',
  desc: '',
};
export const Ceatechatspacebtn = () => {
  const [isOpen, open, close] = useModalState();
  const [fomvalue, setFomState] = useState(INITIAL_FOM);
  const [isLoding, setisLoding] = useState(false);
  const fomref = useRef();

  const { StringType } = Schema.Types;
  const model = Schema.Model({
    name: StringType().isRequired('Chat name req'),
    desc: StringType().isRequired('desc  req'),
  });
  const onFomchange = useCallback(value => {
    setFomState(value);
  }, []);
  const onSubmit = async () => {
    if (!fomref.current.check()) {
      return;
    }
    setisLoding(true);
    const newFomdata = {
      ...fomvalue,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    };

    try {
      await database.ref('rooms').push(newFomdata);
      Alert.info(`${fomvalue.name} has been ceated`, 4000);

      setisLoding(false);
      setFomState(INITIAL_FOM);
      close();
    } catch (e) {
      setisLoding(false);
      Alert.error(e.message, 4000);
    }
  };
  return (
    <div className="mt-2">
      <Button block color="green" onClick={open}>
        <Icon icon="creative" />
        CEATE NEW CHAT SPACE
      </Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title> New chat space</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            fluid
            onChange={onFomchange}
            formValue={fomvalue}
            model={model}
            ref={fomref}
          >
            <FormGroup>
              <ControlLabel>Room name</ControlLabel>
              <FormControl name="name" placeholder="Ente chat room name.." />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Desc</ControlLabel>
              <FormControl
                componentClass="textarea"
                row={5}
                name="desc"
                placeholder="Ente room desc.."
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            block
            appearance="primary"
            onClick={onSubmit}
            disabled={isLoding}
          >
            Ceate new chat space
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
