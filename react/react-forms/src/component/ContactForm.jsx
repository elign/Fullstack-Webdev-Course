import { useState } from "react"
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase'


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
    {
        value: 'Bajrang Nagar',
        label: 'Bajrang Nagar',
    },
    {
        value: 'Other',
        label: 'Other',
    },
]

function ContactForm() {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");

    const selectOptions = options.map(({ value, label }, idx) => (
        <option key={idx} value={value}> {label}</option>
    ))

    const submit = async (e) => {
        e.preventDefault();
        try {
            const docRef = doc(db, "devotee", phoneNumber);
            const data = {
                name: name,
                phoneNumber: phoneNumber,
                location: location,
            }
            await setDoc(docRef, data);

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
        setName("");
        setPhoneNumber("");
        setLocation("");
    }

    return (
        <form onSubmit={submit} className="form">
            <div>
                <label htmlFor='Name'>Number: </label><br />
                <input
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    placeholder='Enter number here...'
                    value={phoneNumber}
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div><label htmlFor='Name'>Name: </label><br />
                <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='Name'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='Location'>Location</label> <br />
                <select name='location' required value={location} onChange={(e) => setLocation(e.target.value)} id='location'>
                    {selectOptions}
                </select>

            </div>
            <input type="submit" className="button" />
        </form>
    )
}

export default ContactForm