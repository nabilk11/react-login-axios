import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const USERNAME_EXP = /^[a-z][^\W_]{7,14}$/i;
const PWD_EXP = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/;

export const Registration = () => {
    const userRef = useRef();
    const errRef = useRef();
// user state
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocuse] = useState(false)
// password state
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)
// password match state
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)
// success/error msg state
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    // useEffect to set focus when component loads
    useEffect(() => {
        userRef.current.focus()
    }, [])

  return (
    <div>Registration


    </div>
  )
}
