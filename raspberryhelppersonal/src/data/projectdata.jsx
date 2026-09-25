
export const projects = [
  {
    id: "personalsite",
    title: "This Webpage",
    description:
      "This very webpage. It's the first one where I used a custom domain.",
    technologies: ["React", "Vite", "Vercel"],
    progress: "ongoing",
    github: "https://github.com/raspberryhelp/raspberryhelpdev",
    category: "personalsite",
  },

{
  id: "voronoikmeans",
  title: "K-means Voronoi",
  description: (
    <>
      <p>
        This is more or so a research project for my Computational
        Geometry class, and I was trying to find out whether k-means
        can help Voronoi diagrams better replicate existing political
        boundaries for fun!
      </p>

      <p>
        Mostly an excuse to delve a bit into GIS, but I also learned
        a lot about data processing.
      </p>
      <a
        href="/kmeans.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View PDF
      </a>
    </>
  ),

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "GeoPandas",
    "SciPy",
    "Matplotlib",
  ],
  progress: "ongoing",
    github: "https://github.com/raspberryhelp/kmeansvoronoi-cs6319",
    category: "project",
},
{
    id:"classif",
    title:"Classif.ai",
    description:"Team project that classifies music using a CNN model which processes audio as mel-spectrograms. Done in AIM Fall 2024.",
    progress: "done",
    technologies: ["React", "Vite", "Tailwind", "Tensorflow", "Librosa", "Boto3", "Matplotlib", "SciPy"],
    github: "https://github.com/ly-sona/music-genre-classification",
    category: "project",
},
  {
    id: "personalwebsite2",
    title: "personalwebsite_2",
    description:
      "Old website, am no longer using this as my personal website but keeping it up for archive purposes. It's...it's a site alright ",
    technologies: ["React", "Vite", "Tailwind"],
    progress: "done",
    github: "https://github.com/raspberryhelp/personalwebsite_2",
    category: "personalsite",
  },
{
      id: "cms",
    title: "CMS",
    description:
      "Club management based system that allows users to browse, create and manage clubs. ",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    progress: "done",
    github: "https://github.com/raspberryhelp/CMS",
    category: "project",
  },
  {
    id:"craftconnect",
    title: "CraftingConecxions",
    description: "Website that allows users of the same major and school to connect with each other. Demoed in WeHack 2024",
    progress: "done",
    technologies: ["Python", "Flask", "Jinja", "SQLAlchemy"],
    github:"https://github.com/sea-shanties/CraftingConecxions",
    category: "project",
  },
    {
    id:"dreamhome",
    title: "Dream Home ",
    description: "A choose your own adventure: Visual Novel for WEHack 2025 for the CBRE Track. This was made with Renpy 8.5.2. Unfortunately I couldn't try to use APIs for this because of the time limit but I thought it was a cool concept to try.",
    progress: "done",
    technologies: ["RenPy"],
    github:"https://github.com/raspberryhelp/Wehack-Dream-Home",
    category: "project",
  },

];