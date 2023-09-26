import TimeAgo from 'timeago-react';
const Roomitem = ({ room }) => {
  const { createdAt, name } = room;
  console.log(room);
  return (
    <div>
      <div className="d-flex justify-content-between align-item-center">
        <h3 className="text-disappear">{name}</h3>
        <TimeAgo
          datetime={new Date(createdAt)}
          className="font-normal text-black-45"
        />
      </div>

      <div className="d-flex align-item-center text-black-70">
        <span>No messages yet ...</span>
      </div>
    </div>
  );
};

export default Roomitem;
