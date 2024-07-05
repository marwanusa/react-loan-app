import { useState } from "react";
import Popup from "./Popup";
import "./LoanForm.css";

export default function LoanForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    Salary: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg ,setPopupMsg] = useState("");
  const [popupColor ,setPopupColor] = useState("");

  let validation;
  if (
    formInputs.age &&
    formInputs.isEmployee &&
    formInputs.name &&
    formInputs.phoneNumber !== ""
  ) {
    validation = true;
  }

 function handleSubmitClick(event){
    event.preventDefault();
    if(formInputs.age < 21)
        {
            setPopupMsg("Sorry, you are not eligible for a loan you must be above 21.")
            setPopupColor("red")
            setShowPopup(true)
        }else if (formInputs.phoneNumber.length < 11){
            setPopupMsg("Sorry, your phone number is not valid.")
            setPopupColor("red")
            setShowPopup(true)
        }else{
            setPopupMsg("Congrats, you are eligible for a loan.")
            setPopupColor("green")
            setShowPopup(true)
        }
 }

  return (
    <div className="container">
        {showPopup && <Popup color={popupColor}Theissue={popupMsg} />}
      <form onSubmit={handleSubmitClick}>
        <h1>Requesting a Loan</h1>
        <hr />
        <label>Name :</label>
        <input
          type="text"
          value={formInputs.name}
          onChange={(e) => {
            setFormInputs({ ...formInputs, name: e.target.value });
          }}
        />
        <label>Phone Number :</label>
        <input
          type="text"
          value={formInputs.phoneNumber}
          onChange={(e) => {
            setFormInputs({ ...formInputs, phoneNumber: e.target.value });
          }}
        />
        <label>Age :</label>
        <input
          type="number"
          value={formInputs.age}
          onChange={(e) => {
            setFormInputs({ ...formInputs, age: e.target.value });
          }}
        />
        <label>Are you an employee ?</label>
        <input
          style={{
            height: "30px",
            width: "30px",
          }}
          type="checkbox"
          checked={formInputs.isEmployee}
          onChange={(e) => {
            setFormInputs({ ...formInputs, isEmployee: e.target.checked });
          }}
        />
        <label>Salary :</label>
        <select
          value={formInputs.Salary}
          onChange={(e) => {
            setFormInputs({ ...formInputs, Salary: e.target.value });
          }}
        >
          <option value="500">$500</option>
          <option value="500-1000">between $500, $1000</option>
          <option value="1000+">over $1000</option>
        </select>
        <br />
        <button
          className={validation ? "submitBtnAct" : "submitBtnDe"}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
