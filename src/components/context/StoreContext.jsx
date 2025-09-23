import { createContext } from "react";
import { sample_Advices } from "../../assets/assets";
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
    const contextValue = {

        sample_Advices
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;