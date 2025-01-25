// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from './components/profile'

export default function Home() {
  return (
    <Profile
    name="Albert Einstein"
    image="https://i.imgur.com/XMU8nH4.jpg"
    profession="theoretical physicist"
    awards="3 (Nobel Prize in Physics, Max Planck Medal, Copley Medal)"
    discovery="theory of relativity"
  />
  )
}
