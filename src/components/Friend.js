import Button from "./Button";

function Friend({ friend }) {
  const { name, image, balance } = friend;

  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You owe {name} ${Math.abs(balance)}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you ${Math.abs(balance)}
        </p>
      )}
      {balance === 0 && <p>You and {name} are even!</p>}
      <Button>Select</Button>
    </li>
  );
}

export default Friend;
