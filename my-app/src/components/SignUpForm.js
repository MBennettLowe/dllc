import React, { useID, useState } from 'react';


function SignUpForm(props) {
    const [input, setInput] = useState('');

    const handleInput = (e) => {
            setInput(e.target.value);
            console.log(e.target.value);
        }

        // setTimeout(handleInput, 500);
        // console.log("Seeing this???")

    // setTimeout((e) = {
    //     const handleInput = (e) => {
    //         setInput(e.target.value);
    //         console.log(e.target.value);
    //     }, "500");
    // })
    
    
    let handleSubmit = (e) => {
        e.preventDefault()
        console.log("You've successfully submitted the form")
        console.log(e);
    }

    return (
        <form>
            <label>Name</label>
                <input 
                    type="text" 
                    id="input"
                    name="input"
                    onChange={handleInput}
                />
                
            <br />
            <label>Course: 
            <select id="course-select">
                <option value="Reactjs">Reactjs</option>
                <option value="Nodejs">Nodejs</option>
                <option value="AWS">Python</option>
                <option value="FrontEnd Development">FrontEnd Development</option>
                <option value="Backend Development">Backend Development</option>
                <option value="Fullstack Development">Fullstack Development</option>
            </select>
            </label>
            <br />
            <label>
                Start Date: 
                <input type="date" id="start-date" />
            </label>
           <br />
            <button onClick={(e) =>handleSubmit(e)}>Submit</button>

            <h2>Hello {input}, Thanks for signing up! You will be receiving a confirmation email shortly.</h2>
        </form>
    );
}

export default SignUpForm;