export default function handler(req, res) {
  const userProfile = {
    name: 'Tim Carlock',
    avatar: 'profile.jpg',
    bio: 'I\'m former midwesterner with a background in finance, technology and startups. I\'m passionate about all aspects of software development including product strategy, UX design and system architecture. After spending a number of years as an engineer, I\'m now focused on building and running high-performance engineering organizations.',
    isRecruiter: false,
    isHiringManager: true,
    isHiring: true,
    isLooking: true,
    isAvailableForOpenOutreach: true,
    isAvailableForJobOutreach: true,
    outreachFields: ['Role Type', 'Seniority', 'Role Details']
  };
  
  res.status(200).json(userProfile);
}