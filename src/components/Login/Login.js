import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';

function Login({ setMentorVisible }) {
    const userdata = useContext(UserContext);
    const navigate = useNavigate();

    const handleTeacherLogin = () => {
        setMentorVisible(true);
        navigate("/portal/mentor");
    }

    const handleStudentLogin = () => {
        setMentorVisible(false);
        navigate("/portal/student");
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter your username"
                                        onChange={(event) => userdata.setUsername(event.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberMe"
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                </div>
                                <div className="d-grid gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleTeacherLogin}
                                    >
                                        Login as a Teacher
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleStudentLogin}
                                    >
                                        Login as a Student
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
