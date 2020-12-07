'use strict';

// Q1. make a string out of an array 담겨져있는 아이템들을 string으로 묶어내라.
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join('||'); //구분자를 전달할수있음.
  console.log(result);
}

// Q2. make an array out of a string 주어지는 스트링을 array로 변환
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',',2); // 구분자를 넣어야함. limit은 값의 개수
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] 주어진 배열의 순서를 거꾸로
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); //배열 자체도 변함.
  console.log(result);
}

// Q4. make new array without the first two elements 
//새로운 배열을 만들어 주어진 요소중에 3게만 남김.
//배열에서 원하는 부분만 리턴 slice
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // start 인덱스 , last 인덱스는 + 1 값
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 90점인 학생 찾기
// {
//   const result = students.find(function(Student, index){
//     return Student.score === 90;
//   });
//   console.log(result);
// }
//위식을 애로우 함수로 함축 
{
  const result = students.find((Student) => Student.score === 90);
  console.log(result);
}
// Q6. make an array of enrolled students 학생들중에 수업에 등록한 학생만 고르기
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores //점수만 들어있는 배열
// result should be: [45, 80, 90, 66, 88]
//콜백함수로 전달되는 인자는 이해하기 쉽게 적어줌
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
//50점보다 점수가 낮은 학생이있는지 확인
//하나라도 만족한다면 true (some)
//모두 만족한다면 true (every)
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score  점수의 평균을 구해라
//curr은 배열 하나하나 씩 순차적으로 curr에 달됨 (배열에 아이템을 순차적으로 전달받는다.)
//prev는 리턴한 값(curr)이 그 다음에 호출할때 prev로  연결됨  (이전에 콜백함수로 리턴된값이 전달됨)
//reduceRight 는 배열에 제일 뒤에서부터 시작 
//reduce는 배열하나나를 돌면서 무언가 값을 누적할때 씀

{
  const result = students.reduce((prev, curr) => {  
    console.log('----------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores 학생들의 모든점수를 스트링으로 변환
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score)
  .sort((a, b)=> a - b)
  .join();
  console.log(result);

}