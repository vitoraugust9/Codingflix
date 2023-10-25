import { Container, Row, Col, Button} from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = function (){
    const scrollToSlideSection = () => {
        const slideSection = document.getElementById("slideSection");
        if (slideSection) {
          slideSection.scrollIntoView({ behavior: "smooth" });
        }
      };
    return <>
        <p className={styles.sectionTitle}>CONTEÚDO DO CURSO</p>
        <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
            <div className={styles.card1}>
                <p className={styles.cardTitle}>FRONT-END</p>
                <p className={styles.cardDescription}>
                Aprender Front-end envolve criar a parte 
                visual e interativa das aplicações, 
                utilizando HTML, CSS e JavaScript. 
                Isso resulta em interfaces atrativas e 
                responsivas, melhorando a experiência do usuário.
                </p>
            </div>
            <div className={styles.card2}>
                <p className={styles.cardTitle}>BACK-END</p>
                <p className={styles.cardDescription}>
                     Back-end, desenvolvedores trabalham na lógica,
                      processamento de dados e gerenciamento de 
                      informações das aplicações. Linguagens como
                      Python, Java e frameworks como Django 
                      são usados para criar servidores, 
                      bancos de dados e APIs.
                </p>
            </div>
            <div className={styles.card3}>
                <p className={styles.cardTitle}>MOBILE</p>
                <p className={styles.cardDescription}>
                O Desenvolvimento Mobile foca em criar 
                aplicativos para dispositivos móveis. 
                Isso envolve linguagens como Swift (iOS) e 
                Kotlin (Android), ou frameworks como o React 
                Native, permitindo que os desenvolvedores 
                atendam à demanda crescente por aplicativos móveis.
                </p>
            </div>
            <div className={styles.card4}>
                <p className={styles.cardTitle}>GIT E GITHUB</p>
                <p className={styles.cardDescription}>
                Aprender Git e GitHub é vital para desenvolvedores. 
                Git controla versões, facilitando colaboração e
                 testes. GitHub hospeda projetos, incentiva 
                 contribuições e simplifica revisões de código. 
                 Juntos, são essenciais para eficiência, 
                 colaboração e crescimento na programação.
                </p>
            </div>
            <div className={styles.card5}>
                <p className={styles.cardTitle}>PROJETOS</p>
                <p className={styles.cardDescription}>                    
                    Ter projetos próprios é essencial para 
                    desenvolvedores, pois permite aplicar 
                    conhecimentos, desenvolver habilidades e 
                    mostrar paixão pela programação. Esses 
                    projetos enriquecem portfólios, 
                    demonstram habilidades práticas e 
                    destacam-se em oportunidades profissionais.
                </p>
            </div>
            <div className={styles.card6}>
                <p className={styles.cardTitle}>CARREIRA</p>
                <p className={styles.cardDescription}>
                    A carreira de programação é uma jornada
                    emocionante para os amantes da tecnologia. 
                    Os programadores criam soluções inovadoras, 
                    resolvem problemas e têm flexibilidade no 
                    trabalho. Com constante evolução, é uma 
                    escolha dinâmica e recompensadora, adequada 
                    para mentes curiosas e criativas.
                </p>
            </div>
        </Container>        
        <Col className="d-flex justify-content-center pt-5">                
            <Button className={styles.ButtonArrowDown} 
                onClick={scrollToSlideSection}>
                <img src="/homeNoAuth/iconArrowDown.svg" 
                alt="arrowDown" 
                className={styles.arrowDown} />
            </Button>                  
        </Col>
    </>;
};

export default CardsSection;
