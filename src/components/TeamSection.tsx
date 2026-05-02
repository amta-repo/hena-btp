import { useEffect, useState } from "react";

type TeamSectionProps = {
  variant?: "home" | "about";
};

const teamMembers = [
  {
    name: "Ariane Zossou",
    role: "Directrice Générale",
    photo: new URL("../assets/dg-henabtp.jpeg", import.meta.url).href,
    accent: "navy",
  },
  {
    name: "Ezéckiel Dossou HOUNGBEME",
    role: "Chef Chantier",
    photo: new URL("../assets/Ezéckiel Dossou HOUNGBEME -Chef Chantier.jpeg", import.meta.url).href,
    accent: "orange",
  },
  {
    name: "Alexandre GNIMAHOUE",
    role: "Directeur Technique",
    photo: new URL("../assets/Directeur Technique - Alexandre GNIMAHOUE.jpeg", import.meta.url).href,
    accent: "navy",
  },
  {
    name: "Nelson AHEHEHINNOU",
    role: "Responsable Technique",
    photo: new URL("../assets/Responsable Technique - Nelson AHEHEHINNOU.jpeg", import.meta.url).href,
    accent: "orange",
  },
  {
    name: "Ozias DJAKPO",
    role: "Directeur Administratif et Financier",
    photo: new URL("../assets/Ozias DJAKPO-Directeur Administratif et Financier.jpeg", import.meta.url).href,
    accent: "navy",
  },
  {
    name: "Alida KPONON",
    role: "Secrétaire de Direction",
    photo: new URL("../assets/Secrétaire de Direction - Alida KPONON.jpeg", import.meta.url).href,
    accent: "orange",
  },
  {
    name: "KOKODOME JEHODIC",
    role: "Chef Achat",
    photo: new URL("../assets/KOKODOME JEHODIC - Chef Achat.jpeg", import.meta.url).href,
    accent: "navy",
  },
];

const overlayStyles = {
  navy:
    "linear-gradient(135deg, rgba(0, 31, 63, 0.92), rgba(10, 34, 68, 0.92)), repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 8px)",
  orange:
    "linear-gradient(135deg, rgba(245, 127, 23, 0.92), rgba(255, 130, 45, 0.9)), repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 8px)",
};

const TeamSection = ({ variant = "home" }: TeamSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const renderTeamCard = (member: (typeof teamMembers)[0], index: number) => (
    <div
      key={`${member.name}-${index}`}
      className="group relative overflow-hidden rounded-[2px] bg-slate-100 shadow-lg shadow-slate-200/50 min-h-[520px] w-full sm:max-w-none shrink-0 lg:w-[280px]"
    >
      <img
        src={member.photo}
        alt={`${member.name} - ${member.role}`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          backgroundImage:
            overlayStyles[member.accent as "navy" | "orange"],
        }}
      >
        <div className="mx-6 text-center text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-white/75 mb-2">
            {member.role}
          </p>
          <h3 className="text-xl font-bold tracking-tight">
            {member.name}
          </h3>
          <p className="mt-2 text-sm text-white/80">{member.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="section-padding bg-slate-100/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent">
            Notre ÉQUIPE
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            PROFESSIONALS
          </h2>
        </div>

        {/* MOBILE */}
        {isMobile ? (
          <div className="grid grid-cols-1 gap-6">
            {teamMembers.map((member, index) =>
              renderTeamCard(member, index)
            )}
          </div>
        ) : (
          /* DESKTOP MARQUEE */
          <div className="overflow-hidden">
            <div className="flex w-max gap-6 animate-scroll-x">
              {[...teamMembers, ...teamMembers].map((member, index) =>
                renderTeamCard(member, index)
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;