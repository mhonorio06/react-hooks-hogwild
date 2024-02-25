import React, { useState } from 'react';

function HogForm({ onFormSubmit }) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [greased, setGreased] = useState("")
    const [weight, setWeight] = useState("")
    const [medal, setMedal] = useState("bronze")

    function handleName(event) {
        setName(event.target.value)
    }
    function handleImage(event) {
        setImage(event.target.value)
    }
    function handleSpecialty(event) {
        setSpecialty(event.target.value)
    }
    function handleGreased(event) {
        setGreased(event.target.value)
    }
    function handleWeight(event) {
        setWeight(event.target.value)
    }
    function handleAward(event) {
        setMedal(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        onFormSubmit({
            name: name,
            image: image,
            specialty: specialty,
            greased: greased,
            weight: weight,
            medal: medal,
        })
    }
    return (
        <div className="form">
            <form className="newtaskform" onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text" name="text" value={name} onChange={handleName}/>
                </label>
                <label>
                    Image
                    <input type="text" name="text" value={image} onChange={handleImage}/>
                </label>
                <label>
                    Specialty
                    <input type="text" name="text" value={specialty} onChange={handleSpecialty}/>
                </label>
                <label>
                    Greased
                    <select name="greased" value={greased} onChange={handleGreased} >
                        <option value="true">True</option>
                        <option value="false">false</option>
                    </select>
                </label>
                <label>
                    Weight
                    <input type="text" name="text" value={weight} onChange={handleWeight}/>
                </label>
                <label>
                    Highest Medal Achieved
                    <select name="medal" value={medal} onChange={handleAward}>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Bronze">Bronze</option>
                    </select>
                </label>
                <input type="submit" value="Add Hog" />


            </form>
        </div>
    )
}

export default HogForm