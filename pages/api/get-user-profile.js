import { loremIpsum } from 'lorem-ipsum';

const bio = loremIpsum();

export default function handler(req, res) {
  const userProfile = {
    name: 'Tim Carlock',
    avatar: 'profile.jpg',
    bio: bio,
    isRecruiter: false,
    isLooking: true,
    isAvailableForOpenOutreach: true,
    isAvailableForJobOutreach: true,
    outreachFields: ['Role Type', 'Seniority', 'Role Details']
  };
  
  console.log('hello');
  res.status(200).json(userProfile);
}