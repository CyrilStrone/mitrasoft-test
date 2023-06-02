import "../styles/AboutMe.css";
import "../../detailsPage/styles/DetailsPageUser.css";
import { Card } from "react-bootstrap";
import Avatar from '../../../assets/aboutMe/Avatar.jpg'

export const AboutMe = () => {

  return (
    <div className="DetailsPage">
      <Card className="DetailsPageUser">
        <Card className="DetailsPageUser__User">
          <Card.Img src={Avatar} />
          <Card.Body>
            <Card.Title>Кирилл Востроженко</Card.Title>
            <Card.Text>
              cyrilstrone@gmail.com
            </Card.Text>
            <Card.Text>
              +79504291970
            </Card.Text>
            <Card.Text>
              Красноярск, 21 год, родился 30 сентября 2001
            </Card.Text>
            <Card.Text>
              Обо мне:
            </Card.Text>
            <Card.Text>
              Привет! Меня зовут Востроженко Кирилл, и я фронтенд разработчик. За последние два года я активно занимаюсь разработкой пользовательских интерфейсов, работая в основном с такими технологиями, как React, TypeScript, JavaScript, CSS и Effector.
            </Card.Text>
            <Card.Text>
              Опыт работы:
            </Card.Text>
            <Card.Text>
              ООО АБС dev-krabs.ru Frontend-разработчик
            </Card.Text>
            <Card.Text>
              • Cоздал мультиязычный адаптивный web сайт с 3D моделями.
            </Card.Text>
            <Card.Text>
              • Разработал CRM систему для ЖКХ компаний.
            </Card.Text>
            <Card.Text>
              • Участвовал в создании промышленного сайта с
              дашбордами.
            </Card.Text>
            <Card.Text>
              • Настрол CMS Strapi для актуальных и будущих проектов.
            </Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </div>
  );
};
