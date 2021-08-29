import { useRef } from 'react'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'
import { versionPageRoutes } from 'utils/route'

type Props = {
  hiddenLogs?: boolean
}

export default function DbCard({ hiddenLogs }: Props) {
  const route = useRouter()
  const optionRef = useRef<HTMLDivElement>(null)

  function toggleClass() {
    const classList = optionRef.current.classList
    if (classList.contains('no-viewer')) {
      if (classList.contains('d-none')) classList.remove('d-none')

      classList.remove('animate__animated', 'animate__zoomOutLeft')
      classList.add('animate__animated', 'animate__zoomInLeft')
      classList.remove('no-viewer')
    } else {
      classList.remove('animate__animated', 'animate__zoomInLeft')
      classList.add('animate__animated', 'animate__zoomOutLeft', 'no-viewer')
    }
  }

  return (
    <div className={styles.Card}>
      <div className={styles.CardHeader}>
        <div className={styles.Informations}>
          <div className={styles.Icon}>
            <i className="bx bx-data"></i>
          </div>
          <div className={styles.Texts}>
            <h3>sirus_database</h3>
            <p>db.sirusdns.net.br</p>
          </div>
        </div>
        <div className={styles.Options}>
          <i onClick={toggleClass} className="bx bx-dots-vertical-rounded"></i>

          <div style={{ width: '200px', position: 'absolute' }} ref={optionRef} className="d-none no-viewer">
            <div className={styles.OptionsModal}>
              <li onClick={() => route.push(versionPageRoutes('/databases/c9fc450d-57eb-45f2-8d89-77a1012d231c'))}>
                view details
              </li>
              <li onClick={() => route.push(versionPageRoutes('/databases/c9fc450d-57eb-45f2-8d89-77a1012d231c/edit'))}>
                edit database
              </li>
              <li onClick={() => route.push(versionPageRoutes('/databases/c9fc450d-57eb-45f2-8d89-77a1012d231c/console'))}>
                console database
              </li>
              <li className={styles.Delete}>delete database</li>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.CardBody}>
        {!hiddenLogs && (
          <div className={styles.LastLogs}>
            <p>
              {'>'} starting system on port 3306
              <br />
              <span>{'>'} running successfully</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
