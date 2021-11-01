import { Button, } from 'react-bootstrap';
import React from 'react'

const InputForm = (props) => {
    return (
        <form onSubmit={props.data}>
            <input
            type='text'
            placeholder='city'
            name='city'
            />
            <button>Submit</button>
            
        </form>
    )
}

export default InputForm; 