import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">AppName</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to Our Amazing App
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover a new way to manage your tasks, collaborate with your team, and boost your productivity.
          </p>
          <Button size="lg" className="font-semibold">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        <section id="features" className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="h-8 w-8 text-yellow-500" />, title: "Lightning Fast", description: "Experience unparalleled speed in task management." },
              { icon: <Shield className="h-8 w-8 text-green-500" />, title: "Secure", description: "Your data is protected with state-of-the-art encryption." },
              { icon: <Users className="h-8 w-8 text-blue-500" />, title: "Collaborative", description: "Work seamlessly with your team in real-time." },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {feature.icon}
                    <span className="ml-2">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">About Us</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about creating tools that make your work life easier and more productive. 
            Our team of experts is dedicated to continuous innovation and customer satisfaction.
          </p>
        </section>

        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p className="text-xl text-gray-600 mb-8">
            Have questions or need support? We're here to help!
          </p>
          <Button variant="outline" size="lg" className="font-semibold">
            Contact Us
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2024 AppName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
