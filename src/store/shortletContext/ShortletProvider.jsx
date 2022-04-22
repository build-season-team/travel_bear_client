import { createContext,useReducer } from "react";

import shortletInitialState from "./shortletInitialState";
import shortletReducer from "./shortletReducer";

export const ShortletContext = createContext({});



const ShortletProvider = ({children}) => {

    const [shortletState, shortletDispatch] = useReducer(shortletReducer, shortletInitialState);

    return (
        <ShortletContext.Provider value={{shortletState, shortletDispatch}}>
            {children}
        </ShortletContext.Provider>
    )


}

export default ShortletProvider;