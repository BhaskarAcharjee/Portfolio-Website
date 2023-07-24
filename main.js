// ====================== Scroll-to-Top Function ======================

// JavaScript to hide scroll indicator when the user scrolls
document.addEventListener("scroll", function () {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  scrollIndicator.style.display = "none";
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// >>>>>>>>>>>>>>>>>>>>> Show/Hide Scroll-to-Top Button <<<<<<<<<<<<<<<<<<<<<<<
const headerSection = document.querySelector(".header-section");
const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

function handleScroll() {
  if (window.scrollY >= headerSection.offsetHeight) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
}

// Attach the scroll event listener to the window
window.addEventListener("scroll", handleScroll);

/*==================== About Section ====================*/

// >>>>>>>>>>>>>>>>>>>>> Typing Animation <<<<<<<<<<<<<<<<<<<<<<<
const texts = [
  "Data Analyst",
  "Python Developer",
  "Web Developer",
  "Android Developer",
  "Graphic Designer",
  "Youtuber",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];

  if (index < currentText.length) {
    letter = currentText.slice(0, ++index);
  } else {
    letter = currentText.slice(0, index);
  }

  document.getElementById("typing-animation").textContent = letter + "|"; // Add text cursor

  if (letter.length === currentText.length) {
    setTimeout(backspace, 2000); // Delay before starting the backspacing animation
  } else if (index === currentText.length) {
    setTimeout(type, 500); // Delay before starting the next typing animation
  } else {
    setTimeout(type, 100); // Adjust typing speed (in milliseconds)
  }
}

function backspace() {
  const currentLength = currentText.length;

  if (index > 0) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, index);
  }

  document.getElementById("typing-animation").textContent = letter + "|"; // Add text cursor

  if (index === 0) {
    count++;
    setTimeout(type, 500); // Delay before starting the next typing animation
  } else {
    setTimeout(backspace, 50); // Adjust backspacing speed (in milliseconds)
  }
}

type(); // Start the typing animation

// >>>>>>>>>>>>>>>>>>>>> About Me Animation <<<<<<<<<<<<<<<<<<<<<<<
const typingText = `I am <Bhaskar Acharjee>, an aspiring <Electronics and Communication engineer> currently pursuing my <Bachelor of Technology> at <Jalpaiguri Government Engineering College>. With a strong passion for technology and design, I constantly strive to explore and enhance my skills in various domains.
    My journey in the field of technology has equipped me with a wide range of technical skills. I am proficient in languages such as <Python>, <Java>, <C/C++>, <HTML/CSS>, and <SQL>. I have hands-on experience with developer tools like <VS Code>, <Android Studio>, <Jupyter Notebooks>, and <MATLAB>. Additionally, I have expertise in <Android app development>, <data analytics> using tools like <Power BI> and <Advanced Excel>, and <graphic design> using Canva, Figma, and Adobe software.
    Beyond technical prowess, I have actively engaged in challenging projects that have honed my problem-solving abilities and attention to detail. I have contributed to the development of PixelCraft, an image editing tool built using the PIL library, allowing users to unleash their creativity through various filters and canvas effects. I have also created Corvas Notes, an Android application for digital note-taking, and an Attendance App for efficient management of student attendance. Driven by a curious and analytical mindset, I have engaged in research and published a paper on the design of a wideband microstrip patch antenna for 5G networks. Moreover, I have actively participated in leadership roles, serving as the Placement Coordinator for the Training and Placement Cell and Finance Manager at the Center For Innovation in my college.
    With a strong foundation in both technical and soft skills, I am eager to contribute my knowledge, creativity, and dedication to making a meaningful impact in the field of technology. I am open to new opportunities and collaborations that allow me to continuously learn, grow, and contribute to innovative projects.`;

const staticText = `I am a highly motivated and diligent individual pursuing a Bachelor of Technology degree in <b>Electronics and Communication</b> at <b>Jalpaiguri Government Engineering College</b>. With a strong academic record and proficiency in programming languages like Java, Python, C/C++, and SQL, I have developed Android applications and also gained expertise in Data visualization. Additionally, I actively contribute to the Training and Placement Cell as a role of Placement Coordinator. 
    <br/>With my strong educational background, technical skills, and leadership experiences, I am well-prepared to take on challenges and contribute effectively to any professional setting relevant with my work profile.`;

const aboutParagraph = document.getElementById("about-paragraph");
const staticParagraph = document.getElementById("static-paragraph");
const image = document.querySelector(".about-col-1 img");

let aboutIndex = 0;
let insideTag = false;
let boldText = "";

function aboutType() {
  if (aboutIndex < typingText.length) {
    const nextChar = typingText.charAt(aboutIndex);

    if (nextChar === "<" && !insideTag) {
      insideTag = true;
      boldText = "";
    } else if (nextChar === ">" && insideTag) {
      insideTag = false;
      aboutParagraph.insertAdjacentHTML(
        "beforeend",
        `<strong>${boldText}</strong>`
      );
    } else if (insideTag) {
      boldText += nextChar;
    } else {
      if (nextChar === "\n") {
        aboutParagraph.insertAdjacentHTML("beforeend", "<br /><br />");
      } else {
        aboutParagraph.insertAdjacentHTML("beforeend", nextChar);
      }
    }

    aboutIndex++;
    setTimeout(aboutType, 10); // Adjust typing speed (in milliseconds)
  } else {
    aboutParagraph.style.display = "none"; // Hide the about-paragraph after typing animation
    staticParagraph.style.display = "block"; // Show the static-paragraph after typing animation completes
  }
}

// Show the static-paragraph and hide the about-paragraph on page load or reload
aboutParagraph.style.display = "none";
staticParagraph.style.display = "block";

image.addEventListener("click", () => {
  aboutParagraph.innerHTML = ""; // Clear the existing content in the about-paragraph
  aboutParagraph.style.display = "block"; // Show the about-paragraph when image is clicked
  staticParagraph.style.display = "none"; // Hide the static-paragraph when image is clicked
  aboutIndex = 0; // Reset the index for typing animation

  aboutType(); // Start the typing animation
});

/********************* Skills Section **********************/

// >>>>>>>>>>>>>>>>>>>>> Skills Markup <<<<<<<<<<<<<<<<<<<<<<<
const skillsData = [
  {
    headerIcon: "fa-solid fa-code",
    headerTitle: "Languages",
    headerSubtitle: "Programming Languages I know",
    skills: [
      { name: "Python", url: "https://www.python.org/" },
      { name: "Java", url: "https://www.java.com/" },
      { name: "C/C++", url: "https://en.cppreference.com/" },
      {
        name: "HTML/CSS",
        url: "https://www.w3.org/standards/webdesign/htmlcss.html",
      },
      { name: "JavaScript", url: "https://www.javascript.com/" },
      { name: "SQL", url: "https://www.w3schools.com/sql/" },
    ],
  },
  {
    headerIcon: "fa-solid fa-wrench",
    headerTitle: "Tools",
    headerSubtitle: "Tools I work with",
    skills: [
      { name: "VS Code", url: "https://code.visualstudio.com/" },
      { name: "Android Studio", url: "https://developer.android.com/studio" },
      { name: "Jupyter Notebooks", url: "https://jupyter.org/" },
      { name: "Power BI", url: "https://powerbi.microsoft.com/en-us/" },
      { name: "MATLAB", url: "https://www.mathworks.com/products/matlab.html" },
      {
        name: "Canva/Figma",
        url: "https://www.canva.com/;https://www.figma.com/",
      },
      { name: "GitHub", url: "https://github.com/" },
    ],
  },
  {
    headerIcon: "fa-solid fa-puzzle-piece",
    headerTitle: "Frameworks",
    headerSubtitle: "Frameworks I use",
    skills: [
      { name: "Android SDK", url: "https://developer.android.com/studio/sdk" },
      { name: "Flask", url: "https://flask.palletsprojects.com/" },
      {
        name: "MySQL Workbench",
        url: "https://www.mysql.com/products/workbench/",
      },
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
    ],
  },
  {
    headerIcon: "fa-solid fa-layer-group",
    headerTitle: "Libraries",
    headerSubtitle: "Libraries I am familiar with",
    skills: [
      {
        name: "Tkinter",
        url: "https://docs.python.org/3/library/tkinter.html",
      },
      { name: "NumPy", url: "https://numpy.org/" },
      { name: "Matplotlib", url: "https://matplotlib.org/" },
      { name: "Pandas", url: "https://pandas.pydata.org/" },
      { name: "PIL", url: "https://pillow.readthedocs.io/" },
      { name: "librosa", url: "https://librosa.org/" },
      // { name: "OpenCV", url: "https://opencv.org/" },
      {
        name: "winsound",
        url: "https://docs.python.org/3/library/winsound.html",
      },
      { name: "pyttsx3", url: "https://pypi.org/project/pyttsx3/" },
    ],
  },
];

const skillsContainer = document.getElementById("skillsContainer");

skillsData.forEach((skill, index) => {
  const isOpen = index === 0 ? "skills__open" : "skills__close";
  const content = `
    <div class="skills__content ${isOpen} reveal">
      <div class="skills__header">
        <i class="${skill.headerIcon} skills__icon"></i>
        <div>
          <h1 class="skills__title">${skill.headerTitle}</h1>
          <span class="skills__subtitle">${skill.headerSubtitle}</span>
        </div>
        <i class="fa-sharp fa-solid fa-chevron-down skills__arrow"></i>
      </div>
      <div class="skills__list">
        ${skill.skills
          .map(
            (item) => `
            <div class="skills__titles">
              <h3 class="skills__name"><a href="${item.url}">${item.name}</a></h3>
            </div>
          `
          )
          .join("")}
      </div>
    </div>
  `;

  skillsContainer.innerHTML += content;
});

// >>>>>>>>>>>>>>>>>>>>> Toggle Skills <<<<<<<<<<<<<<<<<<<<<<<
const skillsHeader = document.getElementsByClassName("skills__header");

function toggleSkills() {
  const parentContent = this.parentNode;
  const isOpen = parentContent.classList.contains("skills__open");

  for (let i = 0; i < skillsHeader.length; i++) {
    const content = skillsHeader[i].parentNode;
    content.classList.remove("skills__open");
    content.classList.add("skills__close");
  }

  if (!isOpen) {
    parentContent.classList.remove("skills__close");
    parentContent.classList.add("skills__open");
  }
}

for (let i = 0; i < skillsHeader.length; i++) {
  skillsHeader[i].addEventListener("click", toggleSkills);
}

// >>>>>>>>>>>>>>>>>>>>> Tab Change (Education & Experience) <<<<<<<<<<<<<<<<<<<<<<<
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/********************* Coding Profile Section **********************/

// >>>>>>>>>>>>>>>>>>>>> No of problems count Animation <<<<<<<<<<<<<<<<<<<<<<<
// Get the target count elements
const leetcodeCountElement = document.getElementById("leetcode-count");
const gfgCountElement = document.getElementById("gfg-count");

// Set the target numbers
const leetcodeTargetCount = 375;
const gfgTargetCount = 175;

// Function to animate the count
function animateProblemsCount(problemelement, problemtarget) {
  let problemcount = 0;
  const problemduration = 2000; // Animation duration in milliseconds
  const probleminterval = Math.ceil(problemduration / problemtarget); // Interval for each count increment

  const problemcountInterval = setInterval(() => {
    problemcount++;
    problemelement.textContent = problemcount;

    if (problemcount >= problemtarget) {
      clearInterval(problemcountInterval);
    }
  }, probleminterval);
}

// Animate the counts on page load
window.addEventListener("DOMContentLoaded", () => {
  animateProblemsCount(leetcodeCountElement, leetcodeTargetCount);
  animateProblemsCount(gfgCountElement, gfgTargetCount);
});

// Function to start the counting animation loop with a delay
function ProblemsstartCountingLoop() {
  setTimeout(() => {
    animateProblemsCount(leetcodeCountElement, leetcodeTargetCount);
    animateProblemsCount(gfgCountElement, gfgTargetCount);

    // Call the function again after a delay
    ProblemsstartCountingLoop();
  }, 7000); // Delay in milliseconds (adjustable)
}

// Start the counting animation loop
ProblemsstartCountingLoop();

/*==================== Portfolio Section ====================*/

// >>>>>>>>>>>>>>>>>>>>> Project Markup <<<<<<<<<<<<<<<<<<<<<<<
const projects = [
  {
    title: "Melody Morph",
    imageUrl: "images/melodymorph.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/MelodyMorph",
    description:
      "MelodyMorph is a Python Flask web application for audio analysis and melody transformation. It provides a user-friendly interface to analyze audio files, extract melodic information, and apply various transformations like transposition, rhythm modification, and harmonic generation. With MelodyMorph, users can explore and manipulate visual melodies effortlessly.",
    category: "python webdev all",
  },
  {
    title: "Pixel Craft",
    imageUrl: "images/pixelcraft.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/PixelCraft",
    description:
      "PixelCraft is an image editing project built using the PIL library. With its intuitive interface and a range of features, it allows users to creatively transform their images. From applying filters like blur, grayscale, and sharpen, to using canvas effects, PixelCraft empowers users to unleash their artistic vision.",
    category: "python all",
  },
  {
    title: "Notes App",
    imageUrl: "images/notesapp.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/CorvasNotesApp",
    description:
      "The notes app is a versatile tool for organizing and managing digital notes. With features like categorization, search functionality, and cloud synchronization, it provides convenience and accessibility. Whether it's jotting down ideas, creating to-do lists, or capturing important information, the notes app is a handy companion for staying organized and productive.",
    category: "app all",
  },
  {
    title: "Sudoku Solver",
    imageUrl: "images/sudokusolver.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/SudokuSolver",
    description:
      "A Sudoku solver is an algorithm or program that aims to solve Sudoku puzzles. It takes an incomplete Sudoku grid as input and fills in the missing numbers according to the Sudoku rules. By using logical deductions and backtracking techniques, the solver iterates through the puzzle, making educated guesses and eliminating possibilities until a valid solution is found or all possibilities are exhausted. The Sudoku solver provides a systematic approach to solving Sudoku puzzles efficiently and accurately.",
    category: "python all",
  },
  {
    title: "Morse Enigma",
    imageUrl: "images/morseenigma.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/MorseEnigma",
    description:
      "Morse Enigma is a communication system that uses Morse code encryption to transmit messages securely. It combines the principles of the traditional Morse code with the complexity of an Enigma machine, adding an additional layer of encryption. The system employs a series of rotating cipher wheels to encode and decode messages, ensuring confidentiality and confidentiality in communication.",
    category: "python all",
  },
  {
    title: "AIConverse",
    imageUrl: "images/aiconverse.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/AIConverse",
    description:
      "AIConverse is an advanced chatbot platform powered by artificial intelligence. It utilizes natural language processing and machine learning techniques to understand and respond to user queries in a conversational manner. With its intelligent algorithms and customizable features, AIConverse provides a seamless and interactive chatbot experience for various applications, including customer support, virtual assistants, and information retrieval.",
    category: "python all",
  },
  {
    title: "HandSphere",
    imageUrl: "images/handsphere.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/HandSphere",
    description:
      "HandSphere combines the capabilities of hand cricket and rock-paper-scissors games. It leverages computer vision and machine learning algorithms to detect and interpret hand gestures in real-time. With HandSphere, users can enjoy interactive and immersive gaming experiences by using hand gestures as input. Whether its playing hand cricket or challenging opponents in rock-paper-scissors, HandSphere brings a new level of fun and engagement to gesture-based gaming.",
    category: "python all",
  },
  {
    title: "Attendance App",
    imageUrl: "images/attandenceapp.png",
    websiteUrl: "#",
    description:
      "The attendance app is a convenient and efficient solution for managing student attendance. It automates the process, allowing for easy tracking and record-keeping. With features like barcode scanning and comprehensive reporting, the app simplifies attendance management, saving time and reducing errors.",
    category: "app all",
  },
  {
    title: "Expense Tracker App",
    imageUrl: "images/expensetrackerapp.png",
    websiteUrl: "#",
    description:
      "The Expense Tracker app is a powerful tool that helps users efficiently track and manage their personal expenses. With intuitive features like expense categorization, budget management, and data visualization, it provides valuable insights into spending patterns. Stay in control of your finances and make informed decisions with this user-friendly app.",
    category: "app all",
  },
  {
    title: "Student Results Analysis",
    imageUrl: "images/student_results_analysis.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/Student-Results-Analysis",
    description: "Analyzing student results to uncover insights",
    category: "data all",
  },
  {
    title: "Carousel Instagram Post",
    imageUrl: "images/studymonkinstaad.png",
    websiteUrl:
      "https://www.behance.net/gallery/174824905/Carousel-Instagram-Post-for-StudyMonk",
    description: "Carousel Instagram Post for StudyMonk",
    category: "graphic",
  },
  {
    title: "Cricket Calculator",
    imageUrl: "images/cricketcalculator.png",
    websiteUrl: "https://bhaskaracharjee.github.io/Cricket-Calculator/",
    description:
      "Cricket Calculator is a web application that allows you to calculate various metrics related to cricket matches. It includes two calculators: Net Run Rate (NRR) Calculator and Duckworth Lewis (DLS) Target Calculator.",
    category: "webdev all",
  },
  {
    title: "Personal Portfolio",
    imageUrl: "images/My_Personal_Portfolio.png",
    websiteUrl: "https://bhaskaracharjee.github.io/Portfolio-Website/",
    description:
      "This website showcases my skills, projects, and experiences, providing visitors with an insight into my professional journey. Feel free to explore and get to know more about me and my work.",
    category: "webdev all",
  },
  {
    title: "Poster Design",
    imageUrl: "images/Museum Poster.png",
    websiteUrl:
      "https://www.behance.net/gallery/174268297/Poster-Design-for-College-Museum/modules/984020541",
    description: "Poster Design for College Museumn",
    category: "graphic",
  },
  // Add more project here
];

function generateProjectMarkup(project) {
  return `
      <a href="${project.websiteUrl}" class="portfolio-box" data-lightbox="work">
        <img src="${project.imageUrl}" alt="" />
        <h2 class="project-title">${project.title}</h2>
        <div class="overlay">
          <h1 class="overlay-text">${project.title}</h1>
          <p class="overlay-text2">${project.description}</p>
        </div>
      </a>
    `;
}

function initializePortfolio() {
  const portfolioContainers = document.querySelectorAll(".portfolio-container");

  // Initialize projects for other categories
  const categories = ["app", "python", "webdev", "data", "graphic", "all"];

  categories.forEach((category) => {
    const categoryProjects = projects.filter((project) =>
      project.category.includes(category)
    );

    const categoryContainer = document.getElementById(category);
    if (categoryContainer) {
      categoryContainer.innerHTML = "";

      categoryProjects.slice(0, numProjectsToShow).forEach((project) => {
        const projectMarkup = generateProjectMarkup(project);
        categoryContainer.innerHTML += projectMarkup;
      });

      // Add "See More" button if there are more projects to show
      if (categoryProjects.length > numProjectsToShow) {
        const seeMoreButton = document.createElement("a");
        seeMoreButton.classList.add("btn", "btn3", "see-more-button");
        seeMoreButton.textContent = "See More";
        seeMoreButton.onclick = () => showAllProjects(category);
        const seeMoreLessContainer = document.querySelector(".see-more-less");
        if (seeMoreLessContainer) {
          seeMoreLessContainer.innerHTML = ""; // Clear any previous content
          seeMoreLessContainer.appendChild(seeMoreButton);
        }
      }
    }
  });
}

// >>>>>>>>>>>>>>>>>>>>> Show-hide More Projects (*issue*) <<<<<<<<<<<<<<<<<<<<<<<

// Add a global variable to keep track of the number of projects to show initially
let numProjectsToShow = 6;

function showAllProjects(category) {
  const categoryContainer = document.getElementById(category);
  if (!categoryContainer) return;

  categoryContainer.innerHTML = "";

  const categoryProjects = projects.filter((project) =>
    project.category.includes(category)
  );

  categoryProjects.forEach((project) => {
    const projectMarkup = generateProjectMarkup(project);
    categoryContainer.innerHTML += projectMarkup;
  });

  const seeLessButton = document.createElement("a");
  seeLessButton.classList.add("btn", "btn3", "see-more-button");
  seeLessButton.textContent = "See Less";
  seeLessButton.onclick = () => showLessProjects(category);
  categoryContainer.appendChild(seeLessButton);

  const seeMoreLessContainer = document.querySelector(".see-more-less");
  if (seeMoreLessContainer) {
    seeMoreLessContainer.innerHTML = ""; // Clear any previous content
    seeMoreLessContainer.appendChild(seeLessButton);
  }
}

function showLessProjects(category) {
  const categoryContainer = document.getElementById(category);
  if (!categoryContainer) return;

  categoryContainer.innerHTML = "";

  const categoryProjects = projects.filter((project) =>
    project.category.includes(category)
  );

  categoryProjects.slice(0, numProjectsToShow).forEach((project) => {
    const projectMarkup = generateProjectMarkup(project);
    categoryContainer.innerHTML += projectMarkup;
  });

  const seeMoreButton = document.createElement("a");
  seeMoreButton.classList.add("btn", "btn3", "see-more-button");
  seeMoreButton.textContent = "See More";
  seeMoreButton.onclick = () => showAllProjects(category);
  categoryContainer.appendChild(seeMoreButton);

  const seeMoreLessContainer = document.querySelector(".see-more-less");
  if (seeMoreLessContainer) {
    seeMoreLessContainer.innerHTML = ""; // Clear any previous content
    seeMoreLessContainer.appendChild(seeMoreButton);
  }
}

// initialize Portfolio from Project Markup
initializePortfolio();

// >>>>>>>>>>>>>>>>>>>>> Active Filter Projects Tab <<<<<<<<<<<<<<<<<<<<<<<
function openFilter(category) {
  const portfolioContainers = document.querySelectorAll(".portfolio-container");
  const filterItems = document.querySelectorAll(".list");

  portfolioContainers.forEach((container) => {
    if (container.id === category) {
      container.classList.add("active-filter-selected");
    } else {
      container.classList.remove("active-filter-selected");
    }
  });

  filterItems.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");
    if (itemCategory === category) {
      item.classList.add("active-filter");
    } else {
      item.classList.remove("active-filter");
    }
  });
}

/*==================== Certificates and Achievements Section ====================*/

const certificates = [
  {
    image: "images/deloitte_certificate.png",
    title: "Deloitte Virtual Experience",
    description:
      "Certificate of Completion of Deloitte Virtual Experience Program",
  },
  {
    image: "images/cloudprogram_certificate.jpeg",
    title: "30 Days Google Cloud Program",
    description: "Certificate of Completion of 30 days of Google Cloud Program",
  },
  {
    image: "images/EDUCBA_Certificate.jpg",
    title: "Android Training",
    description:
      "Certificate of Completion of Android Mobile Nougat Apps Training",
  },
  {
    image: "images/Digital India Quiz Participation Certificate.jpg",
    title: "Digital india Quiz",
    description: "Certificate of Participation in Digital India Quiz",
  },
  // more certificates
];

let currentCertificateIndex = 0;
const certificateImage = document.getElementById("certificateImage");
const certificateTitle = document.querySelector("#certificates h3");
const certificateDescription = document.querySelector("#certificates p");

function updateCertificateDisplay() {
  certificateImage.src = certificates[currentCertificateIndex].image;
  certificateTitle.textContent = certificates[currentCertificateIndex].title;
  certificateDescription.textContent =
    certificates[currentCertificateIndex].description;
}

function showNextCertificate() {
  currentCertificateIndex = (currentCertificateIndex + 1) % certificates.length;
  updateCertificateDisplay();
}

function showPreviousCertificate() {
  currentCertificateIndex =
    (currentCertificateIndex - 1 + certificates.length) % certificates.length;
  updateCertificateDisplay();
}

/*==================== Contact Section ====================*/

// >>>>>>>>>>>>>>>>>>>>> Contact Me Form Script <<<<<<<<<<<<<<<<<<<<<<<
var sidmenu = document.getElementById("sidemenu");

function openmenu() {
  sidmenu.style.right = "0";
}
function closemenu() {
  sidmenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxrdqUDIVns0po7HGyAyTslEofskNG6iec9AF109f2vGvkcfas6FDX1PmzYmumPd6SDzA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Sucessfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

/********************* Copyright Section **********************/

// >>>>>>>>>>>>>>>>>>>>> Copyright Text Animation <<<<<<<<<<<<<<<<<<<<<<<
const animatedTexts = document.querySelectorAll(".animated-text");

// Function to add animation class when element is in viewport
function animateElements() {
  animatedTexts.forEach((text) => {
    const textPosition = text.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (textPosition < windowHeight - 100) {
      text.classList.add("visible");
    }
  });
}

// Initial animation on page load
animateElements();

// Event listener to animate elements on scroll
window.addEventListener("scroll", animateElements);

// >>>>>>>>>>>>>>>>>>>>> profile Count <<<<<<<<<<<<<<<<<<<<<<<
let count_profileview = 0;
let targetCount = parseInt(localStorage.getItem("profileCount")) || 0;

function animateCount() {
  const countElement = document.getElementById("count_profile");
  const animationDuration = 3000; // Duration of animation in milliseconds
  const updateInterval = animationDuration / targetCount; // Delay between count updates in milliseconds

  let currentCount = 0;
  const intervalId = setInterval(() => {
    currentCount++;
    countElement.textContent = currentCount;

    if (currentCount === targetCount) {
      clearInterval(intervalId);
    }
  }, updateInterval);
}

window.addEventListener("DOMContentLoaded", () => {
  // Retrieve the count from local storage
  const storedCount = localStorage.getItem("profileCount");
  if (storedCount) {
    count_profileview = parseInt(storedCount) + 1; // Increment the count by 1
    targetCount = count_profileview; // Set the target count
  }

  // Update the count on the page
  document.getElementById("count_profile").textContent = count_profileview;

  // Animate the count from 0 to the target value
  animateCount();
});

window.addEventListener("beforeunload", () => {
  // Store the count in local storage before the page is unloaded
  localStorage.setItem("profileCount", count_profileview.toString());
});

//  <!-- ----------end-------- -->
