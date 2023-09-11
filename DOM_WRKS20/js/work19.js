document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const submitButton = document.getElementById('submitQuiz');
    const quizResults = document.getElementById('quizResults');

    const correctAnswers = {
        q1: 'paris',
        q2: 'mars',
        // Add correct answers for more questions as needed
    };

    submitButton.addEventListener('click', function() {
        const formData = new FormData(quizForm);
        let score = 0;

        for (const key of formData.keys()) {
            const userAnswer = formData.get(key);
            if (userAnswer === correctAnswers[key]) {
                score++;
            }
        }

        const totalQuestions = Object.keys(correctAnswers).length;
        const resultMessage = `You scored ${score} out of ${totalQuestions}!`;

        quizResults.textContent = resultMessage;
    });
});
