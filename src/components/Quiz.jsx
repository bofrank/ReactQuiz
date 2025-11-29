import { useState } from 'react';
import QUESTIONS from '../questions.js';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    return (
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
    );
}