import { render, screen ,logRoles} from "@testing-library/react";
import React from "react";
import Skills from "./Skills";

/*
    getBy , getAllBy -->>> use this if  elements is  an dom (this is like as assertion)
    queryBy , queryAllBy -->>> use this if  elements is not an dom (this is like as assertion)

    but initially elemnt not in an dom but after sometime it renders in dom , in this case we should use
    findBy, findAllBy
        *** findBy
        -> it returns an promises which resolves an element is found the matches the given query
        ->  promises rejects if no element is found or more than one element is found after a default timeout of 1000ms
        *** findAllBy
        -> it returns an promises which resolves an array of elements is found the matches the given query
        ->  promises rejects if no element is found after a default timeout of 1000ms
*/


// getByRole,  getAllByRole
describe("Skills-1", () => {
    let skills = ["js", "react", "node", "java"];
    it("renders correctly", () => {
        render(<Skills skill={skills} />)
        expect(screen.getByRole("list")).toBeInTheDocument()
    })

    it("renders All lists Items", () => {
        render(<Skills skill={skills} />)
        let listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(skills.length)
    })

    it("renders Login Button", () => {
        render(<Skills skill={skills} />)
        let login_button = screen.getByRole("button", {
            name: "Login"
        });
        expect(login_button).toBeInTheDocument()
    })
});

// queryByRole,  queryByAllRole
describe("Skills-2", () => {
    let skills = ["js", "react", "node", "java"];

    it("renders Not Start Learning Button", () => {
        render(<Skills skill={skills} />)
        let learning_button = screen.queryByRole("button", {
            name: "Start Learning"
        });
        expect(learning_button).not.toBeInTheDocument();
    })
});




// findByRole,  findByAllRole , screen.debug , logroles
describe("Skills-3", () => {
    let skills = ["js", "react", "node", "java"];

    it("renders Start Learning Button", async () => {
      let view=  render(<Skills skill={skills} />)
      logRoles(view.container)
        // screen.debug();
        let learning_button = await screen.findByRole("button", {
            name: "Start Learning"
        },
        {
            timeout: 2000 // default is 1000
        }
        );
        // screen.debug();

        expect(learning_button).toBeInTheDocument();
    })
});
