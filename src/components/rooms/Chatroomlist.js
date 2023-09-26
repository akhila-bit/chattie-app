import { Loader, Nav } from 'rsuite';
// import NavItem from 'rsuite/lib/Nav/NavItem';
import { Link, useLocation } from 'react-router-dom';

import Roomitem from './RoomItem';
import { useRoom } from '../../context/rooms.context';
import NavItem from 'rsuite/lib/Nav/NavItem';

const Chatroomlist = ({ aboveElheight }) => {
  const rooms = useRoom();
  console.log(rooms);
  const location = useLocation();
  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      // eslint-disable-next-line no-undef
      style={{ height: `calc(100% - ${aboveElheight}px)` }}
      className="overflow-y-scroll custom-scroll"
      activeKey={location.pathname}
    >
      {!rooms && (
        <Loader vertical center content="isLoading" size="md" speed="slow" />
      )}
      {rooms &&
        rooms.length > 0 &&
        rooms.map(room => (
          <Nav.Item
            as={Link}
            to={`/chat/${room.id}`}
            key={room.id}
            eventKey={`/chat/${room.id}`}
          >
            <Roomitem room={room} />
          </Nav.Item>
        ))}
    </Nav>
  );
};

export default Chatroomlist;
