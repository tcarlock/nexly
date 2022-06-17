import { loremIpsum } from 'lorem-ipsum';

const bio = loremIpsum();

export default function handler(req, res) {
  const userProfile = {
    name: 'Ted Mosby',
    avatar: 'profile.jpg',
    bio: bio,
    isRecruiter: true,
    isHiringManager: false,
    isHiring: false,
    isLooking: true,
    isAvailableForOpenOutreach: true,
    isAvailableForJobOutreach: true,
    outreachFields: ['Role Type', 'Seniority', 'Role Details']
  };

  res.status(200).json(userProfile);
}