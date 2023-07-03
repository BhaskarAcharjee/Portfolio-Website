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
    // <!-- ----------end-------- -->