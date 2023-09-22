function showToast(e) {
    e.preventDefault();

    console.log(`this is name: ${name}`);

    // Get the form elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const mobileInput = document.getElementById("mobile");
    const cityInput = document.getElementById("city");

    // Regular expressions for email and phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    // Check if any of the fields are empty
    if (
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        mobileInput.value.trim() === "" ||
        cityInput.value.trim() === ""
    ) {
        Toastify({
            text: "All fields are required.",
            duration: 3000, // 3 seconds
            backgroundColor: "red",
            gravity: "top", // 'top', 'bottom', 'center'
            position: "center", // 'left', 'center', 'right'
        }).showToast();
        return;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        Toastify({
            text: "Enter a valid email address",
            duration: 3000, // 3 seconds
            backgroundColor: "red",
            gravity: "top", // 'top', 'bottom', 'center'
            position: "center", // 'left', 'center', 'right'
        }).showToast();
        return;
    } else if (!phoneRegex.test(mobileInput.value.trim())) {
        Toastify({
            text: "Enter a valid mobile number",
            duration: 3000, // 3 seconds
            backgroundColor: "red",
            gravity: "top", // 'top', 'bottom', 'center'
            position: "center", // 'left', 'center', 'right'
        }).showToast();
        return;
    } else {
        const link = document.createElement("a");
        // link.href = "https://inventstore.in/product/apple-iphone-15/"; // Replace with your desired URL
        link.textContent = "Click here to visit Example.com";
        Toastify({
            text: "Claim your 15% off on brand new iPhone 15 here",
            duration: 5000, // Duration in milliseconds (3 seconds)
            newWindow: true, // Open in a new window/tab
            close: true, // Show a close button to close the toast manually
            gravity: "top", // 'top', 'bottom', 'center'
            position: "center", // 'left', 'center', 'right'
            backgroundColor: "#007bff", // Background color
            stopOnFocus: true, // Stop the timer when the toast is focused
            onClick: function () {
                window.location.replace("https://inventstore.in/");
            }, // Callback after click
        }).showToast();
    }
}
