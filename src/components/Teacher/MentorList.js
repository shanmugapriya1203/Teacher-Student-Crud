import React from 'react';
import { Link } from 'react-router-dom';

function MentorList({ mentordata }) {
    return (
        <>
            <tr>
                <td>{mentordata.employe_id}</td>
                <td>{mentordata.name}</td>
                <td>{mentordata.subject}</td>
                <td>
                    <Link className='btn btn-primary btn-sm me-1' to={`/portal/mentorview/${mentordata.employe_id}`}>View</Link>
                </td>
            </tr>
        </>
    )
}

export default MentorList;
