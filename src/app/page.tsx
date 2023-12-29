"use client"
import Image from 'next/image'
import styles from './page.module.css'
import HomeB1 from '@/components/HomeB1/HomeB1'
import HomeB2 from '@/components/HomeB2/HomeB2'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeB1/>
      <HomeB2/>
    </main>
  )
}
