import Head from "next/head"
import Navbar from "@/components/Navbar"
import React from "react"

type Props = {
  title?: string
  children: React.ReactNode
}

function AuthLayout(props: Props) {
  return (
    <>
      <Head>
        <title>{props.title ? props.title : "UI Show"}</title>
        <meta name="description" content="Discover designs and hire designers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default AuthLayout