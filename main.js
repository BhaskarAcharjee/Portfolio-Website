/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});


/*==================== TAB Change ====================*/
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

// <!-- -----------Portfolio filter script--------- -->

      var tabfilters = document.getElementsByClassName("list");
      var tabfiltercontents = document.getElementsByClassName(
        "portfolio-container"
      );

      function openfilter(tabfilter) {
        var selectedContainer = document.getElementById(tabfilter);

        if (!selectedContainer.classList.contains("active-filter-selected")) {
          // Filter is not active, toggle it on
          for (var i = 0; i < tabfilters.length; i++) {
            tabfilters[i].classList.remove("active-filter");
          }
          for (var j = 0; j < tabfiltercontents.length; j++) {
            tabfiltercontents[j].classList.remove("active-filter-selected");
            tabfiltercontents[j].style.display = "none";
          }
          event.currentTarget.classList.add("active-filter");
          selectedContainer.classList.add("active-filter-selected");
          selectedContainer.style.display = "flex";
        }
      }


    // <!-- -----------Contact Me Form Script--------- -->

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


    // <!-- -----------Typing Animation--------- -->
    const texts = [
      "Android Developer",
      "Data Analyst",
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
    
 
  // --------------About Me Typing Animation----------
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
          aboutParagraph.insertAdjacentHTML("beforeend", `<strong>${boldText}</strong>`);
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



    // <!-- ----------Animate Skills-------- -->

      function animateSkillBars() {
        const skillBars = document.querySelectorAll(".skill-progress");

        skillBars.forEach((skillBar) => {
          const targetWidth = skillBar.clientWidth;
          skillBar.style.width = "0";

          let width = 0;
          let interval = setInterval(frame, 1);

          function frame() {
            if (width >= targetWidth) {
              clearInterval(interval);
            } else {
              width++;
              skillBar.style.width = width + "px";
            }
          }
        });
      }
      // animateSkillBars();

    // <!-- ----------Copyright Animation-------- -->

    const animatedTexts = document.querySelectorAll('.animated-text');

    // Function to add animation class when element is in viewport
    function animateElements() {
      animatedTexts.forEach((text) => {
        const textPosition = text.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (textPosition < windowHeight - 100) {
          text.classList.add('visible');
        }
      });
    }

    // Initial animation on page load
    animateElements();

    // Event listener to animate elements on scroll
    window.addEventListener('scroll', animateElements);



    // <!-- ----------See More hidden Projects-------- -->

    // function showHiddenProjects() {
    //   var hiddenProjects = document.querySelectorAll('.hidden-projects');
    //   for (var i = 0; i < hiddenProjects.length; i++) {
    //     hiddenProjects[i].classList.remove('hidden-projects');
    //     // hiddenProjects[i].style.display = 'flex';
    //   }
    // }

    function showHiddenProjects() {
      var hiddenProjects = document.querySelectorAll('.hidden-projects');
      var btn = document.querySelector('.btn');
    
      if (hiddenProjects.length > 0) {
        for (var i = 0; i < hiddenProjects.length; i++) {
          hiddenProjects[i].classList.remove('hidden-projects');
        }
        btn.textContent = 'See Less';
      } else {
        var allProjects = document.querySelectorAll('.portfolio-box');
        for (var i = 6; i < allProjects.length; i++) {
          allProjects[i].classList.add('hidden-projects');
          allProjects[i].style.display = 'none';
        }
        btn.textContent = 'See More';
      }
    }

   // <!-- ----------end-------- -->