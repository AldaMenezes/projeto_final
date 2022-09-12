import React from 'react'
import {
  Container,
  CardGroup,
  Card,
  CardImg,
  Button,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap'
import styles from "../styles/Section.module.css";
import { GithubLogo, LinkedinLogo} from "phosphor-react";

export default function Section() {
  return (
    <Container>
      <h2 className='text-light text-center my-5'>Team Developers</h2>
      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://avatars.githubusercontent.com/u/96148130?v=4"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-muted text-center">
              Alda A. Menezes
            </CardTitle>
            <CardText className='text-center'>
              <a href='https://github.com/AldaMenezes' className={styles.linksSocialGithub}><GithubLogo size={32} />{' '}Github</a>
              <br/>
              <a href='https://www.linkedin.com/in/aldamenezes/' className={styles.linksSocialLinkedin}><LinkedinLogo size={32} />{' '}Linkedin</a>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://avatars.githubusercontent.com/u/92008139?v=4"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-muted text-center">
              Daniel Santos
            </CardTitle>
            <CardText className='text-center'>
              <a href='#' className={styles.linksSocialGithub}><GithubLogo size={32} />{' '}Github</a>
              <br/>
              <a href='#' className={styles.linksSocialLinkedin}><LinkedinLogo size={32} />{' '}Linkedin</a>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://media-exp1.licdn.com/dms/image/D4D35AQFhZR6MGstoDg/profile-framedphoto-shrink_800_800/0/1639891578896?e=1663390800&v=beta&t=ft-w6fQ_80-DlRPopECFhzmWcQlnaMQCgACpsOeIX18"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-muted text-center">
            Ismael Mesquita
            </CardTitle>
            <CardText className='text-center'>
              <a href='https://github.com/mesquitaoliveira' className={styles.linksSocialGithub}><GithubLogo size={32} />{' '}Github</a>
              <br/>
              <a href='https://www.linkedin.com/in/ismael-mesquita/' className={styles.linksSocialLinkedin}><LinkedinLogo size={32} />{' '}Linkedin</a>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://avatars.githubusercontent.com/u/79115354?v=4"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-muted text-center">
            Lázaro Pimentel
            </CardTitle>
            <CardText className='text-center'>
              <a href='https://github.com/Drlazinho' className={styles.linksSocialGithub}><GithubLogo size={32} />{' '}Github</a>
              <br/>
              <a href='https://www.linkedin.com/in/lazarobonfim/' className={styles.linksSocialLinkedin}><LinkedinLogo size={32} />{' '}Linkedin</a>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://pps.whatsapp.net/v/t61.24694-24/294570122_375527801357339_511978523769542431_n.jpg?ccb=11-4&oh=01_AVz37Q_W7ky3nyH2Fnlk3-SH4xmeSYUK3pgoLSyBpdeiwA&oe=632C22D9"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-muted text-center">
            Lucas Matheus
            </CardTitle>
            <CardText className='text-center'>
              <a href='#' className={styles.linksSocialGithub}><GithubLogo size={32} />{' '}Github</a>
              <br/>
              <a href='#' className={styles.linksSocialLinkedin}><LinkedinLogo size={32} />{' '}Linkedin</a>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </Container>
  )
}
