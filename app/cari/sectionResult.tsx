import React, { use } from 'react'
// import {  } from 'swr';
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(res => res.json())

interface Props {
    query:string;
    // children: JSX.Element|JSX.Element[];
}

export default function SectionResult({query}:Props) {
    
  // const {data} = useSWR()
  const {data, error} = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
  var loading = !data && !error

  return (
    <div style={{marginTop:"10px"}}>
        <p>Hasil Pencarian : {query}</p>
        <div>
          {loading && "sedang mencari ..."}
          {data && data.items.map((user:any, index:number)=>{
            return <ul key={index}>
              <li><Link href={`/cari/${user.login}`}>{user.login}</Link></li>
              <li> <Link href={user.repos_url} >Repository</Link></li>
            </ul>
          })}

        </div>
    </div>
  )
}
