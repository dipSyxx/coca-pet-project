'use client'
import React from 'react'
import Image from 'next/image'
import styles from './FooterStyles.module.sass'
import { AskBlock } from './AskBlock'
import { BlurElements } from '../BlurElements'
import { Typography } from '../Typography'
import { FooterData, FooterDataProps } from '@/data/FooterData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export const Footer = () => {
  const pathname = usePathname()

  const pathnamePages =
    pathname === '/About' || pathname === '/Pricing' || pathname === '/Contact' || pathname === '/Blog'

  return (
    <footer className={clsx(styles.footer, pathnamePages ? styles.footer_dark : '')}>
      <div className="container">
        <div className={clsx(styles.inner_container, pathnamePages ? styles.inner_container_underline : '')}>
          <BlurElements blurE1Top={-110} blurE1Left={-10} blurE2Right={-322} blurE2Bottom={80} />
          <AskBlock pathname={pathname} />
          <div className={styles.block_footer}>
            <div className={styles.footer_logo_text}>
              <Link href="/" className={styles.footer_logo}>
                <Image
                  width={44}
                  height={44}
                  src={pathnamePages ? '/logo/logoWhite.png' : '/logo/logoIcon.png'}
                  alt="logoHead"
                />
                <Image
                  width={86}
                  height={21}
                  className={styles.logoTitle}
                  src={pathnamePages ? '/logo/logoTitleWhite.png' : '/logo/logoTitle.png'}
                  alt="logoTitle"
                />
              </Link>
              <Typography
                variant="bodyLarge"
                component="p"
                fontWeight="fw-500"
                colorVariant={pathnamePages ? 'gray' : ''}
              >
                We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs
              </Typography>
            </div>
            <ul className={styles.footer_list_links}>
              {FooterData.map(({ ...linksItem }: FooterDataProps) => (
                <li className={styles.links_list} key={linksItem.id}>
                  <div className={styles.links_title}>
                    <Typography variant="bodyLarge" component="h6" colorVariant={pathnamePages ? 'white' : ''}>
                      {linksItem.linksTitle}
                    </Typography>
                  </div>
                  <ul className={styles.links_item}>
                    {linksItem.links.map((link, index) => (
                      <li className={styles.item_link} key={index}>
                        <Link href={linksItem.linksHref[index]}>
                          <Typography
                            variant="bodyLarge"
                            fontWeight="fw-400"
                            colorVariant={pathnamePages ? 'gray' : ''}
                          >
                            {link}
                          </Typography>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {pathnamePages ? (
          <div className={styles.socials_block}>
            <div className={styles.block_socials}>
              <ul className={styles.block_icons}>
                <a href="/" target="_blank">
                  <Image src="/FooterIcon/face.svg" width={20} height={20} alt="socials icons" />
                </a>
                <a href="/" target="_blank">
                  <Image src="/FooterIcon/twitt.svg" width={20} height={20} alt="socials icons" />
                </a>
                <a href="/" target="_blank">
                  <Image src="/FooterIcon/inst.svg" width={20} height={20} alt="socials icons" />
                </a>
                <a href="/" target="_blank">
                  <Image src="/FooterIcon/linkin.svg" width={20} height={20} alt="socials icons" />
                </a>
              </ul>
              <div className={styles.block_policy}>
                <Link href="/">
                  <Typography variant="bodyMed" component="p" colorVariant="white" fontWeight="fw-400">
                    Privacy Policy
                  </Typography>
                </Link>
                <Link href="/">
                  <Typography variant="bodyMed" component="p" colorVariant="white" fontWeight="fw-400">
                    Terms & Conditions
                  </Typography>
                </Link>
                <Link href="/">
                  <Typography variant="bodyMed" component="p" colorVariant="white" fontWeight="fw-400">
                    Support
                  </Typography>
                </Link>
              </div>
            </div>
            <Typography colorVariant="white" variant="bodyLarge" fontWeight="fw-400" component="p">
              © Copyright 2023 All Rights Reserved
            </Typography>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <Typography colorVariant="gray" variant="bodyLarge" fontWeight="fw-400" component="p">
              © Copyright 2023 All Rights Reserved
            </Typography>
          </div>
        )}
      </div>
    </footer>
  )
}
