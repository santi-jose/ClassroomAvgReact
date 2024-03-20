import React from "react";
import students from "../studentData.js";

const Table = () => {
  // create state to track average grades of students
  // initialize state using a map to return an array of student.averageGrade's
  const [averages, setAverages] = React.useState(
    students.map((student) => {
      return student.averageGrade;
    })
  );

  // create state to track classroom grade average
  // initialize state using helper function to calculate the
  const [classroomAverage, setClassroomAverage] = React.useState(
    calcAverage(averages)
  );

  function handleChange(e) {
    // when the input text changes
    // create a new array to update our state variable with
    // map the current averages array. If we find our target
    // input text, return the updated value from the e.target.value
    //  to update state variable.
    // else return the current array value.
    let newAverages = averages.map((average, i) => {
      if (Number(e.target.id) === (i)) { // if we are at the target input text
        return Number(e.target.value); // return the value in the text input
      } else {
        return average;
      }
    });
    setAverages(newAverages);
    setClassroomAverage(calcAverage(newAverages)); // set new averages using calcAverages
  }

  // create rows for student data in table using map
  const studentRows = students.map((student, i) => {
    return (
      <tr
          key={student.id}
      >
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.address}</td>
        <td>
          <input
            type="text"
            id={i}
            value={averages[i]}
            onChange={handleChange}
          />
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Average Grade</th>
          </tr>
        </thead>
        <tbody>{studentRows}</tbody>
      </table>
      <div id="classroom-average">Classroom Average: {classroomAverage}</div>
    </div>
  );
};

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

export default Table;
