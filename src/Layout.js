import { Routes, Route } from 'react-router-dom';
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/Dashboard';
import Login from './components/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Auth/Register';
import ListQuiz from './components/User/ListQuiz';
import DetailQuiz from './components/User/DetailQuiz';
import ManageQuiz from './components/Admin/Content/Quiz/ManageQuiz';
import Questions from './components/Admin/Content/Question/Questions';
import PrivateRoute from './routes/PrivateRoute';
import React, { Suspense } from 'react';
import TrafficSigns from './components/TrafficSigns/TrafficSigns';
import Shape from './components/Shape/Shape';
import ListQuiz2 from './components/TrafficSigns/ListQuiz2';
import DetailQuiz2 from './components/TrafficSigns/DetailQuiz2';
import ParalysisPoint from './components/ParalysisPoint/ParalysisPoint';


const NotFound = () => {
    return (
        <div className='container alert alert-danger'>
            404 Not Found
        </div>
    )
}

const Layout = (props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path="baithi"
                        element={
                            <PrivateRoute>
                                <ListQuiz />
                            </PrivateRoute>
                        }
                    />

                    <Route path="bienbao"
                        element={
                            <PrivateRoute>
                                <ListQuiz2 />
                            </PrivateRoute>
                        }
                    />

                    <Route path="sahinh" element={<Shape />} />
                    <Route path="diemliet" element={<ParalysisPoint />} />


                </Route>

                <Route path="/quiz/:id" element={<DetailQuiz />} />
                <Route path="/quiz/:id" element={<DetailQuiz2 />} />

                <Route path="/admin"
                    element={
                        <PrivateRoute>
                            <Admin />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<DashBoard />} />
                    <Route path="manage-users" element={<ManageUser />} />
                    <Route path="manage-quizzes" element={<ManageQuiz />} />
                    <Route path="manage-questions" element={<Questions />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />

            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </Suspense>
    )
}

export default Layout;