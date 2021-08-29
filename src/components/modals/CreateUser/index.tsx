import styles from './styles.module.scss'
import Input from 'components/Input'
import Button from 'components/Button'

type Props = {
  show: boolean
  setShow: (value: boolean) => void
}

export default function ModalCreateUser({ show, setShow }: Props) {
  if (show) {
    return (
      <div className={styles.ModalCover}>
        <div style={{ width: '767px' }} className="animate__animated animate__zoomInUp">
          <div className={styles.Modal}>
            <div className={styles.ModalHeader}>
              <h3 className="title-medium">Criar um novo usuário</h3>
              <i onClick={() => setShow(false)} className="bx bx-x"></i>
            </div>
            <div className="mt-3">
              <Input labelBg="#FFF" label="Username" defaultValue={'user_name'} name="Database" onChange={() => {}} />
            </div>
            <div className="mt-4">
              <Button type="button" name="Criar meu usuário" />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
