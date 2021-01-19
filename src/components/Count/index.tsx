import React from 'react'

interface CountProps extends React.HTMLProps<HTMLLIElement> {
  name: string
  count: number
}

function Count({ name, count, className = '', ...props }: CountProps) {
  return (
    <li className={`grid place-items-center ${className}`} {...props}>
      <div className="text-primary text-lg font-bold">{count}K</div>
      <div className="text-primary-dark text-xs tracking-widest">{name}</div>
    </li>
  )
}

export default Count
