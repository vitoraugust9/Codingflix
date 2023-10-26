import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
  return (<>
    <Container className={styles.footer}>
      <a href="https://www.linkedin.com/in/vitoraugustosilva" target="_blank">
        <img src="/linkfooter.svg" alt="Meu Linkedin" className={styles.footerLink} />
      </a>


      <a href="https://www.onebitcode.com/" target="_blank">
        <img src="/logoOnebitcode.svg" alt="logoFooter" className={styles.footerLogo} />
      </a>
    </Container>
</>);
};

export default Footer