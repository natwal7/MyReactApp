import { useState } from "react";

function Multibutton(props) {
    const [selected, setSelected] = useState();

    function buttonOn(index) {
        setSelected(index);
        console.log(selected);
    }

    function GenerateButtons() {
        let output = [];

        for (let index in props.items) {
            let component;

            if (selected === index) {
                component = <input key={index} type="button" className="button-on" value={props.items[index]} onClick={() => buttonOn(index)}/>
                console.log('Selected button generated');
            } else {
                component = <input key={index} type="button" className="button-off" value={props.items[index]} onClick={() => buttonOn(index)}/>
                console.log('Not selected button generated');
            }
            output.push(component)

        }
        return output;
    }

    return ( 
        <GenerateButtons/>
    );
}

export default Multibutton;


