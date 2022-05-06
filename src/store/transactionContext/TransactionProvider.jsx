import { createContext, useReducer } from "react";

import transactionInitialState from "./transactionInitialState";
import transactionReducer from "./transactionReducer";

export const TransactionContext = createContext({});



const TransactionProvider = ({ children }) => {

    const [transactionState, transactionDispatch] = useReducer(transactionReducer, transactionInitialState);

    return (
        <TransactionContext.Provider value={{ transactionState, transactionDispatch }}>
            {children}
        </TransactionContext.Provider>
    )


}

export default TransactionProvider;