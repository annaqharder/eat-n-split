import Friend from "./Friend";

function FriendList({ friends }) {
  const friendList = friends.map((friend) => (
    <Friend friend={friend} key={friend.id} />
  ));

  return <ul>{friendList}</ul>;
}

export default FriendList;
