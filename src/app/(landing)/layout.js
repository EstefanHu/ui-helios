import Link from "next/link";
import styles from './landingLayout.module.scss'

export default function LandingLayout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <Link href='/'>
                    <p className={styles.logo}>:H</p>
                </Link>

                <span>
                    <Link href='/'>login</Link>
                </span>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}></footer>
        </>
    )
}