const profilePicture = document.querySelector('[data-testid="profilePicture"]');

const fullName = document.querySelector('[data-testid="fullName"]');
const job = document.querySelector('[data-testid="jobTitle"]');
const bio = document.querySelector('[ data-testid="shortBio"]');
const place = document.querySelector('[data-testid="currentLocation"]');
const email = document.querySelector('[data-testid="emailAddress"]');
const socialLinks = document.querySelector('[data-testid="socialLinks"]');
let time = document.querySelector('[data-testid="currentTimeUTC"]');

const user = {
  imageUrl: "./assets/layomi.jpg",
  name: "Oluwalayomi Lawore",
  job: "Frontent Developer",
  place: "Lagos, Nigeria",
  email: "layomilawore@gmail.com",
  socialLinks: [
    {
      id: 1,
      link: "https://twitter.com/layomi1",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/agnesoluwalayomilawore",
    },
  ],
  bio: "I am a frontend developer with one year plus of experience in this field. I am proficient in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React, GIt, RestFUL API and familiar with Angular. I am self motivated and a good team player.",
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

profilePicture.src = user.imageUrl;
fullName.innerHTML = `Full Name: <span class='content'>${user.name}</span>`;

job.innerHTML = `Job: <span class='content'>${user.job}</span>`;
place.innerHTML = `Location: <span class='content'>${user.place}</span>`;
email.innerHTML = `Email:  <span class='content'>${user.email}</span>`;
socialLinks.innerHTML =
  "Social Links: " +
  user.socialLinks
    .map(
      (item) =>
        `<a href="${item.link}" target="_blank" class="links">${item.link}</a>`
    )
    .join(", ");

bio.innerHTML = `Bio:<span class='content'>${user.bio}</span>`;

function updateTime() {
  const today = new Date();
  const hours = String(today.getUTCHours()).padStart(2, "0");
  const minutes = String(today.getUTCMinutes()).padStart(2, "0");
  const seconds = String(today.getUTCSeconds()).padStart(2, "0");

  time.innerHTML = `Current Time:  <span class='content'>${hours}:${minutes}:${seconds}</span> `;
}
updateTime();
setInterval(updateTime, 60000);
