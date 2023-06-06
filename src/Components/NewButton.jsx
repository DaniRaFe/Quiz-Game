import Swal from "sweetalert2"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

const NewButton = ({ listQuestions, setListQuestions }) => {

    const NewModal = async () => {
        const { value } = await Swal.fire({
            title: "New Question Information",
            html: `
                <input 
                    type="text"
                    id="question" 
                    name="question" 
                    placeholder="Question"
                    class="swal2-input"
                />
                <input 
                    type="text" 
                    id="answer1" 
                    name="answer1"
                    placeholder="Answer 1"
                    class="swal2-input"
                />
                <input 
                    type="text" 
                    id="answer2" 
                    name="answer2"
                    placeholder="Answer 2"
                    class="swal2-input"
                />
                <input 
                    type="text" 
                    id="answer3" 
                    name="answer3"
                    placeholder="Answer 3"
                    class="swal2-input"
                />
                <select id="answerSelect" class="swal2-input">
                    <option value="">Select the correct answer</option>
                    <option value="answer1">Answer 1</option>
                    <option value="answer2">Answer 2</option>
                    <option value="answer3">Answer 3</option>
                </select>
            `,
            confirmButtonText: "Continue",
            showCancelButton: true,
            cancelButtonText: "Dismiss",
            focusConfirm: false,
            preConfirm: () => {
                const question = Swal.getPopup().querySelector("#question").value;
                const answer1 = Swal.getPopup().querySelector("#answer1").value;
                const answer2 = Swal.getPopup().querySelector("#answer2").value;
                const answer3 = Swal.getPopup().querySelector("#answer3").value;
                const selected = Swal.getPopup().querySelector("#answerSelect").value;

                if (!question || !answer1 || !answer2 || !answer3 || !selected) {
                    Swal.showValidationMessage("Please enter full information");
                }

                return { question, answer1, answer2, answer3, selected };
            },
        })

        
        if (!value.question || !value.answer1 || !value.answer2 || !value.answer3 || !value.selected) return;

        let trueAnswer;
        if (value.selected === 'answer1') {
            trueAnswer = value.answer1;
          }
        if (value.selected === 'answer2') {
            trueAnswer = value.answer2;
          }
          
        if (value.selected === 'answer3') {
            trueAnswer = value.answer3;
          }
        const newList = [
            ...listQuestions,
            {
                id: uuidv4(),
                question: value.question,
                answer1: value.answer1,
                answer2: value.answer2,
                answer3: value.answer3,
                answerTrue: trueAnswer,
            }
        ]

        localStorage.setItem("listQuestions", JSON.stringify(newList));
        setListQuestions(newList);
    }

    return (
        <button
            type="button"
            className="btn btn-outline-primary me-1"
            onClick={NewModal}
        >
            <i className="bi bi-plus-circle"></i>
        </button>
    )
}

export default NewButton