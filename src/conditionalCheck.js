import React from "react";
import { useState } from "react";

function ConditionalCheck(props) {
    const [showCheck, setshowCheck] = useState(false);

    function handleSubmit() {
        setshowCheck(true);
        setTimeout(() => { setshowCheck(false) }, 5000);
    }

    return ( 
        <div>
            <label>I like this app</label>
            <input type="checkbox" onClick={handleSubmit}></input>
            {showCheck && <div className="hooray">YAY!</div>}
        </div>
      
    );
}

export default ConditionalCheck;