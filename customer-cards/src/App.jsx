import React from 'react'
import Card from './component/card'

const App = () => {

  const userProfile = [
  {
    imageUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    fullName: "Ethan Carter",
    post: "Senior Software Engineer"
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/21.jpg",
    fullName: "Sophia Bennett",
    post: "Frontend Web Developer"
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    fullName: "Liam Anderson",
    post: "Founder & CEO at NovaTech"
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    fullName: "Olivia Thompson",
    post: "UI/UX Designer"
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/55.jpg",
    fullName: "Noah Richardson",
    post: "Backend Developer"
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/63.jpg",
    fullName: "Emma Wilson",
    post: "Product Manager"
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/74.jpg",
    fullName: "James Walker",
    post: "Cloud Solutions Architect"
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/18.jpg",
    fullName: "Charlotte Evans",
    post: "Founder & CEO at PixelForge"
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/81.jpg",
    fullName: "Benjamin Harris",
    post: "Machine Learning Engineer"
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/39.jpg",
    fullName: "Amelia Brooks",
    post: "Mobile App Developer"
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/26.jpg",
    fullName: "Alexander Scott",
    post: "DevOps Engineer"
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/52.jpg",
    fullName: "Grace Mitchell",
    post: "Chief Technology Officer (CTO)"
  }
];


  return(
    <div className="parent">
      {userProfile.map(function (elem, idx){
        return <div key={idx}>
            <Card image={elem.imageUrl} name={elem.fullName} designation={elem.post} />
          </div>
      })}
    </div>
  )
}

export default App