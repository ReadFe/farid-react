import { useEffect, useState } from "react";

const Effect = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        localStorage.setItem('text', text)
        console.log(text)
    }, [text]);
    
    return (
        <div>
            <textarea onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

export default Effect;