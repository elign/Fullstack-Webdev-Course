import { useState } from "react"

const options = [
    {
        value: '',
        label: '-- Select Location--',
    },
    {
        value: 'Talwandi',
        label: 'Talwandi',
    },
    {
        value: 'Shrinath Puram',
        label: 'Shrinath Puram',
    },
    {
        value: 'Mahaveer nagar 1st, 2nd, 3rd, vistar',
        label: 'Mahaveer nagar 1st, 2nd, 3rd, vistar',
    },
    {
        value: 'Keshavpura',
        label: 'Keshavpura',
    },
]

function ContactForm() {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");

    const selectOptions = options.map(({ value, label }, idx) => (
        <option key={idx} value={value}> {label}</option>
    ))

    return (
        <div>
            <div>
                <label htmlFor='Name'>Number: </label>
                <input
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    placeholder='Enter number here...'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div><label htmlFor='Name'>Name: </label>
                <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='Location'>Location</label> <br />
                <select name='location' onChange={(e) => setLocation(e.target.value)} id='location'>
                    {selectOptions}
                </select>

            </div>
            <button className="button">Submit Data</button>
        </div>
    )
}

export default ContactForm
