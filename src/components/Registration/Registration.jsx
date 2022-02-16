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
    const [userFocus, setUserFocus] = useState(false)
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

// useEffect to check userName against regex - setting valid name to true or false
    useEffect(() => {
        const result = USERNAME_EXP.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

// useEffect to check password against regex - then validate with matching password
    useEffect(() => {
        const result = PWD_EXP.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

// useEffect for the error message
    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

  return (
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} 
        aria-live="assertive">{errMsg}</p>
        <h1 className="title">Register</h1>
    <form action="">
        <label htmlFor="username"></label>
        <input type="text" 
        id='username' 
        ref={userRef} 
        autoComplete='off' 
        onChange={(e) => setUser(e.target.value)} 
        required
        aria-invalid={validName ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
        />
        <p id='uidnote' className={userFocus && user && !validName ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />

        </p>
    
    <label htmlFor=""></label><label htmlFor=""></label>
</form>

    </section>
  )
}
