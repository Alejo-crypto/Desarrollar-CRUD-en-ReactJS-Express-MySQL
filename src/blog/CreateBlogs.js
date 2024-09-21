import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs';

const CompCreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content:content});
        navigate('/');
    }
    /*TODA EL AREA DE FORMULARIO*/ 
    return (
        <div>
            <h1>Crear POST</h1>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Titulo</label>
                    <input
                        value={title}
                        onChange={ (e)=> setTitle(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Titulo</label>
                    <textarea
                        value={content}
                        onChange={ (e)=> setContent(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'> Enviar </button>
            </form>
        </div>
    )
}

export default CompCreateBlog;  