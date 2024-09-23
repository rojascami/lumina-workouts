
import '../styles/story.scss'

import img1 from '../images/img2.jpg'
import img2 from '../images/img3.jpg'

const Story: React.FC<{}> = () => {
  return (
    <>
    <div className="story__pictures">
    <img src={img1.src} alt="img 1" className="story__img--1" />
    <img src={img2.src} alt="img 2" className="story__img--2" />
  </div><div className="story__background pattern-grid-lg gray-lighter"> 
  <div className="story__content">
    <h3 className="heading heading-3--dark mb-sm">Happy customers</h3>
    <h2 className="heading-2 heading-2--dark mb-sm">
      &ldquo;Highly recommend!&rdquo;
    </h2>
    <p className="story__text  mb-lg">
      I&apos;ve never been one for traditional gyms, but this website has been a game-changer for me! I found an amazing personal trainer who completely understood my goals and tailored workouts to fit my busy schedule. The virtual sessions are so convenient, and I&apos;ve seen incredible results in just a few weeks. - Mary
    </p>
    <h2 className="heading-2 heading-2--dark mb-sm">
      &ldquo;It's like having a personal trainer in my pocket&rdquo;
    </h2>
    <p className="story__text mb-lg">
      I was skeptical about online personal training at first, but this website exceeded all my expectations! The trainer I found is incredibly knowledgeable and supportive, and the customized workout plan they created for me has been both challenging and rewarding. Plus, being able to work out from home has made staying consistent so much easier. - James 
    </p>

  </div>
  </div>
  </>
  )
}

export default Story;
