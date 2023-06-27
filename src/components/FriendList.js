import Friend from "./Friend";

function FriendList({ friends, onSelection, selectedFriend }) {
  const friendList = friends.map((friend) => (
    <Friend
      friend={friend}
      key={friend.id}
      onSelection={onSelection}
      selectedFriend={selectedFriend}
    />
  ));

  return <ul>{friendList}</ul>;
}

export default FriendList;
