
let character = [
    {
        name: 'enterteiment',
        url: 'assets/img/enterteiment.png',
        question: 'What is the name of Mickey Mouse pet?',
        answer1: 'Donald',
        answer2: 'Goofy',
        answer3: 'Pluto',
        answers: ['Donald','Goofy','Pluto'],
        correctAnswer: 'Pluto'
    },
    {
        name: 'king',
        url: 'assets/img/king.png',
        question: 'Who is Bruce Wayne?',
        answer1: 'Superman',
        answer2: 'Batman',
        answer3: 'Green Lantern',
        answers: ['Superman','Batman','Green Lantern'],
        correctAnswer: 'Batman'
    },
    {
        name: 'geography',
        url: 'assets/img/geography1.png',
        question: 'Nova Scotia is part of which country?',
        answer1: 'United States of America',
        answer2: 'United Kingdom',
        answer3: 'Canada',
        answers: ['United Kingdom','United Kingdom','Canada'],
        correctAnswer: 'Canada'
    },
    {
        name: 'science',
        url: 'assets/img/science1.png',
        question: 'Which of these is NOT a subatomic particle?',
        answer1: 'Leuctron',
        answer2: 'Electron',
        answer3: 'Neutron',
        answers: ['Leuctron','Electron','Neutron'],
        correctAnswer: 'Leuctron'
    },
    {
        name: 'history',
        url: 'assets/img/history1.png',
        question: 'What was the name of the diplomatic war between USA and USSR?',
        answer1: 'Cold War',
        answer2: 'World War',
        answer3: 'American Revolutionary War',
        answers: ['Cold War','World War','American Revolutionary War'],
        correctAnswer: 'Cold War'
    }, 
    {
        name: 'sports',
        url: 'assets/img/sport1.png',
        question: 'Who won Best Player at the 2014 FIFA World Cup held in Brazil?',
        answer1: 'Cristiano Ronaldo',
        answer2: 'Lionel Messi',
        answer3: 'Thomas Müller',
        answers: ['Cristiano Ronaldo','Lionel Messi','Thomas Müller'],
        correctAnswer: 'Lionel Messi',
    },
    {
        name: 'art',
        url: 'assets/img/art1.png',
        question: 'Where is the painting the "Mona Lisa" displayed?',
        answer1: 'Vatican Museums',
        answer2: 'Louvre Museum',
        answer3: 'The Museum Of Modern Art',
        answers: ['Vatican Museums','Louvre Museum','The Museum Of Modern Art'],
        correctAnswer: 'Louvre Museum'
    }
];

class Model {

   constructor () {
      this.questions = [];
      this.count = 0;
      this.triviaQuestions = character;
      this.render = undefined;
   }
  
   subscribe(render) {
      this.render = render;
   }
   inform() {
      console.log(this.questions.map(e => e.text));
      this.render();
   }
   nextQuestion(question) {
      this.questions.push({
         id: Utils.uuid(),
         image: question.url,
         questionTrivia: question.question,
         options: question.answers,
         answer: question.correctAnswer,
         option1: question.answer1,
         option2: question.answer2,
         option3: question.answer3
      });
      this.count;
      this.inform();
   }
   updateTodo(index, todo) {
      this.questions[index] = todo;
      this.inform();
   }
}

const App = ({ title, model }) => {
    const items = model.triviaQuestions.map((question, index) => {
        return (
            <li key={index}>
                <p value={question.question}>{question.question}</p>
                <button className='btn '
                    onClick={ e=>
                        model.nextQuestion(index,{
                            image: question.url,
                            questionTrivia: question.question,
                            options: question.answers,
                            answer: question.correctAnswer,
                            option1: question.answer1,
                            option2: question.answer2,
                            option3: question.answer3
                        })}
                    value = {question.answer1}
                >{question.answer1}</button>
                <button className='btn '
                    onClick={ e=>
                        model.nextQuestion(index,{
                            image: question.url,
                            questionTrivia: question.question,
                            options: question.answers,
                            answer: question.correctAnswer,
                            option1: question.answer1,
                            option2: question.answer2,
                            option3: question.answer3
                        })}
                    value = {question.answer2}
                >{question.answer2}</button>
                <button className='btn '
                    onClick={ e=>
                        model.nextQuestion(index,{
                            image: question.url,
                            questionTrivia: question.question,
                            options: question.answers,
                            answer: question.correctAnswer,
                            option1: question.answer1,
                            option2: question.answer2,
                            option3: question.answer3
                        })}
                    value = {question.answer3}
                >{question.answer3}</button>
            </li>
        )
    });

    
    const img = model.triviaQuestions.map((question, index) =>{
        return(
            <div key={index}>
                <img src= {question.url} />
            </div>
        )
    });

    return(
      <div>
          <h2> {title} </h2>
            <div> 
                {img} 
                 <ol> {items} </ol>
            </div>
      </div>  
    );
};


let model = new Model(character);
let counter = 1;
let render = () => {
   console.log('render times: ', counter++);
   ReactDOM.render(
      <App title="TriviaApp" model={model} />,
      document.getElementById('root')
   );
};

model.subscribe(render);
render(); 



