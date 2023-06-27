import { useState } from "react";
import Button from "./Button";

function SplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [userAmount, setUserAmount] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - userAmount : "";

  return (
    <form className="form-split-bill">
      <h2>Split a Bill with {selectedFriend.name}</h2>
      <h4>Bill Amount</h4>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <h4>Your Amount</h4>
      <input
        type="text"
        value={userAmount}
        onChange={(e) =>
          setUserAmount(
            Number(e.target.value) > bill ? userAmount : Number(e.target.value)
          )
        }
      />
      <h4>{selectedFriend.name}'s Amount</h4>
      <input type="text" disabled value={paidByFriend} />

      <h3>Who Is Paying?</h3>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button> Split Bill </Button>
    </form>
  );
}

export default SplitBill;
