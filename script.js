window.addEventListener("load", function () {
  const workExperience = [
    {
      companyName: "Zuri HNG",
      companyURL: "https://www.zuri.team/programs/hng/home",
      title: "Front-End Intern",
      dateRange: "Septemper 2023 - Present",
      jobDetails: ["On-hands training as a real-world front-end developer in an intense peer remote environment.",
        "Building practical projects using various web development technologies.",
        "Devloping interpersonal skills, presentation skills, problem-solving and time management skills."],
    },
    {
      companyName: "Microverse",
      companyURL: "https://www.microverse.org/",
      title: "Student Mentor Volunteer",
      dateRange: "April 2023 - August 2023",
      jobDetails: [
        "Provided guidance and motivation to new students, fostering confidence and success.",
        "Collaborated with program staff to identify and address students' needs.",
        "Developed indivodualized success plans, emphasizing strengths and weaknesses.",
        "Developed strong communication and interpersonal skills, as well as the ability to work collaboratively with others to achieve shared goals. Gained valuable experience in mentoring and coaching.",
      ],
    },
    {
      companyName: "Throne of Gold Beauty Salon",
      companyURL: "https://",
      title: "Hairstylist",
      dateRange: "November 2020 - August 2022",
      jobDetails: [
        "During my time as a hairdresser, which lasted for nearly two years, I developed an exceptional eye for detail. Whether I was perfecting intricate hairstyles or creating personalized looks, I thrived on the importance of getting things just right. These qualities have seamlessly carried over into my journey as a web developer, where I apply the same meticulous approach to writing clean, error-free code and ensuring seamless user experiences.",
        "Creativity has always been the driving force behind my work. As a hair stylist, I embraced the opportunity to turn my clients' visions into reality. This same creativity now fuels my passion for web development, allowing me to design visually captivating websites that make a lasting impression on users.",
        "Working closely with clients taught me the value of putting their needs first. I learned the importance of active listening, providing personalized experiences, and delivering exceptional service. These customer-centric skills align perfectly with web development, as I strive to create websites that cater to user requirements and offer intuitive interfaces that meet their expectations.",
        "Time management, of course, was crucial in delivering exceptional results to numerous clients throughout my career as a hairdresser. Juggling multiple appointments, I honed my ability to prioritize tasks, meet deadlines, and work efficiently. These time management skills seamlessly transition into web development, enabling me to handle demanding projects while consistently delivering high-quality work.",
        "Lastly, adaptability and a thirst for learning have been essential in both industries. I continuously updated my skills to stay ahead of the curve. Now, as a web developer, I actively seek out new technologies, tools, and coding practices to stay at the forefront of the field.",
        "I am thrilled to embark on this new chapter as a web developer, utilizing my diverse skill set and transferable experiences to create impactful web solutions.",
      ],
    },
    // {
    //   companyName: "RR Donnelley",
    //   companyURL: "https://www.rrd.com/",
    //   title: "Technology Project Manager",
    //   dateRange: "July 2012 - February 2017",
    //   jobDetails: [
    //     "Led technology projects in a deadline driven environment that married digital technology and physical production.",
    //     "Coordinated a large-scale project for a Fortune 500 company from inception through completion and was responsible for reporting project status to senior management.",
    //     "Maintained and enhanced client websites using HTML, CSS, JavaScript, and jQuery.",
    //   ],
    // },
  ];

  function showMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "visible";
    nav.style.transform = "translateX(0vw)";
    document.querySelector("#mobile-menu-button").classList.add("is-active");
  }

  function hideMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "hidden";
    nav.style.transform = "translateX(100vw)";
    document.querySelector("#mobile-menu-button").classList.remove("is-active");
  }

  function toggleMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    if (nav.style.visibility === "visible") {
      hideMobileMenu();
    } else {
      showMobileMenu();
    }
  }

  function addLineBreak() {
    let isMobile = window.matchMedia("(max-width: 500px)").matches;
    let mobileLineBreak = "";

    if (isMobile) {
      mobileLineBreak = "<br />";
    } else {
      mobileLineBreak = "";
    }

    return mobileLineBreak;
  }

  const initExperienceSection = () => {
    let br = addLineBreak();

    for (let i = 0; i < workExperience.length; i++) {
      document.querySelector("#jobList").innerHTML += `<li data-index=${i}>
                <div class="job-button ease-transition">${workExperience[i].companyName}</div>
            </li>`;
    }

    document
      .querySelectorAll("#jobList > li div")[0]
      .classList.add("job-button-selected");

    document.querySelector(
      ".jobTitle"
    ).innerHTML = `${workExperience[0].title} ${br} <span class="at-symbol">@</span> <a class="animate-links" href="${workExperience[0].companyURL}" target="_blank">${workExperience[0].companyName}</a>`;

    document.querySelector(".jobDateRange").textContent =
      workExperience[0].dateRange;

    workExperience[0].jobDetails.forEach((bullet) => {
      document.querySelector(
        "#job-bulletpoints ul"
      ).innerHTML += `<li>${bullet}</li>`;
    });
  };

  function renderExperienceSection(event) {
    if (event.target.matches(".job-button-selected")) {
      return;
    } else {
      let br = addLineBreak();

      document.querySelector("#job-bulletpoints ul").innerHTML = "";

      let index = event.target.parentElement.attributes["data-index"].value;

      document.querySelector(
        ".jobTitle"
      ).innerHTML = `${workExperience[index].title} ${br} <span class="at-symbol">@</span> <a class="animate-links" href="${workExperience[index].companyURL}" target="_blank">${workExperience[index].companyName}</a>`;

      document.querySelector(".jobDateRange").textContent =
        workExperience[index].dateRange;

      workExperience[index].jobDetails.forEach((bullet) => {
        document.querySelector(
          "#job-bulletpoints ul"
        ).innerHTML += `<li>${bullet}</li>`;
      });

      document
        .querySelectorAll("#jobList li div")
        .forEach((el) => el.classList.remove("job-button-selected"));
      event.target.classList.add("job-button-selected");
    }
  }

  function smoothScrollToCenter(elementId) {
    const el = document.getElementById(elementId);

    const position = elementId === "projects-section" ? "start" : "center";

    el.scrollIntoView({
      behavior: "smooth",
      block: position,
      inline: position,
    });
  }

  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches(".job-button")) {
        renderExperienceSection(event);
      }
    },
    false
  );

  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches(".navLink")) {
        console.log(event.target.attributes[1].value);
        smoothScrollToCenter(event.target.attributes[1].value);
      }
    },
    false
  );

  document
    .querySelector("#mobile-menu-button")
    .addEventListener("click", toggleMobileMenu);

  document
    .querySelector("#mobile-nav-tap-close-background")
    .addEventListener("click", hideMobileMenu);

  let mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach((el) => el.addEventListener("click", hideMobileMenu));

  initExperienceSection();
});
