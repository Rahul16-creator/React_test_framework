import { render, screen } from "@testing-library/react";
import React from "react";
import Application from "./Application";

//  the order mentioned here is the crt order of priority we need to pick..
//  This is we named as  RTL Query  **** (getBy**)

/*
    the label  of a form element { not working....  }
    the text content of a button or 
    aria-label attribute value
*/

//  getByRole method
describe("Application 1", () => {
    test("renders correctly 1", () => {
        render(<Application />);

        let heading1 = screen.getByRole("heading", {
            name: "Application form",
        });
        expect(heading1).toBeInTheDocument();

        let heading2 = screen.getByRole("heading", {
            level: 2,
        });
        expect(heading2).toBeInTheDocument();

        let textBox = screen.getByRole("textbox", {
            name: "name",
        });
        expect(textBox).toBeInTheDocument();

        let Description = screen.getByRole("textbox", {
            name: "description",
        });
        expect(Description).toBeInTheDocument();

        let select = screen.getByRole("combobox");
        expect(select).toBeInTheDocument();

        let checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeInTheDocument();

        let submitButton = screen.getByRole("button");
        expect(submitButton).toBeInTheDocument();
    });
});

// getByLabeltext method.s
describe("Application 2", () => {
    test("renders correctly 2", () => {
        render(<Application />);

        let nameTextBox = screen.getByLabelText("Name", {
            selector: "input",
        });
        expect(nameTextBox).toBeInTheDocument();

        let aggreCheckBox = screen.getByLabelText(
            "I agree the terms and conditions ?"
        );
        expect(aggreCheckBox).toBeInTheDocument();
    });
});

// getByPlaceholderText method.
describe("Application 3", () => {
    it("renders correctly 3", () => {
        render(<Application />);

        let inputTextBox1 = screen.getByPlaceholderText(/full Name../i);  // substring match with ignore case
        expect(inputTextBox1).toBeInTheDocument();

        let inputTextBox2 = screen.getByPlaceholderText((content) => content.startsWith("Full")); // using function for match cases
        expect(inputTextBox2).toBeInTheDocument();

        let inputTextBox3 = screen.getByPlaceholderText(/Name/); // substring match 
        expect(inputTextBox3).toBeInTheDocument();


        let inputTextBox4 = screen.getByPlaceholderText(/^full name..$/i); // full match with ignore case
        expect(inputTextBox4).toBeInTheDocument();
    });
});

// getByDisplayValue method.
describe('Application 4', () => {
    it("Renders Correctly", () => {
        render(<Application />);
        expect(screen.getByDisplayValue("rahul")).toBeInTheDocument();
    })
})

// getByText method.
describe('Application 5', () => {
    it("Renders Correctly", () => {
        render(<Application />);
        expect(screen.getByText("Application form", {
            selector: "p"
        })).toBeInTheDocument();
    })
})

// getByAltText method. [ img tag ]

// getByTitle method.
describe('Application 6', () => {
    it("Renders Correctly", () => {
        render(<Application />);
        expect(screen.getByTitle("spanTitle")).toBeInTheDocument();
    })
})

// getByTestId method.
describe('Application 7', () => {
    it("Renders Correctly", () => {
        render(<Application />);
        expect(screen.getByTestId("custom id")).toBeInTheDocument();
    })
})