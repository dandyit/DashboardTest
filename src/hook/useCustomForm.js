import {useState, useEffect, useRef} from 'react';


const useCustomForm = ({initialValues, onSubmit}) => { 
    const [values,setValues] = useState(initialValues || {});
    const [errors,setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [onSubmitting, setOnSubmitting] = useState(false);
    const [onBlur, setOnBlur] = useState(false);



    console.log('My first custom hook')
  }

  export default useCustomForm;