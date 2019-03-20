import React from 'react'
import styled from 'styled-components'

function Kanban({ className, children }) {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

const StyledKanban = styled(Kanban)`
  width:100%;
  display:flex;
  padding:1em;
`

export default StyledKanban