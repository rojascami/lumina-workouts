
import '../styles/features.scss'
import Card from './Card.tsx'
interface FeatureProps {
  title: string;
  body: string;
}
const Feature: React.FC<FeatureProps> = ({ title, body }) => {

  return (
    <Card>

      <h4 className="heading-4 heading-4--light">{title}</h4>
      <p className="feature__text">
        {body}
      </p>
    </Card>
  )
}

export default Feature;