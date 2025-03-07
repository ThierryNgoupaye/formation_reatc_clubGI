import {useState} from "react";
import RenderMessage from "./RenderMessage.jsx";

export default function Essai()
{
    const [message, setMessage] = useState("Aucun message disponible");
    const [count, setCount] = useState(0);
    function handleChange()
    {
        if(count === 0)
        {
            setMessage("Premier rendu");
            setCount(prevState => prevState + 1);
        }
        else if(count===-1)
        {
            setMessage("Aucun message disponible");
            setCount(prevState => prevState + 1);
        }
        else if (count === 1)
        {
            setMessage("Bonjour et bienvenue a cette formation");
            setCount(-1);
        }
    }




    return (
        <>
            <div>
                <RenderMessage message={message} handleChange={handleChange}/>

            </div>
        </>
    )
}