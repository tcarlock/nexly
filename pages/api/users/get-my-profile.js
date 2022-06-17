import { loremIpsum } from 'lorem-ipsum';

const bio = loremIpsum();

export default function handler(req, res) {
  const userProfile = {
    name: 'Tim Carlock',
    avatar: 'profile.jpg',
    bio: bio,
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