import Head from 'next/head'
import Button from '../components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className="flex flex-row">
    <img src="Illustration.png" className="w-6/12 m-20"></img>
    <div className="content mt-20">
      <h1 className="text-2xl mt-12 font-bold">Manage your catering service in a better way</h1>
      <p className="mt-5 w-4/6">With our platform you can manage all your services, orders, providers and more.</p>
      <div className="mt-5 text-white">
        <Link href="/login"><Button name="Login"/></Link>
      </div>
    </div>
    </div>
    </>
  )
}
