const LoginFormFormikProps = require("./LoginFormFormikProps")
// @ponicode
describe("LoginFormFormikProps.default", () => {
    test("0", () => {
        let callFunction = () => {
            LoginFormFormikProps.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
