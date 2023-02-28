import React, { ReactNode } from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <p>Ini layout tambahan di dalam dashboard</p>
        {children}
    </div>
  )
}
