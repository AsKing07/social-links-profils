import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function social(props) {
  return (
    
    
        <a className='socialLink' href={`https://${props.lien}`}>
        <FontAwesomeIcon className='icon' icon={props.logo} /> 
            {props.nom}
        </a>

    
        
   
  )
}
