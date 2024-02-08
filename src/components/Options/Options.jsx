import { useState } from 'react';

export const Options = ({ }) => {
    const [feedback, setfeedback] = useState(0)
    

return <div>
    <button>Good</button>;
    <button>Neutral</button>;
    <button>Bad</button>;
</div>;
};