import React from 'react';

const MyArticleRow = ({ myData, index, handleEdit }) => {
    const { _id, authorEmail, authorName, category, content, date, tags, thumbnail, title } = myData
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{category}</td>
            <td>{content}</td>
            <td>{date}</td>
            <td>
                <button className='btn btn-accent' onClick={()=>handleEdit(myData)}>Edit</button>
                <button className='btn btn-error'>delete</button>
            </td>

        </tr>
        
    );
};

export default MyArticleRow;