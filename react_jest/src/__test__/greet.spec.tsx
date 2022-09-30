import { render, screen } from "@testing-library/react"
import Greet from "../components/greet/greet"

//  describe.only , describe.skip
describe("Greet",()=>{  
    it("greet render correctly",()=>{
        render(<Greet />)
        let text=screen.getByText(/Greet/i);
        expect(text).toBeInTheDocument();
    })
    
    it("Greet by name props",()=>{
        render(<Greet name={"name"} />)
        let elementText=screen.getByText(/Greet name/i);
        expect(elementText).toBeInTheDocument();
    })

    describe("Nested Greet",()=>{  
        it("greet render correctly",()=>{
            render(<Greet />)
            let text=screen.getByText(/Greet/i);
            expect(text).toBeInTheDocument();
        })
        //  fit->only that test will run ,xit -> to skip the test , thses two are only for `it` method 
        it("Greet by name props",()=>{
            render(<Greet name={"name"} />)
            let elementText=screen.getByText(/Greet name/i);
            expect(elementText).toBeInTheDocument();
        })
    })
})

describe("Greet 2",()=>{  
    it("greet render correctly",()=>{
        render(<Greet />)
        let text=screen.getByText(/Greet/i);
        expect(text).toBeInTheDocument();
    })
    //  fit->only that test will run ,xit -> to skip the test , thses two are only for `it` method 
    it("Greet by name props",()=>{
        render(<Greet name={"name"} />)
        let elementText=screen.getByText(/Greet name/i);
        expect(elementText).toBeInTheDocument();
    })
})
