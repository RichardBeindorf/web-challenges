import "./EntryForm.css";
import Button from "../Button";

export default function EntryForm({ onAddEntry }) {

  function handleSubmit(e){
    e.preventDefault();
    // const form = document.getElementById("entry-Form");
    const formData = new FormData(e.target)
    console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data);

    onAddEntry(data);

    e.target.reset();
    e.target.elements.notes.focus();
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}
