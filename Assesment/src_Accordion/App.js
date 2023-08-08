import React, { useState } from 'react'
import Accordion from './Accordion';
import { accordionData } from './Utils/Content';

const App = () => {


    return (
        <>
            <div className="accordion">
                <div className="accordion-item">
                    {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default App;