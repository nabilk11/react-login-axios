import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const USERNAME_EXP = /^[a-z][^\W_]{7,14}$/i;
const PWD_EXP = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/;

export const Registration = () => {
  return (
    <div>Registration

        
    </div>
  )
}
