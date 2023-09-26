import { createContext, useContext, useEffect, useState } from 'react';
import { database } from '../misc/firebase';
import { toarraybyId } from '../misc/help';

const RoomContext = createContext();
export const RoomsProvider = ({ children }) => {
  const [Rooms, setooms] = useState(null);
  useEffect(() => {
    const roomListref = database.ref('rooms');
    roomListref.on('value', snap => {
      console.log(snap.val());

      const data = toarraybyId(snap.val());
      console.log(data);
      setooms(data);
    });
    return () => {
      roomListref.off();
    };
  }, []);
  console.log(Rooms);
  return <RoomContext.Provider value={Rooms}>{children}</RoomContext.Provider>;
};

export const useRoom = () => useContext(RoomContext);
