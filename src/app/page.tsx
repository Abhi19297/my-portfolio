
import Image from 'next/image';
import {Mail, Phone, Linkedin, Github} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12" >
        <div className="relative rounded-full overflow-hidden h-40 w-40 mx-auto mb-4 shadow-md">
          <Image
            alt="Abhijeet Thakur"
            src="https://picsum.photos/200/200"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Abhijeet Thakur</h1>
        <p className="text-muted-foreground">Android Developer | Kotlin | Clean Architecture Enthusiast</p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Experienced Android developer with over 5 years of expertise in developing, maintaining, and
          enhancing Android applications using Kotlin and Java. Passionate about clean code, modern
          architecture, and delivering exceptional user experiences.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
        </div>
      </section>

      {/* About Me Section */}
      <section className="mb-12 px-4 md:px-16 animate-slideInLeft animate-onscroll" >
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>
              Experienced Android developer with a passion for creating high-quality mobile applications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">
              I am an experienced Android developer with a passion for creating clean, efficient, and
              user-friendly applications. With 5 years in the field, I have worked on a variety of projects,
              honing my skills in Kotlin, Java, and the Android Jetpack suite. I also have 3 years of
              experience in Angular for web development.
            </p>
            <ul className="list-disc list-inside mt-4 pl-4">
              <li>Kotlin, Java</li>
              <li>Android Jetpack (Compose, Navigation, ViewModel, LiveData)</li>
              <li>MVVM, Clean Architecture</li>
              <li>Room, Firebase</li>
              <li>RESTful APIs, JSON</li>
              <li>UI/UX Design</li>
            </ul>
            <p className="mt-4 leading-relaxed">My Android development expertise includes:</p>
            <p className="mt-4 leading-relaxed">
              I am dedicated to writing clean, maintainable code and creating intuitive user interfaces.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="mb-12 px-4 md:px-16 animate-slideInRight animate-onscroll">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>
              Technical skills categorized under Mobile, Web, Tools.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-lg text-gray-700 dark:text-gray-200">Mobile</h3>
                <ul className="list-disc list-inside pl-4 text-gray-600 dark:text-gray-300">
                  <li>Kotlin</li>
                  <li>Java</li>
                  <li>Jetpack Compose</li>
                  <li>MVVM</li>
                  <li>Coroutines</li>
                  <li>Room</li>
                  <li>Firebase</li>
                  <li>SQLite</li>
                  <li>Play Services</li>
                  <li>Payment Gateway Integration</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg text-gray-700 dark:text-gray-200">Web</h3>
                <ul className="list-disc list-inside pl-4 text-gray-600 dark:text-gray-300">
                  <li>Angular 18</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>RESTful APIs</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg text-gray-700 dark:text-gray-200">Tools</h3>
                <ul className="list-disc list-inside pl-4 text-gray-600 dark:text-gray-300">
                  <li>Android Studio</li>
                  <li>IntelliJ IDEA</li>
                  <li>Visual Studio Code</li>
                  <li>Git</li>
                  <li>Postman</li>
                  <li>Jira</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="mb-12 px-4 md:px-16 animate-slideInLeft animate-onscroll">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>
              Key projects showcasing Android and Angular development skills.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="w-full h-full">
                <Card className="h-full shadow-md">
                  <CardHeader>
                    <CardTitle>Mconnect Insurance App</CardTitle>
                    <CardDescription>SBI Life Insurance app for agents.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <strong>Tech Stack:</strong> Kotlin, MVVM, Retrofit, Room
                    </p>
                    <p>
                      Designed for agents to manage sales, track performance, purchase policies, and upload
                      documents.
                    </p>
                    <div className="flex mt-4 space-x-2">
                      {/* Add buttons or links related to the project */}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project 2 */}
              <div className="w-full h-full animate-slideInRight animate-onscroll">
                <Card className="h-full shadow-md">
                  <CardHeader>
                    <CardTitle>Mconnect PWA</CardTitle>
                    <CardDescription>
                      Angular app for agents and clients, similar to the Android version.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <strong>Tech Stack:</strong> Angular 18, TypeScript, Material UI
                    </p>
                    <p>
                      Cross-platform functionality, extending to iOS and other clients, helping agents grow the SBI
                      Life business efficiently.
                    </p>
                    <div className="flex mt-4 space-x-2">
                      {/* Add buttons or links related to the project */}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project 3 */}
              <div className="w-full h-full animate-slideInLeft animate-onscroll">
                <Card className="h-full shadow-md">
                  <CardHeader>
                    <CardTitle>Premium Payer</CardTitle>
                    <CardDescription>
                      Angular app for seamless KYC validation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <strong>Tech Stack:</strong> Angular, TypeScript, REST APIs
                    </p>
                    <p>Seamless KYC validation, supporting CKYC, EKYC, and Physical KYC processes.</p>
                    <div className="flex mt-4 space-x-2">
                      {/* Add buttons or links related to the project */}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project 4 */}
              <div className="w-full h-full animate-slideInRight animate-onscroll">
                <Card className="h-full shadow-md">
                  <CardHeader>
                    <CardTitle>
                      Better You, Your Growth Buddy
                    </CardTitle>
                    <CardDescription>
                      Android eBooks app with journaling and goal-setting features.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <strong>Tech Stack:</strong> Kotlin, Google Authentication, Play Billing
                    </p>
                    <p>
                      Paid eBooks app designed for reading, with additional features for journaling, creating
                      strategy/action plans, and setting goals.
                    </p>
                    <div className="flex mt-4 space-x-2">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-full">
                        Play Store
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project 5 */}
              <div className="w-full h-full animate-slideInLeft animate-onscroll">
                <Card className="h-full shadow-md">
                  <CardHeader>
                    <CardTitle>Collekto (Field &amp; Manage)</CardTitle>
                    <CardDescription>
                      Android app for loan recovery agents.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <strong>Tech Stack:</strong> Java, Google Maps API
                    </p>
                    <p>
                      Helps agents efficiently locate and visit customers for loan recovery by integrating Google
                      Maps API.
                    </p>
                    <div className="flex mt-4 space-x-2">
                      {/* Add buttons or links related to the project */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience Section */}
      <section className="mb-12 px-4 md:px-16 animate-slideInRight animate-onscroll">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Experience 1 */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">NSEIT Pvt Ltd (Nusummit)</h3>
              <p className="text-muted-foreground">Role: Android &amp; Angular Developer | Dates: 12/2021 – Present</p>
              <ul className="list-disc list-inside mt-2 pl-4">
                <li>Developed and maintained Android applications using Java/Kotlin and Angular web applications.</li>
                <li>
                  Contributed to SBI Life’s insurance platform, enabling smooth policy purchases and investment
                  processes.
                </li>
                <li>
                  Integrated REST APIs, authentication modules, and applied performance optimization techniques to
                  improve user experience.
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div>
              <h3 className="font-semibold text-lg">Prolifiquetech</h3>
              <p className="text-muted-foreground">Role: Android Developer | Dates: 07/2020 – 12/2021</p>
              <ul className="list-disc list-inside mt-2 pl-4">
                <li>Developed custom Android applications, focusing on bug fixes, performance enhancements, and API integrations.</li>
                <li>Implemented Room Database, Play Billing, Firebase, Google APIs, and maps to improve application functionality.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="px-4 md:px-16 animate-slideInLeft animate-onscroll">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <a href="mailto:thakurabhi19297@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5"/>
              </a>
              <a href="tel:+918779007101" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5"/>
              </a>
              <a href="https://www.linkedin.com/in/abhijeet-thakur-63485419b/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5"/>
              </a>
              <a href="https://github.com/Abhi19297" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5"/>
              </a>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Kharghar, Navi Mumbai 410210</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}


