import "./footer.css";
import { Container, Row , Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter , faDribbble, faFacebook , faInstagram } from "@fortawesome/free-brands-svg-icons";


const social = [
  { 
    "id": "1",
    "icon": faTwitter,
    "href": "https://twitter.com" 
  },
  { 
    "id": "2", 
    "icon": faDribbble, 
    "href": "https://dribbble.com/" 
  },
  { 
    "id": "3", 
    "icon": faFacebook, 
    "href": "https://www.facebook.com/" 
  },
  { 
    "id": "4", 
    "icon": faInstagram, 
    "href": "https://www.instagram.com/" 
  }
]

const footerSections = [
  {
    title: "sitemap",
    links: [
      { 
        href: "#home", 
        name: "home" 
      },
      { 
        href: "#tech", 
        name: "technology" 
      },
      { 
        href: "#services", 
        name: "services" 
      },
      { 
        href: "#home", 
        name: "about" 
      }
    ]
  },
  {
    title: "case studies",
    links: [
      { 
        href: "#", 
        name: "Swiss Airlines" 
      },
      { href: "#", 
        name: "Google" 
    },
      { href: "#", 
        name: "Apple" 
    },
      { href: "#", 
        name: "Nike" 
      }
    ]
  },
  {
    title: "contact",
    links: [
      { 
        href: "https://jimena-belen-torrilla-frontend-dev.netlify.app/", 
        name: "Portfolio", 
        tb: "_blank"
      },
      { 
        href: "https://www.linkedin.com/in/jimena-belen-torrilla/", 
        name: "LinkedIn",
        tb: "_blank" 
      },
      { 
        href: "https://github.com/jimenabelentorrilla", 
        name: "GitHub",
        tb: "_blank" 
      }
    ]
  }
];

const FooterLink = ({ href, name, tb }) => {
  return (
    <>
      <a className="links" target={tb} href={href}><li>{name}</li></a>  
    </>
  )
}

export const Footer = () => {
  return (
    <Container className="cnt-footer">
      <Row className="row-footer">
        <Col sm={12} md={12} lg={6} xl={6} xxl={6} className="d-flex justify-content-start align-items-start">
          <div className="box-text">
            <div className="cnt-text-foo">
              <h5>compleet labs</h5>
              <p>Fusce dapibus, tellus ac cursus commodo, tortor<br />
                 mauris condimentum nibh, ut fermentum massa<br />
                  justo sit amet risus. Donec ullamcorper nulla.</p>
            </div>
            <div className="cnt-icon">
              { social.map(icon => (
                <a 
                  key={icon.id} 
                  href={icon.href} 
                  target="_blank" 
                  className="social-icn">
                    <FontAwesomeIcon icon={icon.icon} size="1x" />
                </a>
                ))
              }
            </div>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6} xl={6} xxl={6} className="d-flex justify-content-center">
          <div className="cnt-ul">
            { 
              footerSections.map(section => {
                return (
                  <ul key={section.title} className="ul-footer">
                    <li className="bold-foo">{section.title}</li>
                      { section.links.map(link => (
                        <FooterLink 
                          key={link.name} 
                          href={link.href} 
                          name={link.name}
                          tb={link.tb} />
                      ))}
                  </ul>
                )})
            }
          </div>
        </Col>
      </Row>
    </Container>
  )
}
