import React from "react";

const Application = () => {
  return (
    <>
      <h1>Application form</h1>
      <h2>Section 1</h2>

      <p>Application form</p>

      <span title="spanTitle">hello</span>

      <div data-testid="custom id">custom id</div>

      <div style={{ width: "300px", marginTop: "20px", marginLeft: "20px" }}>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="text">Name</label>
          <input
            aria-label="name"
            type="text"
            name="name"
            id="text"
            placeholder="Full Name.."
            value={"rahul"}
            onChange={() => {}}
          />

          <label htmlFor="description">Description</label>
          <textarea
            aria-label="description"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>

          <label htmlFor="location">Name</label>
          <select id="location">
            <option value=""></option>
            <option value="us">united states</option>
            <option value="uk">united kingdom</option>
            <option value="fr">france</option>
            <option value="ind">india</option>
          </select>

          <label>
            <input type="checkbox" name="" id="" /> I agree the terms and
            conditions ?
          </label>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Application;
