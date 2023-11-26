import { useRouteError } from "react-router-dom";



const Error = function(){
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error">
            <h1>{"Suru hote hi khatam hogaya bidu"}</h1>
            <h3>{err.status + " : " + err.statusText }</h3>
        </div>
    );
}

export default Error;