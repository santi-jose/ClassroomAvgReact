# Classroom Average React Refactor

## About
This is a web application that displays data of students in a class in the form of a table. The student data includes: an ID, a name, an address, and an average grade. The average grade of the classroom is also depicted under the table. 

The value of a student's average grade can be edited in the Average Grade column. Entering a new value for a student's average grade will update the classroom grade average. 

## Technologies
1. **IDE**: VSCode
2. **Markup Languages**: Markdown
3. **Programming Languages**: JavaScript, JSX
4. **Style Sheet Languages**: CSS
5. **UI Framework**: React
6. **Local Development Server**: Vite
7. **Version Control System**: Github
8. **Terminal**: Powershell

## Getting Started
This React appplication uses one component, Table.jsx. Table.jsx renders a the table of student data taken from the studentData.js file. The Table component has two state variables:
1. averages: This state variable keeps track of the average grades of the students in an array. 
2. classroomAverage: This state variable keeps track of the classroom grade average. 

The Table component renders the student data array of objects imported from studentData.js into variables students. The table head is hard coded, but we populate the table body using a studentRows component.

The studentRows component is made using map on the students array retrieved from studentData.js. Each array element is turned into a table row, with a key. The table row consists of 4 table data elements: id, name, address, and average grade. 

The Average Grade column contains an input element of type text with an id defined by the map's current index. The value is defined by referencing the averages state variable using the current index in the map iteration (averages\[i\]). These text inputs call the handleChange event handler when the user changes the input value.

The onChange handler is defined as handleChange. This event handler has the event parameter to distinguish which student's average grade input is being changed. We map through the averages state variable to create a new array of values (newAverages) to set our averages state variable to on next render. The e.target.id property is compared against the current index of our map to determine if we should return the e.target.value or the same average value in the array iteration. 

After completing the new array using map, we use our setter setAverages with newAverages to set the new array as our averages state (setAverages(newAverages)). We then set the new classroom average state variable by using our calcAverage helper function (setClassroomAverage(calcAverage(newAverages))). 

The calcAverage helper function iterates through the array argument and stores the sum in a sum variable. After completing the for loop, we return the sum divided by the array argument length. 

## Installation
To install the project, clone the repository into an empty directory on your system via your preferred terminal:
1. Make a directory to clone this repository into\
`C:\PATH>mkdir ClassroomAvgReact`
2. Move into directory\
`C:\PATH> cd ClassroomAvgReact`
3. Clone repository\
`C:\PATH\ClassroomAvgReact> git clone https://github.com/santi-jose/ClassroomAvgReact.git`
4. Run the web app
`C:\PATH\ClassroomAvgReact> npm run dev`
5. Go to [port 5173](http://localhost:5173) where the web application is hosted locally and you will be able to interact with the appplication.
