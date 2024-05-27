import Session from "./Session";
import '../styles/utils.scss'
import Modal from "@/components/Modal"
import Link from "next/link";




export default function Classes({  }) {

  return (
  <div className="sessions" id="trainings">
    <Session
      title="HIIT Blast"
      duration="30min"
      img=""
      alt=""
      text="Get your heart pumping and torch calories with this high-intensity interval training (HIIT) class. Designed to maximize efficiency, this 30-minute session will leave you feeling energized and accomplished, all without leaving your living room."
    />
    <Session
      title="Yoga Flow"
      duration="45min"
      img=""
      alt=""
      text="Find your inner zen and build strength and flexibility with our rejuvenating yoga flow class. Led by experienced instructors, this 45-minute session combines breathwork, mindful movement, and relaxation techniques to leave you feeling centered and balanced, all at your own pase!"
    />
    <Session
      title="Strength & Conditioning"
      duration="60min"
      img=""
      alt=""
      text=" Ready to level up your strength and sculpt your physique? Join our strength and conditioning class for a full-body workout that targets every muscle group. You'll build lean muscle and boost your metabolism in this hour-long session."
    />
    <Session
      title="Pilates Core Fusion"
      duration="45min"
      img=""
      alt=""
      text="Strengthen your core and improve your posture with our Pilates core fusion class. In just 45 minutes, you'll engage your deep abdominal muscles, enhance stability, and increase flexibility through a series of controlled movements and precise alignment cues."
    />
    <Session
      title="Mindful Movement"
      duration="30min"
      img=""
      alt=""
      text="Take a break from the hustle and bustle of daily life and join us for a soothing mindful movement meditation class. In this 30-minute session, you'll cultivate mindfulness, reduce stress, and enhance mind-body awareness through gentle movement, breath awareness, and guided meditation exercises."
    />
    <Session
      title="Boxing Bootcamp "
      duration="60min"
      img=""
      alt=""
      text="Lace up your gloves and get ready to punch, jab, and weave your way to a stronger, more confident you! Our boxing bootcamp is a dynamic 60-minute session that combines cardio, strength training, and boxing techniques for a knockout workout. Get ready to unleash your inner champion and sweat your way to victory!"
    />
       <div className="btn-wrapper">
  <Link href="/register" className="btn__link"><button className="btn">Start Training</button></Link>
    </div>

  </div>
  )
}

