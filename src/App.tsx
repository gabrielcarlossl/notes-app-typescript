import { useSelector } from 'react-redux';
import NewNoteInput from './components/NewNoteInput';
import { NotesState } from './redux/notesReducer';
import { useDispatch } from 'react-redux';
import { addNote } from './redux/actions';


function App() {

  const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes)

  const dispatch = useDispatch()

  const onAddNote = (note:string) => {
    dispatch(addNote(note))
  }
  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {

          return <li key={note}>{note}</li>
        })}
      </ul>
    </>
  )
}

export default App;
