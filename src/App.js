import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './Notes/NotesList';
import Search from './Notes/Search';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import UseDarkMode from './Notes/UseDarkMode';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '05/05/2022',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '06/05/2022',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '15/05/2022',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '25/05/2022',
		},
	]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const [isDarkMode,setDarkMode] = UseDarkMode()

	return (
    	<div>
			<div className='container'>
				<div className='header'>
					<h1 style={{color: isDarkMode?'#FAF9F6':'#28282B'}}><span className='my' style={{color: isDarkMode?'aquamarine':'#289D8C'}}>My</span>&nbsp;Notes</h1>
					<button className="toggle_btn" onClick={()=>setDarkMode(!isDarkMode)} style={{backgroundColor: isDarkMode?'#28282B':'#FAF9F6'}}>
						{isDarkMode? (
							<BsFillSunFill size={'2em'} title="Switch to light mode" style={{color:"white"}}/>
						) : (
							<BsFillMoonStarsFill size={'2em'} title="Switch to dark mode" />
						)}
					</button>
				</div>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
			<footer>
				<a className='source-code' style={{color: isDarkMode?'rgb(233, 233, 233)':'#28282B'}} href="https://github.com/dylananderton/Notes" target="_blank" >See the source code</a>
			</footer>
		</div>
	);
};

export default App;