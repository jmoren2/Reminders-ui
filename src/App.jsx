import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleTitleChange = (e) =>
    {
        setTitle(e.target.value)
    }

    const handleBodyChange = (e) =>
    {
        setBody(e.target.value)
    }

    const handleSubmit = async (e) => 
    {
        e.preventDefault()
        const newReminder = {
            title: title,
            body: body
        }

        let response = await axios.post('http://localhost:4000/api/create', newReminder)
        console.log(response)
        
        resetState()
    }

    const resetState = () =>{
        setBody('')
        setTitle('')
    }

  return (
    <div>
      <div className='container'>
        <h1>New Reminder</h1>
          <div className='form-div'>
              <form onSubmit={handleSubmit}>
                  <input type="text" placeholder='Title' onChange={handleTitleChange} value={title} className='form-control form-group' />
                  <textarea type="text" placeholder='Body' onChange={handleBodyChange} value={body} className='form-control form-group' />
                  <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
              </form>
          </div>
      </div>
    </div>
  );
}

export default App;
