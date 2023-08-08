import React, { useContext } from 'react';

const themes = {
    Dark: {
        background: 'black',
        foreground: 'white'
    },

    Light: {
        background: 'grey',
        foreground: 'red'
    },

    Random: {
        background: 'red',
        foreground: 'blue'
    }
}

const NewTheme = React.createContext(themes.Light);


function CreatContext(props) {

    const theme = useContext(NewTheme)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button className='btn btn-info my-3' style={{ background: theme.background, color: theme.foreground }}> Click Me</button>

                        <p className='p-2' style={{ background: theme.background, color: theme.foreground }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati debitis officiis natus ut distinctio vitae id eum incidunt eveniet quibusdam labore consectetur, quasi aspernatur sequi facilis earum dicta nisi voluptate.</p>
                    </div>
                </div>
            </div>


        </>
    );
}

export default CreatContext;