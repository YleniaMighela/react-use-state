import { useState } from 'react';

export default function languages(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div>
                <button className="button" onClick={() => setIsOpen((current) => !current)}>
                    {props.title}
                </button>
            </div>
            <div>
                {isOpen && props.description}
            </div>

        </>
    )
}