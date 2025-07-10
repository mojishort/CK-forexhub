document.addEventListener("DOMContentLoaded", function() {
    var sidebarToggle = document.getElementById("sidebar-toggle");
    var sidebar = document.getElementById("sidebar");
    var main = document.querySelector("main");

    sidebarToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
        main.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var notificationBell = document.getElementById("notification-bell");
    var notificationDropdown = document.querySelector(".notification-dropdown");

    notificationBell.addEventListener("click", function() {
        // Toggle visibility of notification dropdown
        notificationDropdown.style.display = notificationDropdown.style.display === "block" ? "none" : "block";
    });

    // Hide notification dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!notificationBell.contains(event.target) && !notificationDropdown.contains(event.target)) {
            notificationDropdown.style.display = "none";
        }
    });
});

document.getElementById("logoutBtn").addEventListener("click", function() {
  // Redirect to the desired page
  window.location.href = "page.html"; 
  alert("You have been logged out.");
});

document.addEventListener("DOMContentLoaded", function() {
    // Get user name from session storage (assuming it's stored there after login)
    var userName = sessionStorage.getItem("user_name");
    var userNameElement = document.getElementById("user-name");

    // Set the user name in the header
    if (userName) {
        userNameElement.textContent = userName;
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Define the details for each class
    var classInfo = [
      {
        name: "Smc Trading Strategy",
        price: "$200",
        time: "2 months",
        method: "Gmail"
      },
      {
        name: "Market Psychology",
        price: "$200",
        time: "2 months",
        method: "SMS"
      },
      {
        name: "Fundamental Analysis",
        price: "$200",
        time: "2 months",
        method: "Gmail"
      },
      {
        name: "Risk Management",
        price: "$200",
        time: "2 months",
        method: "SMS"
      }
    ];
  
    const message = document.getElementById("message");
    const messageText = document.getElementById("messageText");
    const closeButton = document.getElementById("closeButton");
    const payButton = document.getElementById("payButton");
  
    const displayMessage = (classInfo) => {
      messageText.innerHTML = `To learn more about ${classInfo.name}, please sign up for the class and pay ${classInfo.price}. The class is expected to take a period of ${classInfo.time}.<br><br>`;
      messageText.innerHTML += `Details about the date and time for the classes will be sent to you via ${classInfo.method}.`;
      message.style.display = "flex"; // Show the message
    };
  
    const closeMessage = () => {
      message.style.display = "none"; // Hide the message
    };
  
    // Add click event listeners to each "Learn More" button
    document.querySelectorAll("[id^='learn']").forEach(button => {
      button.addEventListener("click", () => {
        // Get the index of the class info based on the button's ID
        const index = parseInt(button.id.replace("learn", "")) - 1;
        displayMessage(classInfo[index]);
      });
    });
  
    document.getElementById("closeIcon").addEventListener("click", closeMessage);
  });
    
  function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const passwordToggle = document.querySelector(`#${inputId} + .password-toggle`);
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordInput.classList.add("text");
      passwordToggle.setAttribute('name', 'eye-outline');
    } else {
      passwordInput.type = "password";
      passwordInput.classList.remove("text");
      passwordToggle.setAttribute('name', 'eye-off-outline');
    }
  }

  
// Get DOM elements
const updateButton = document.getElementById('updateButton');
const updateFormContainer = document.getElementById('updateFormContainer');
const closeFormIcon = document.getElementById('closeForm');
const updateForm = document.getElementById('updateForm');

// Function to show update form
function showUpdateForm() {
    updateFormContainer.style.display = 'block';
}

// Function to hide update form
function hideUpdateForm() {
    updateFormContainer.style.display = 'none';
}

// Event listener for update button
updateButton.addEventListener('click', showUpdateForm);

// Event listener for close form icon
closeFormIcon.addEventListener('click', hideUpdateForm);

// Event listener for form submission
updateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // You can perform further actions with the form data here, such as updating the user profile
    // For demonstration, let's just log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    
    // Hide the form after submission
    hideUpdateForm();
});


  