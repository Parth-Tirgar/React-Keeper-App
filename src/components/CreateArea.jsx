import { useState } from 'react'
import './CreateArea.css'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const CreateArea = (props) => {

    const [isExpended, setExpended] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange = (event) => {

        const { name, value } = event.target

        setNote(prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        })

    } 

    function submitNote(event) {
        event.preventDefault()
        props.addNote(note)
        setNote({
            title: "",
            content: ""
        })
    }

    function expend() {
        setExpended(true)
    }

    return (
        <div>
            <form className='create-note'>

                {isExpended && 

                    <input 
                        type="text" 
                        onChange={handleChange}
                        value={note.title} 
                        placeholder='Title' 
                        name='title' 
                    />
                }

                <textarea 
                    onChange={handleChange}
                    onClick={expend}
                    value={note.content}
                    name="content" 
                    rows={isExpended ? 3 : 1} 
                    placeholder='Take a note...'
                ></textarea>

                <Zoom in={isExpended}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>

                
            </form>
        </div>
    )
}

export default CreateArea