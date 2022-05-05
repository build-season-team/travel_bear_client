import { createContext, useReducer } from "react";

import adminInitialState from "./adminInitialState";
import adminReducer from "./adminReducer";

export const AdminContext = createContext({});



const AdminProvider = ({ children }) => {

    const [adminState, adminDispatch] = useReducer(adminReducer, adminInitialState);

    return (
        <AdminContext.Provider value={{ adminState, adminDispatch }}>
            {children}
        </AdminContext.Provider>
    )


}

export default AdminProvider;