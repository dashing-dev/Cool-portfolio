import React from 'react';
import { Calendar, Users, Award, Target, Lightbulb, TrendingUp } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: 'milestone' | 'achievement' | 'event';
}

const Clubs: React.FC = () => {
  const sitcTimeline: TimelineItem[] = [
    {
      date: 'January 2021',
      title: 'Club Founded',
      description: 'Established Shanti IT Club to empower students with practical IT skills',
      type: 'milestone'
    },
    {
      date: 'June 2022',
      title: 'Elected President',
      description: 'Took leadership role, expanding club activities and membership',
      type: 'milestone'
    },
    {
      date: 'September 2022',
      title: 'First Hackathon',
      description: 'Organized 48-hour hackathon with 80+ participants and industry mentors',
      type: 'event'
    },
    {
      date: 'March 2023',
      title: 'Workshop Series Launch',
      description: 'Started monthly technical workshops covering web development, data science, and cybersecurity',
      type: 'achievement'
    },
    {
      date: 'December 2023',
      title: 'Leadership Transition',
      description: 'Successfully transitioned to mentoring role, establishing club sustainability',
      type: 'milestone'
    }
  ];

  const ggsrcTimeline: TimelineItem[] = [
    {
      date: 'July 2024',
      title: 'Joined as Member',
      description: 'Became active member focusing on robotics projects and community outreach',
      type: 'milestone'
    },
    {
      date: 'October 2024',
      title: 'CyberUtsav 2024',
      description: 'Led organization of major tech fest with 500+ attendees and corporate sponsors',
      type: 'event'
    },
    {
      date: 'January 2025',
      title: 'Robotics Lab Setup',
      description: 'Established dedicated robotics laboratory with Arduino, Raspberry Pi, and 3D printing facilities',
      type: 'achievement'
    },
    {
      date: 'March 2025',
      title: 'Elected President',
      description: 'Unanimously elected president, focusing on expansion and community impact',
      type: 'milestone'
    }
  ];

  const achievements = [
    { icon: Users, metric: '300+', label: 'Students Mentored' },
    { icon: Award, metric: '25+', label: 'Events Organized' },
    { icon: Target, metric: '15+', label: 'Projects Completed' },
    { icon: TrendingUp, metric: '400%', label: 'Membership Growth' },
  ];

  const otherExperiences = [
    {
      title: 'Nawasrijana Literature Fest',
      role: 'Event Organizer',
      period: '2024 - Present',
      description: 'Coordinating cultural and literary events, managing logistics for 1000+ attendees'
    },
    {
      title: 'Shanti Robotics Club',
      role: 'Mentor',
      period: '2024 - Present',
      description: 'Guiding emerging robotics team, providing technical expertise and leadership training'
    },
    {
      title: 'Tech Mentorship Program',
      role: 'Senior Mentor',
      period: '2022 - Present',
      description: 'One-on-one mentoring for students in programming, project development, and career guidance'
    }
  ];

  return (
    <div className="py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Clubs & Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading and mentoring technology communities, fostering innovation, 
            and empowering the next generation of technologists.
          </p>
        </div>

        {/* Achievements Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.metric}</div>
              <div className="text-sm text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Club Sections */}
        <div className="space-y-16">
          {/* GoldenGate Science and Robotics Club */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                GoldenGate Science and Robotics Club
              </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600">
                <span className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>Member since July 2024</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Award size={16} />
                  <span>President since March 2025</span>
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 text-primary-600 mr-2" />
                    Mission & Focus
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Advancing robotics education and scientific research through hands-on projects, 
                    competitions, and community outreach programs.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Robotics competitions and exhibitions</li>
                    <li>• Science project development</li>
                    <li>• Community STEM outreach</li>
                    <li>• Industry partnerships and sponsorships</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 text-primary-600 mr-2" />
                    Leadership Highlights
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Organized CyberUtsav 2024 with major corporate sponsors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Grew club membership by 300% in 8 months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Established robotics lab with modern equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Led 5 inter-college robotics competitions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GG SRC Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
              {ggsrcTimeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="w-16 flex-shrink-0 flex justify-center">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      item.type === 'milestone' ? 'bg-primary-600 border-primary-600' :
                      item.type === 'achievement' ? 'bg-green-500 border-green-500' :
                      'bg-blue-500 border-blue-500'
                    }`}></div>
                  </div>
                  <div className="flex-grow bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <span className="text-sm text-gray-500 font-medium">{item.date}</span>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Shanti IT Club */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Shanti IT Club (SITC)
              </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600">
                <span className="flex items-center space-x-2">
                  <Lightbulb size={16} />
                  <span>Founded January 2021</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Award size={16} />
                  <span>President June 2022 – December 2023</span>
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 text-primary-600 mr-2" />
                    Mission & Impact
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Empowering students through practical IT skills development, fostering innovation, 
                    and creating pathways to technology careers.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hands-on programming workshops</li>
                    <li>• Hackathons and coding competitions</li>
                    <li>• Industry mentorship programs</li>
                    <li>• Career guidance and placement support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 text-primary-600 mr-2" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Mentored 200+ students in programming and project development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Organized 15+ technical workshops and hackathons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Built sustainable leadership transition model</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Established industry partnerships for internships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SITC Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
              {sitcTimeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="w-16 flex-shrink-0 flex justify-center">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      item.type === 'milestone' ? 'bg-primary-600 border-primary-600' :
                      item.type === 'achievement' ? 'bg-green-500 border-green-500' :
                      'bg-blue-500 border-blue-500'
                    }`}></div>
                  </div>
                  <div className="flex-grow bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <span className="text-sm text-gray-500 font-medium">{item.date}</span>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Other Experiences */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Experiences</h2>
              <p className="text-gray-600">
                Additional leadership roles and community involvement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherExperiences.map((experience, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{experience.title}</h3>
                  <div className="flex items-center text-primary-600 mb-3">
                    <span className="font-medium text-sm">{experience.role}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{experience.period}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{experience.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Clubs;