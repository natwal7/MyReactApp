import { useState } from "react";

function SubmitButton(props) {
    const [showCheck, setshowCheck] = useState(false);

    function handleSubmit() {
        setshowCheck(true);
    }

    return ( 
        <div>
            <input type="submit" onClick={handleSubmit}></input>
            {showCheck && <div className="check"></div>}
        </div>
      
    );
}

export default SubmitButton;