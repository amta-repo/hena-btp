import { useEffect, useState } from "react";

type TeamSectionProps = {
  variant?: "home" | "about";
};

const teamMembers = [
  {
    name: "Ariane Zossou",
    role: "Directrice Générale",
    photo: new URL("../assets/dg-henabtp.jpeg", import.meta.url).href,
    keepBg: true,
  },
  {
    name: "Ezéckiel Dossou HOUNGBEME",
    role: "Chef Chantier",
    photo: new URL("../assets/Ezéckiel Dossou HOUNGBEME -Chef Chantier.jpeg", import.meta.url).href,
  },
  {
    name: "Alexandre GNIMAHOUE",
    role: "Directeur Technique",
    photo: new URL("../assets/Directeur Technique - Alexandre GNIMAHOUE.jpeg", import.meta.url).href,
  },
  {
    name: "Nelson AHEHEHINNOU",
    role: "Responsable Technique",
    photo: new URL("../assets/Responsable Technique - Nelson AHEHEHINNOU.jpeg", import.meta.url).href,
  },
  {
    name: "Ozias DJAKPO",
    role: "Directeur Administratif et Financier",
    photo: new URL("../assets/Ozias DJAKPO-Directeur Administratif et Financier.jpeg", import.meta.url).href,
  },
  {
    name: "Alida KPONON",
    role: "Secrétaire de Direction",
    photo: new URL("../assets/Secrétaire de Direction - Alida KPONON.jpeg", import.meta.url).href,
    keepBg: true,
  },
  {
    name: "KOKODOME JEHODIC",
    role: "Chef Achat",
    photo: new URL("../assets/KOKODOME JEHODIC - Chef Achat.jpeg", import.meta.url).href,
  },
];

const TeamSection = ({ variant = "home" }: TeamSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const renderTeamCard = (member: (typeof teamMembers)[0], index: number) => (
    <div key={`${member.name}-${index}`} className="group shrink-0 w-full sm:w-[260px]">
      <div className="relative overflow-hidden rounded-sm">
        <img
          src={member.photo}
          alt={`${member.name} - ${member.role} - HENA BTP Cotonou`}
          loading="lazy"
          className={`aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            member.keepBg ? "" : "bg-[#c0c0c0]"
          }`}
          style={
            member.keepBg
              ? undefined
              : {
                  backgroundColor: "#c0c0c0",
                }
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute inset-x-0 bottom-0 translate-y-4 px-5 pb-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80">
            {member.role}
          </p>
          <p className="mt-1 text-base font-bold text-white">{member.name}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-sans text-lg font-bold text-foreground transition-colors group-hover:text-accent">
          {member.name}
        </h3>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          {member.role}
        </p>
      </div>
    </div>
  );

  return (
    <section id="equipe" className="section-padding bg-slate-100/50">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Notre Équipe</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Des <span className="text-gradient">professionnels</span> passionnés
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Architectes, ingénieurs et chefs de chantier — une équipe pluridisciplinaire au service de vos ambitions.
          </p>
        </div>

        {isMobile ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map((m, i) => renderTeamCard(m, i))}
          </div>
        ) : (
          <div className="overflow-hidden">
            <div className="flex w-max gap-6 animate-scroll-x">
              {[...teamMembers, ...teamMembers].map((m, i) => renderTeamCard(m, i))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
