import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import praneetImage from "@/assets/team/praneet-kala.jpg";
import jadyImage from "@/assets/team/jady-pamella.jpg";
import siqiImage from "@/assets/team/siqi-xiang.jpg";
import elenaImage from "@/assets/team/elena-wei.jpg";
import supunImage from "@/assets/team/supun-chathuranga.jpg";
import ziqingImage from "@/assets/team/ziqing-zhang.jpg";

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Praneet Kala",
      role: "Workflow Automation Specialist",
      bio: "Expert in streamlining complex business processes and implementing AI-driven automation solutions.",
      linkedin: "praneet-kala-0b165678",
      image: praneetImage,
      initials: "PK"
    },
    {
      name: "Jady Pamella",
      role: "AI, Cybersecurity & IT Consultant",
      bio: "Specialized in AI security frameworks and protecting intelligent systems from emerging threats.",
      linkedin: "jadypamella",
      image: jadyImage,
      initials: "JP"
    },
    {
      name: "Siqi Xiang",
      role: "AI Master's Student & Ex-Strategy Analyst",
      bio: "Bridging strategic business insights with cutting-edge AI research and implementation.",
      linkedin: "siqi-xiang",
      image: siqiImage,
      initials: "SX"
    },
    {
      name: "Elena Wei",
      role: "Security & Risk Operation Analyst",
      bio: "Ensuring robust security protocols and risk management for AI-powered systems.",
      linkedin: "zhicong-wei",
      image: elenaImage,
      initials: "EW"
    },
    {
      name: "Supun Chathuranga",
      role: "Senior Fullstack Software Engineer",
      bio: "Building scalable, high-performance applications that power our context engineering platform.",
      linkedin: "supun-chathuranga-190372148",
      image: supunImage,
      initials: "SC"
    },
    {
      name: "Ziqing Zhang",
      role: "Info System MSc Student",
      bio: "Researching advanced information systems and their application in AI context management.",
      linkedin: "ziqing-z-109395326",
      image: ziqingImage,
      initials: "ZZ"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A diverse group of experts passionate about revolutionizing how AI systems 
            understand and utilize context for better outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 group-hover:scale-105">
                <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-semibold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              
              <p className="text-primary font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm mx-auto">
                {member.bio}
              </p>
              
              <a
                href={`https://linkedin.com/in/${member.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 hover:scale-105"
              >
                <Linkedin size={18} />
                <span className="text-sm font-medium">Connect</span>
              </a>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '6+', label: 'Team Members' },
            { number: '15+', label: 'Years Combined Experience' },
            { number: '3', label: 'Specialization Areas' },
            { number: '100%', label: 'Commitment to Innovation' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;