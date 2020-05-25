import React from 'react';
import InputHandler from "components/handler";
import { ClassicInput } from "components/input";


const PasswordInput = (props) => {
    const [type, setType] = React.useState('password');

    const toggleType = () => setType(type === 'password' ? 'text' : 'password');

    return (
        <React.Fragment>
            <ClassicInput
                type={type}
                {...props}
            />
            <props.PasswordToggleComponent
                onClick={toggleType}
                showPassword={type === "password"}
            />
        </React.Fragment>
    );
}

export default InputHandler(PasswordInput);