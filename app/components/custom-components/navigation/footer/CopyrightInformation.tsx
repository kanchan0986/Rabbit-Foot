import React from 'react'
import { Link } from 'react-router'

type Props = {}

export default function CopyrightInformation({}: Props) {
  const currentDateTime = new Date()
  const currentYear = currentDateTime.getFullYear()
  return (
    <div className='bg-rf-secondary text-white py-1 flex justify-center'>
      <small>
        <span>&copy; Rabbit Foot </span>
        <span>{currentYear} | </span>
        <span><Link to="." className='active:text-rf-primary-100'>Terms</Link> | </span>
        <span><Link to="." className='active:text-rf-primary-100'>Privacy Policy</Link></span>
      </small>
    </div>
  )
}