import { render, screen } from "@testing-library/react"
import Greet from "./greet"

//  describe.only , describe.skip
describe("Greet",()=>{  
    test("greet render correctly",()=>{
        render(<Greet />)
        let text=screen.getByText(/Greet/i);
        expect(text).toBeInTheDocument();
    })
    //  test.only , test.skip
    test("Greet by name props",()=>{
        render(<Greet name={"name"} />)
        let elementText=screen.getByText(/Greet name/i);
        expect(elementText).toBeInTheDocument();
    })

    describe("Nested Greet",()=>{  
        test("greet render correctly",()=>{
            render(<Greet />)
            let text=screen.getByText(/Greet/i);
            expect(text).toBeInTheDocument();
        })
        //  test.only , test.skip
        test("Greet by name props",()=>{
            render(<Greet name={"name"} />)
            let elementText=screen.getByText(/Greet name/i);
            expect(elementText).toBeInTheDocument();
        })
    })
})

describe("Greet 2",()=>{  
    test("greet render correctly",()=>{
        render(<Greet />)
        let text=screen.getByText(/Greet/i);
        expect(text).toBeInTheDocument();
    })
    //  test.only , test.skip
    test("Greet by name props",()=>{
        render(<Greet name={"name"} />)
        let elementText=screen.getByText(/Greet name/i);
        expect(elementText).toBeInTheDocument();
    })
})
