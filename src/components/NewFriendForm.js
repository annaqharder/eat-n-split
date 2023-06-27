import Button from "./Button";

function NewFriendForm() {
  return (
    <form className="form-add-friend">
      <h4> Friend Name</h4>
      <input type="text" />
      <h4> Image URL</h4>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

export default NewFriendForm;
