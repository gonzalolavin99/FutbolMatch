is a mobile application designed to connect amateur soccer players, allowing them to find and organize matches, join teams, and manage their player profiles. Built with React Native and Expo, this app aims to create a vibrant community of soccer enthusiasts.
Features

Match Finder: Browse and join available soccer matches in your area.
Match Creation: Organize your own matches and invite other players.
Player Profiles: Create and manage your player profile, including skills, preferred positions, and availability.
Team Management: Form teams with other players for recurring matches or tournaments.
Ratings & Reviews: Rate your teammates and opponents after matches to build a trusted community.
Real-time Updates: Receive notifications about match changes, team invitations, and more.

Technologies Used

React Native
Expo
TypeScript
React Navigation
Expo Router
AsyncStorage for local data persistence

Getting Started
Prerequisites

Node.js (v14 or later)
npm or yarn
Expo CLI
iOS Simulator or Android Emulator (or a physical device for testing)

Installation

Clone the repository:
Copygit clone https://github.com/yourusername/futbol-amateur-app.git
cd futbol-amateur-app

Install dependencies:
Copynpm install
# or
yarn install

Start the Expo development server:
Copynpx expo start

Run the app on your preferred platform:

Press i for iOS Simulator
Press a for Android Emulator
Or scan the QR code with the Expo Go app on your physical device



Project Structure
Copyfutbol-amateur-app/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx        # Home screen
│   │   ├── matches.tsx      # Match list screen
│   │   └── profile.tsx      # User profile screen
│   ├── login.tsx            # Login screen
│   └── register.tsx         # Registration screen
├── components/
│   ├── MatchCard.tsx        # Reusable match card component
│   └── UserAvatar.tsx       # User avatar component
├── constants/
│   └── Colors.ts            # App color scheme
├── hooks/
│   └── useAuth.ts           # Custom hook for authentication
├── navigation/
│   └── TabBarIcon.tsx       # Tab bar icon component
├── App.tsx                  # Main app component
└── package.json             # Project dependencies and scripts
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

Thanks to all the contributors who have helped shape this project.
Special thanks to the React Native and Expo communities for their excellent documentation and support.

Contact
For any queries or suggestions, please open an issue in this repository or contact the maintainer at gonzalolavin99@gmail.com.

Happy coding and enjoy your matches! ⚽️🎉
