import "./input.css"
export default function Input({ inputName, labelName, handleInputchange }) {
  function handleChange(e) {
    let value = Number(e.target.value);
    handleInputchange(value, labelName);
  }

  return (
    <>
      <div>
        <label htmlFor={labelName}>{inputName}</label>
        <input
          type="number"
          name={labelName}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
}
