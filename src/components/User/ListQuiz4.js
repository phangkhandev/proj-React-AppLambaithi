//Văn hoá

import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import "./ListQuiz.scss";
import { useNavigate } from "react-router-dom";

const ListQuiz4 = (props) => {
    const [arrQuiz, setArrQuiz] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getQuizData();
    }, [])

    const getQuizData = async () => {
        const res = await getQuizByUser();
        if (res && res.EC === 0) {
            setArrQuiz(res.DT);
        }
    }

    return (
        <div>

            <div className="list-quiz-container container">
                {arrQuiz && arrQuiz.length > 0 &&
                    arrQuiz.sort((a, b) => a.id - b.id).map((quiz, index) => {
                        if (quiz.id > 52 && quiz.id < 62) {

                            return (
                                <div key={`${index}-quiz`} className="card" style={{ width: "14rem" }}>
                                    <img src={`data:image/jpeg;base64, ${quiz.image}`} style={{ width: "8rem", height: "8rem", marginLeft: "42px" }} alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">{quiz.description}</p>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => navigate(`/quiz/${quiz.id}`, { state: { quizTitle: quiz.description } })}
                                        >Làm Bài
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

                {arrQuiz && arrQuiz.length === 0 &&
                    <div>
                        You don't have any quiz now...
                    </div>
                }

            </div>


            <div style={{ marginBottom: "60px" }}></div>
        </div>
    )
}

export default ListQuiz4;