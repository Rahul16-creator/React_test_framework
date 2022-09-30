import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Counter from "./Counter";

/*

** convenience api **
    userEvent methods :
    click
    dblclick
    tripleclick
    hover
    unhover

** pointer api's **
   pointer({keys:'[MouseLeft]'})
   pointer({keys:'[MouseLeft][MouseRight]'})
   pointer('[MouseLeft][MouseRight]')
   pointer('[MouseLeft>]')
   pointer('[/MouseLeft]')

*/

describe("Counter 1", () => {
    it("renders correctly", () => {
        render(<Counter />)
        expect(screen.getByRole("heading")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Increment" })).toBeInTheDocument();
    })

    it("renders count 0", () => {
        render(<Counter />)
        expect(screen.getByRole("heading")).toHaveTextContent("0");
    })

    it("renders increment count when user click the button", async () => {
        render(<Counter />)
        userEvent.setup();
        let incrementButton = screen.getByRole("button", {
            name: "Increment"
        })

        await userEvent.click(incrementButton);
        expect(screen.getByRole("heading")).toHaveTextContent("1");
    })

    it("renders increment count when user click twice the button", async () => {
        render(<Counter />)
        userEvent.setup();
        let incrementButton = screen.getByRole("button", {
            name: "Increment"
        })

        await userEvent.dblClick(incrementButton);
        expect(screen.getByRole("heading")).toHaveTextContent("2");
    })

    it("renders increment count by type the number", async () => {
        render(<Counter />)
        userEvent.setup();
        //  for type number in input tag we should use role type as 'spinbutton'
        let amountInput = screen.getByRole("spinbutton")

        await userEvent.type(amountInput, "10");
        expect(amountInput).toHaveValue(10);
    })

    it("renders count by set button", async () => {
        render(<Counter />)
        userEvent.setup();
        let SetButton = screen.getByRole("button", {
            name: "Set"
        })
        await userEvent.click(SetButton);
        expect(screen.getByRole("heading")).toHaveTextContent("0")
    })
})


