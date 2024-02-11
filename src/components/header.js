import React from 'react'

const head =() => {
  return (
    <div className='header'>
        <div className='image'>
            <img src='assets/images/avatar-jessica.jpeg' alt='personne' />
        </div>
        <div className='identity'>
            <h1 className='name'>Charbel SONON</h1>
            <span>Cotonou, Benin </span>
            <p className='fontion'>"Full Stack Developer | Web Designer"</p>
        </div>
    </div>
  )
}

export default head;
