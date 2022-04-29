import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children }) {
    let token = useSelector(store => store.person.token);
    let location = useLocation();


    if (!token) {

        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
}