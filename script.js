const courses = [
  { title: "HTML Basics", level: "Beginner" },
  { title: "CSS Flexbox", level: "Intermediate" },
  { title: "JavaScript DOM", level: "Beginner" }
];

const container = document.getElementById("courseContainer");
const filterBtn = document.getElementById("filterBtn");

function renderCourses(list) {
  container.innerHTML = "";
  list.forEach(course => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${course.title}</h3>
      <p>Level: ${course.level}</p>
    `;
    container.appendChild(div);
  });
}

filterBtn.addEventListener("click", () => {
  const filtered = courses.filter(c => c.level === "Beginner");
  renderCourses(filtered);
});

renderCourses(courses);
