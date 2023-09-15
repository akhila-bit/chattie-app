import { Alert, Button, Drawer, Icon } from 'rsuite';
import Dashboard from '.';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import { useCallback } from 'react';
import { auth } from '../../misc/firebase';

const DashboardToggle = () => {
  const [isOpen, open, close] = useModalState();
  const isMobile = useMediaQuery('max-width:992px');
  const onSignout = useCallback(() => {
    auth.signOut();
    Alert.info('Signedout', 4000);
    close();
  }, [close]);

  return (
    <div>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" />
        Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <Dashboard OnsignOut={onSignout} />
      </Drawer>
    </div>
  );
};

export default DashboardToggle;
