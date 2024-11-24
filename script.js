
document.addEventListener("DOMContentLoaded", () => {
    
    const companySelect = document.getElementById("company");
    const subjectSelect = document.getElementById("subject");
    const areaCodeSelect = document.getElementById("areaCode");

    const mockApiUrl = "https://run.mocky.io/v3/9c076903-f80e-4b19-94ee-31031e94a46f"; 

    fetch(mockApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {
            
            data.companies.forEach(company => {
                const option = document.createElement("option");
                option.value = company;
                option.textContent = company;
                companySelect.appendChild(option);
            });

            
            data.subjects.forEach(subject => {
                const option = document.createElement("option");
                option.value = subject;
                option.textContent = subject;
                subjectSelect.appendChild(option);
            });

            
            data.areaCodes.forEach(areaCode => {
                const option = document.createElement("option");
                option.value = areaCode;
                option.textContent = areaCode;
                areaCodeSelect.appendChild(option);
            });

        })
        .catch(error => {
            console.error("Error:", error);
        });



        const leftAd = document.querySelector(".ad-left");
        const rightAd = document.querySelector(".ad-right");

        
        const leftCloseButton = leftAd.querySelector(".close-ad");
        leftCloseButton.addEventListener("click", () => {
        leftAd.style.display = "none"; 
        });

        
        const rightCloseButton = rightAd.querySelector(".close-ad");
        rightCloseButton.addEventListener("click", () => {
        rightAd.style.display = "none"; 
        });
        
});



document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("registrationForm");
    const firstName = document.getElementById("firsName");
    const lastName = document.getElementById("lastName");
    const company = document.getElementById("company");
    const email = document.getElementById("email");
    const areaCode = document.getElementById("areaCode");
    const phoneNumber = document.getElementById("phoneNumber");
    const subject = document.getElementById("subject");
    const beginnerYes = document.getElementById("beginnerYes");
    const beginnerNo = document.getElementById("beginnerNo");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        
        if (firstName.value.trim() === "") {
            alert("First Name is required.");
            return;
        }

        if (lastName.value.trim() === "") {
            alert("Last Name is required.");
            return;
        }

        if (company.value.trim() === "") {
            alert("Please select a company.");
            return;
        }

        if (!email.value.trim() || !validateEmail(email.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (areaCode.value.trim() === "") {
            alert("Please select an area code.");
            return;
        }

        if (!phoneNumber.value.trim() || !/^\d{7}$/.test(phoneNumber.value)) {
            alert("Please enter a valid 7-digit phone number.");
            return;
        }

        if (subject.value.trim() === "") {
            alert("Please select a subject.");
            return;
        }

        if (!beginnerYes.checked && !beginnerNo.checked) {
            alert("Please select whether you are a beginner or not.");
            return;
        }
        
        console.log("submitted");

        
        window.location.href = "/submitted.html";
    });

    // E-posta doğrulama fonksiyonu
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});