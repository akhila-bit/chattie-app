import { Divider } from 'rsuite';
import { Ceatechatspacebtn } from './Ceatechatspacebtn';
import DashboardToggle from './dashboard/DashboardToggle';
import Chatroomlist from './rooms/Chatroomlist';
import { useEffect, useRef, useState } from 'react';

const SideBar = () => {
  const topsidebarRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (topsidebarRef.current) {
      setHeight(topsidebarRef.current.scrollHeight);
    }
  }, [topsidebarRef]);
  return (
    <div className="h-100 pt-2">
      <div ref={topsidebarRef}>
        <DashboardToggle />
        <Ceatechatspacebtn />
        <Divider>Join the Conversation</Divider>
      </div>
      <Chatroomlist aboveElheight={height} />
    </div>
  );
};

export default SideBar;
