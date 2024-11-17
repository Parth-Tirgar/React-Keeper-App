import Header from "./Header"
import CreateArea from "./CreateArea"
import Note from "./Note"
import Footer from "./Footer"
import { useState } from "react"

const App = () => {

    const [noteList, setNoteList] = useState([])

    function AddNoteToList(noteItem) {
        setNoteList(prevValue => {
            return [...prevValue, {title: noteItem.title, content: noteItem.content}]
        })
    }

    function deleteNote(id) {
        setNoteList(prevItems => {
            return prevItems.filter(
                (item, index) => {
                    return index != id
                }
            )
        })
    }

    return (
        <div>
            <Header />
            <CreateArea
                addNote={AddNoteToList}     
            />
            {noteList.map((note, index) => 
                <Note
                    id={index}
                    key={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />
            )}
            
            <Footer />
        </div>
    )
}

export default App