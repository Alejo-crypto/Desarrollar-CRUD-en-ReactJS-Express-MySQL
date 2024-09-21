import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs';

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([]); 

    useEffect(() => {
        getBlogs();
    }, []);

    // Procedimiento para mostrar todos los blogs
    const getBlogs = async () => {
            const res = await axios.get(URI); 
            console.log(res.data); // Verifica si los datos están siendo obtenidos // Añadimos await para esperar la respuesta
            setBlog(res.data); // Aseguramos que se use res.data después de que la promesa se resuelva
    };

    // Procedimiento para eliminar un blog
    const deleteBlog = async (id) => {
            await axios.delete('${URI}/${id}'); // Corrijo la interpolación de la URL
            getBlogs() // Refrescar la lista después de eliminar un blog
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i class="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                               {blogs.map((blog) => (
                                    <tr key={blog.id}>
                                        <td>{blog.title}</td>
                                        <td>{blog.content}</td>
                                        <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'> <i class="fa-regular fa-pen-to-square"></i> </Link>
                                            <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'> <i class="fa-solid fa-trash"></i> </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompShowBlogs;
