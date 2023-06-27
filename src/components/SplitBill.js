import Button from "./Button";

function SplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a Bill with X</h2>
      <h4>Bill Amount</h4>
      <input type="text" />
      <h4>Your Amount</h4>
      <input type="text" />
      <h4>Guest's Amount</h4>
      <input type="text" disabled />

      <h3>Who Is Paying?</h3>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button> Split Bill </Button>
    </form>
  );
}

export default SplitBill;
