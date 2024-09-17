import React from 'react'

export default function DisplayTitle(props: {title: string}) {
  return (
    <h2 className="font-semibold border-b p-2">{props.title}</h2>
  )
}
