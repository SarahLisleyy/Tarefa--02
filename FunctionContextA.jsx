import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"
import ColorTheme from "./MyColorContext"

const cores = {bkgfA: 'green', bkgfB:'white', bkgC:'yellow', bkgD:'blue'}

const FunctionContextA = () => {
    return (
        <ColorTheme.Provider value="cores">
            <FunctionContextB />
            <FunctionContextC />
        </ColorTheme.Provider>
    )
}
export default FunctionContextA
