function getNameInitial(name) {
  let splitname = name.toUpper().split(' ');
  if (splitname.length > 1) return splitname[0][0] + splitname[1][0];

  return splitname[0][0];
}
export default getNameInitial;

export function toarraybyId(snap) {
  return snap
    ? Object.keys(snap).map(Id => {
        console.log({ ...snap[Id] });
        return { ...snap[Id], id: Id };
      })
    : [];
}
export async function getUserUpdates(userId, keyToUpdate, value, db) {
  const updates = {};

  updates[`/profiles/${userId}/${keyToUpdate}`] = value;

  // const getMsgs = get(
  //   query(ref(db, '/messages'), orderByChild('author/uid'), equalTo(userId))
  // );
  const getMsgs = db
    .ref('/messages')
    .orderByChild('author/uid')
    .equalTo(userId);

  const getRooms = db
    .ref('/rooms')
    .orderByChild('lastMessage/author/uid')
    .equalTo(userId);
  // Index not defined, add ".indexOn": "author/uid", for path "/messages", to the rules

  const [mSnap, rSnap] = await Promise.all([getMsgs, getRooms]);

  mSnap.forEach(msgSnap => {
    updates[`/messages/${msgSnap.key}/author/${keyToUpdate}`] = value;
  });

  rSnap.forEach(roomSnap => {
    updates[`/rooms/${roomSnap.key}/lastMessage/author/${keyToUpdate}`] = value;
  });

  return updates;
}
