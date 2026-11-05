
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
      <p>This project, informally, is meant to test whether voronoi diagrams can replicate statelines, while having k-means choose the center.</p>
      <p>The simple explainations for these are that a voronoi diagram splits an area into different regions based on which center point is closest. Every region belongs to the center that's closest to it.</p>
      <p>On the other hand, K-means places a few centers, assigns each point to its nearest center, and moves the centers around until the groups make sense.</p>
      <p>These are both ways of playing around with centers. Most papers I read was mostly concerned about using Voronoi for K-means efficiency, but my project was concering the opposite. I'm surprised I haven't found much of it when I tried to research on it</p>
      <p>So this project tries to use a couple of implementations to test. But it usually went with these steps:</p>
      <p>
        <li>Get geodata points, from a GEOJSON format</li>
        <li>Generate K-means. I've tested both SciPy's and my attempt at MacQueen's algorithm.</li>
        <li>Generate Voronoi Diagrams. I've tested using SciPy's and my attempt at Weighted Voronoi's algorithm</li>
        <li>Plot the diagram</li>
        <li>Measure distance from the borders and get stats</li>
      </p>
      <p>I've tested this on both North Carolina and Mainland US</p>

     <h2>Examples</h2>
      <h3>North Carolina</h3>
      <img src = "/kmeans1.png"></img>
    <p>Stats</p>
    <p>The % amount of lines from the kmeans voronoi following the district lines is: 36.0%
      The mean distances are 3607.461464842934
      The median distances are 2198.602866931222
      The max distance is 18946.727293275428
      The % amount of lines from the original voronoi following the district lines is: 34.2%
      The mean distances are 3595.48176728776
      The median distances are 2382.9663661379273
      The max distance is 19444.315790127373</p>
    <h3>Mainland</h3>
    <img src = "/kmeans2.png"></img>
    <p>
        The % amount of lines from the kmeans voronoi following the district lines is: 23.2%
        The mean distances are 47837.56297403846
        The median distances are 33052.34893449484
        The max distance is 273220.5426417983
    </p>
    <p>I'd encourage you to look at my code (although as of right now it's very tedious, I need to make it more streamlined) and my in-class report for more information</p>

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
    description: (
        <>
        <p>This project aimed to be able to detect music genres from user-uploaded songs. We trained a CNN network (later it changed to one that utilized transfer learning</p>
        <p>The genres involved were: Classical, EDM, Folk, Hip Hop, Jazz, Pop, Reggae, Rnb, Rock, Tollywood</p>
        <p>Basically, we had to get songs and convert them into mel-spectrograms. A mel-spectrogram basically is a way of turning audio into an image.</p>
        <p>We put through all procressed spectrograms into a CNN. A CNN goes like this: Input → Convolution (Scanning) → Pooling (A way of filtering) → Flattening → Classification → Output </p>
        <p>Later we used transfer learning which is basically where a model learns from another model and strengthens itself. </p>
          <img src = "/mel.png"></img>
          A mel spectrogram of dullscythe - Porter Robinson
        </>
    ),
    progress: "done",
    technologies: ["React", "Vite", "Tailwind", "Tensorflow", "Librosa", "Boto3", "Matplotlib", "SciPy"],
    github: "https://github.com/ly-sona/music-genre-classification",
    category: "project",
},

{
      id: "cms",
    title: "CMS",
    description:
     (
      <>
      <p>This project was mostly a CRUD app, which had a MySQL database behind it. The following is a demo video</p>
      <iframe
     src="https://www.youtube.com/embed/JVCldtOKL84"
     title="Project demo"
     referrerPolicy="strict-origin-when-cross-origin"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowFullScreen
   />
      </>
     ),
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    progress: "done",
    github: "https://github.com/raspberryhelp/CMS",
    category: "project",
  },

    {
    id:"dreamhome",
    title: "Dream Home ",
    description:(
      <>
      <p>A choose your own adventure: Visual Novel for WEHack 2025 for the CBRE Track. This was made with Renpy 8.5.2. Unfortunately I couldn't try to use APIs for this because of the time limit but I thought it was a cool concept to try.</p>
      <a href ="https://devpost.com/software/dream-home-a-choose-your-own-adventure">Link to Devpost</a>
      </>
      ),
    progress: "done",
    technologies: ["RenPy"],
    github:"https://github.com/raspberryhelp/Wehack-Dream-Home",
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
    id:"craftconnect",
    title: "CraftingConecxions",
    description: "Website that allows users of the same major and school to connect with each other. Demoed in WeHack 2024",
    progress: "done",
    technologies: ["Python", "Flask", "Jinja", "SQLAlchemy"],
    github:"https://github.com/sea-shanties/CraftingConecxions",
    category: "project",
  },

];