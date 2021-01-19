import React from 'react'

interface CountProps extends React.HTMLProps<HTMLLIElement> {
  name: string
  count: number
}

function Count({ name, count, className, ...props }: CountProps) {
  return (
    <li className={`grid place-items-center gap-1 ${className}`} {...props}>
      <div className="text-primary font-bold">{count}K</div>
      <div className="text-primary-dark text-xs tracking-wide">{name}</div>
    </li>
  )
}

export default Count
