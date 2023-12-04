'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { HeaderLinks, HeaderLinksProps } from '@/data/HeaderLinks'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'

import styles from './HeaderStyles.module.sass'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const [scroll, setScroll] = useState(0)
  const [active, setActive] = useState(false)
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  const pathname = usePathname()

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const handleBurgerActive = () => {
    setActive(true)
    setOpenBurgerMenu(true)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <BurgerMenu openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu} setActive={setActive} />
      <header className={clsx(styles.header, scroll < 50 ? '' : styles.headerBg)}>
        <div className={clsx(styles.container)}>
          <Link href="/" className={styles.header_logos}>
            <Image width={44} height={44} src="/logo/logoIcon.png" alt="logoHead" />
            <Image width={86} height={21} className={styles.logoTitle} src="/logo/logoTitle.png" alt="logoTitle" />
          </Link>
          <nav className={styles.nav_menu}>
            <ul className={styles.menu_links}>
              {HeaderLinks.map(({ id, name, href, index }: HeaderLinksProps) => (
                <li key={id} className={clsx(styles.link_item, pathname === href ? styles.link_item_active : '')}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
              <Link href="/Contact" className={styles.links_contact}>
                <span>Contact Us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <button
                onClick={handleBurgerActive}
                className={clsx(styles.nav_menu_burger, active ? styles.nav_menu_burger_active : '')}
                type="button"
              >
                <span></span>
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
