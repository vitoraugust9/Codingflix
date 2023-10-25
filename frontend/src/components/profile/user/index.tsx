import { Form } from "reactstrap";
import styles from "/styles/profile.module.scss";

const UserForm = function () {
  return (
    <>
	<Form>
	  <div className={styles.formName}>
	    <p className={styles.nameAbbreviation}>NT</p>
      <p className={styles.userName}>NAME TEST</p>
    </div>
    <div className={styles.memberTime}>
	    <img src="/public/profile/iconUserAccount.svg" alt="iconProfile" className={styles.memberTimeImg}/>
	    <p className={styles.memberTimeText}>Membro desde <br /> 20 de Abril de 2020</p>
		</div>
  </Form>
</>
  );
};

export default UserForm;