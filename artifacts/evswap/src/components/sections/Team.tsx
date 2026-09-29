import { FadeIn } from "@/components/ui/fade-in";
import { Linkedin, Mail } from "lucide-react";

const members = [
  {
    name: "Ansar Ullah Khan",
    role: "Founder",
    initials: "AK",
    color: "from-emerald-500 to-green-600",
    bio: "Business Administration student at IMSciences University, Peshawar, with a strong interest in social entrepreneurship and sustainable mobility solutions.",
    linkedin: "https://www.linkedin.com/in/ansar-ullah-khan-a03b02379",
  },
  {
    name: "Abdul Mateen Khan",
    role: "Co-Founder",
    initials: "AMK",
    color: "from-orange-500 to-amber-600",
    bio: "A student with a keen interest in Artificial Intelligence and Robotics. Supports the team by solving IT-related problems and developing ideas around the core battery charging infrastructure challenge in the locality.",
    linkedin: null,
    email: "abdulmateenkhan800@gmail.com",
    image: "/images/abdul-mateen-khan.jpeg",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            The dedicated professionals working tirelessly to revolutionize urban mobility in Peshawar.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {members.map((member, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="text-center group">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-5 shadow-lg ring-4 ring-primary/20 group-hover:ring-primary/50 group-hover:scale-105 transition-all duration-300">
                  <img
                    src={"image" in member && member.image ? member.image : "/images/avatar-placeholder.png"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mt-1 mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>
                )}
                {"email" in member && member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
