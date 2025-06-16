import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const MyArticleRow = ({ myData, index, handleEdit, removeDataFromTable }) => {
    const {darkMode} = useAuth()
    const { _id, authorEmail, authorName, category, content, date, tags, thumbnail, title } = myData;
    // const {multi1, multi2} = tags
    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/dlt-my-article/${id}`)
                    .then(data => {
                        console.log(data.data)
                        if (data.data.deletedCount > 0) {
                            removeDataFromTable(_id)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        });
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{content}</td>
            <td className='hidden lg:block'>{
            tags.map((tag, index)=><span key={index} className={`${darkMode?'text-white ':'text-black'} badge mr-2 mb-2 bg-violet-400/30`}>{tag}</span>
            )}</td>
            <td>{category}</td>
            <td className='hidden md:block'>{date}</td>
            <td>
                <button className='btn btn-accent' onClick={() => handleEdit(myData)}>Edit</button>
                <button className='btn btn-error' onClick={() => handleDelete(_id)}>delete</button>
            </td>

        </tr>

    );
};

export default MyArticleRow;