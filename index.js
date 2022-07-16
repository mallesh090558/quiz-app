let questions = [
    {
       "id":1,
       "question":"Number(\"1\") - 1 == 0; \rWhat is the result?",
       "a":"True",
       "b":"False",
       "c":"NaN",
       "d":"TypeError",
       "answer":"a"
    },
    {
       "id":2,
       "question":"What is the result? \r(true + false) > 2 + true;",
       "a":"true",
       "b":"false",
       "c":"TypeError",
       "d":"NaN",
       "answer":"2"
    },
    {
       "id":3,
       "question":"What is the result?\r\"1\" - - \"1\";",
       "a":"0",
       "b":"2",
       "c":"11",
       "d":"\"11\"",
       "answer":"b"
    },
    {
       "id":4,
       "question":"What is the result? \r new String(\"This is a string\") instanceof String;        ",
       "a":"true",
       "b":"false",
       "c":"TypeError",
       "d":"NaN",
       "answer":"a"
    },
    {
       "id":5,
       "question":"What is the result? \r[] + [] + 'foo'.split('');        ",
       "a":"\"f,o,o\"",
       "b":"TypeError",
       "c":"[\"f\",\"o\",\"o\"]",
       "d":"[][][\"f\",\"o\",\"o\"]",
       "answer":"a"
    },
    {
       "id":6,
       "question":"What is the result? \r[] + [] + 'foo'.split('');",
       "a":"\"f, o, o\"",
       "b":"TypeError",
       "c":"[\"f\", \"o\", \"o\"]",
       "d":"[][][\"f\", \"o\", \"o\"]",
       "answer":"xxx"
    },
    {
       "id":7,
       "question":"What is the result? \rnew Array(5).toString();",
       "a":"\",,,,\"",
       "b":"[]",
       "c":"\"[]\"",
       "d":"(empty)",
       "answer":"a"
    },
    {
       "id":8,
       "question":"What is the result? \rString('Hello') === 'Hello';",
       "a":"true",
       "b":"false",
       "c":"TypeError",
       "d":"NaN",
       "answer":"a"
    },
    {
       "id":9,
       "question":"What is the result? \r\"This is a string\" instanceof String;",
       "a":"true",
       "b":"false",
       "c":"TypeError",
       "d":"NaN",
       "answer":"xxx"
    },
    {
       "id":10,
       "question":"What is the result console.log(myArr); ? \rvar myArr = ['foo', 'bar', 'baz']; \rmyArr.length = 0; \r myArr.push('bin');",
       "a":"['foo', 'bar', 'baz']",
       "b":"['foo', 'bar', 'baz', 'bin']",
       "c":"['bin', 'foo', 'bar', 'baz']",
       "d":"['bin']",
       "answer":"d"
    },
    {
       "id":11,
       "question":"What is the result? \rString('Hello') === 'Hello';",
       "a":"true",
       "b":"false",
       "c":"TypeError",
       "d":"NaN",
       "answer":"a"
    },
    {
       "id":12,
       "question":"What is the result? \r10 > 9 > 8 === true;",
       "a":"True",
       "b":"False",
       "c":"Error",
       "d":"Other",
       "answer":"b"
    },
    {
       "id":13,
       "question":"What is the result? \rNaN === NaN;",
       "a":"true",
       "b":"false",
       "c":"TypeError",
       "d":"NaN",
       "answer":"b"
    }
 ];


 const question= document.getElementById('question');
 const answer=Array.from(document.getElementsByClassName("answer-text"));
 const questionCounterText=document.getElementById("counter");
 const scoreText=document.getElementById("score");

 let questioncounter;
 let score;
 const maxQuestions=5;

 startgame = () => {
    questioncounter=0;
    score=0;
    availableQuestions=getrandomquestion(questions,maxQuestions);
    console.log(availableQuestions);
    getnewquestion();
 };


 const getrandomquestion = (arr,n) => {
    let len=arr.length;
    if(n>len){
throw new RangeError("Out of Stock!!!");
    }


const shuffled = [...arr].sort(()=> 0.5 - Math.random());

return (selected = shuffled.slice(0,n));

 };

const getnewquestion = () => {
    if(availableQuestions.length === 0)
    {
        alert("Game over!!!");
        return;
    }


    questioncounter++;
    questionCounterText.innerText = `${questioncounter}/${maxQuestions}`;

    currentquestion=availableQuestions[0];
    console.log(currentquestion);

    question.innerText= currentquestion.question;
    console.log(answer);
    // answer-text.innerText= currentquestion.answer;

    // availableQuestions.shift();
    // getnewquestion();
}


startgame();