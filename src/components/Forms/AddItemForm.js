const AddItemForm = () => {
  const onSubmit = () => {
    alert("What the hell");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="buttons level-right mx-3">
          <button className="button is-small is-primary">Save</button>
        </div>
      </form>
    </>
  );
};

export default AddItemForm;
