import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./Db";

function List() {
    const friends = useLiveQuery(() => db.friends.toArray());

  return (
    <ul>
      {friends?.map((friend) => (
        <li key={friend.id}>
          {friend.name}, {friend.age}
        </li>
      ))}
    </ul>
  )
}

export default List;

