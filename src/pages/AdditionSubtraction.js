import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const AdditionSubtraction = function () {

    const [studentAns, setStudentAns] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const value = e.target;

        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        console.log(value)
    };

    const generateNumArr = function (num1, num2, inc, dec) {
        let numArray = [];
        if (num1 == num2) {
            return;
        };
        if (num2 > num1) {
            for (let index = num1; index <= num2; index += inc) {
                numArray.push(index.toFixed(dec));
            }
        } else {
            for (let i = num1; i >= num2; i -= inc) {
                numArray.push(i.toFixed(dec));
            }
        };
        return numArray;
    };

    const firstArray = generateNumArr(9, 15, 0.001, 3);
    const secondArray = generateNumArr(5, 8, 0.001, 3);

    //write a function that choose 5 random values from two separate arrays
    const instanceGenerator = function (arr1, arr2) {
        let instanceArr = []
        for (let index = 1; index < 6; index++) {
            const randomIndex1 = Math.floor(Math.random() * arr1.length);
            const value1 = arr1[randomIndex1];
            const randomIndex2 = Math.floor(Math.random() * arr2.length);
            const value2 = arr2[randomIndex2];
            let answer = value1 - value2;
            answer = answer.toFixed(3);
            const instance = { "ID": index, "first": value1, "second": value2, "ans": answer };
            instanceArr.push(instance)
        }
        return instanceArr;
    };
    const instanceIbj = instanceGenerator(firstArray, secondArray);

    const gradeAnswers = (e) => {
        e.preventDefault();

    };
    return (
        <div>
            <h1>
                Decimal Addition and Subtraction
            </h1>
            <h2>Find the sum or difference.</h2>
            <Form>
                {instanceIbj.map((inst) => (
                    <Form.Group as={Row} className='mb-3' controlId='formHorizontalProblem' key={`${inst.ID}-${inst.ans}`}>
                        <Form.Label column sm={2} style={{ paddingLeft: "5%" }}>{`${inst.ID}. ${inst.first} - ${inst.second} =`}</Form.Label>
                        <Col sm={1}>
                            <Form.Control type="text" onChange={handleInputChange} name='studentAns' value={inst.ans} required />
                        </Col>
                    </Form.Group>
                ))}
                <Button onClick={gradeAnswers}>Check your answers</Button>
            </Form>
            <h2>Part 1: Find the answer for the following calculations and round your answer to the <em>tenths</em> place.</h2>
            <ol id="content-1"></ol>
            <h2>Part 2: Find the answer for the following calculations and round your answer to the <em>hundredths</em> place.</h2>
            <ol id="content-2"></ol>
            <button id="check-ans2">Check</button>
        </div>
    )
};

export default AdditionSubtraction;