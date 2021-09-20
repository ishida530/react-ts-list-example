import React, { useState } from 'react';
import { IState as Props } from '../App'

interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        url: string;
        note?: string | undefined;
    }[]>>
}
const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        note: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = (): void => {
        if (
            !input.name ||
            !input.age ||
            !input.url) {
            return
        }
        setPeople(
            [...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note:input.note

            }])
            setInput({
                name: "",
                age: "",
                url: "",
                note: "",
            })
    }
    return (
        <div className="AddToList">
            <input name="name" onChange={handleChange} type="text" placeholder="name" className="AddToList-input" value={input.name} />
            <input name="age" onChange={handleChange} type="number" placeholder="age" className="AddToList-input" value={input.age} />
            <input name="url" onChange={handleChange} type="text" placeholder="url" className="AddToList-input" value={input.url} />
            <textarea onChange={handleChange} name="note" placeholder="note" className="AddToList-input" value={input.note} />
            <button onClick={handleClick} className="AddToList-btn">Add to list</button>
        </div>
    )

}

export default AddToList