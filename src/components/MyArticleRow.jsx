import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const MyArticleRow = ({ myData, index, handleEdit }) => {
    const { _id, authorEmail, authorName, category, content, date, tags, thumbnail, title } = myData;
//console.log(selectedArticle)
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
                        if(data.data.deletedCount>0){
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
            <td>{category}</td>
            <td>{content}</td>
            <td>{date}</td>
            <td>
                <button className='btn btn-accent' onClick={() => handleEdit(myData)}>Edit</button>
                <button className='btn btn-error' onClick={() => handleDelete(_id)}>delete</button>
            </td>

        </tr>

    );
};

export default MyArticleRow;