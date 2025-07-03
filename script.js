// Handle login modal (optional)
function showLogin() {
  document.getElementById('loginModal').style.display = 'flex';
}

function hideLogin() {
  document.getElementById('loginModal').style.display = 'none';
}

// Handle enrollments
document.addEventListener("DOMContentLoaded", () => {
  const enrollButtons = document.querySelectorAll(".enroll-btn");

  enrollButtons.forEach(button => {
    button.addEventListener("click", () => {
      const courseName = button.getAttribute("data-course");
      let enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

      if (!enrolled.includes(courseName)) {
        enrolled.push(courseName);
        localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
        alert(`You have enrolled in ${courseName}`);
      } else {
        alert(`You are already enrolled in ${courseName}`);
      }
    });
  });
});
