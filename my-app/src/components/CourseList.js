import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  {value: 'react', label: 'React'},
  {value: 'nodejs', label: 'Nodejs'},
  {value: 'linux', label: 'Linux'},
]

 const CourseList = (props) => {
  const [selectOption, setSelectedOption] = useState('');
    return (
        <Select options={options} />
          )
  };

  export default CourseList;

  