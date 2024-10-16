// interior page js start
// share detail form js start
$(document).ready(function () {
  $("#expertTalk").on("click", function (e) {
    e.preventDefault();
    $(".expert-talk-form").addClass("show");
  });

  $(".close-icon").on("click", function () {
    $(".expert-talk-form").removeClass("show");
  });
  $("#expertcls").on("click", function () {
    $(".expert-talk-form").removeClass("show");
  });
});
$(document).ready(function () {
  $("#ExpertDetailBtn").on("click", function (e) {
    e.preventDefault();
    $(".expert-great-msg").fadeIn().css("display", "flex");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("video");
  var msg = document.getElementById("msg");
  var Expertvideo = document.getElementById("expert-video");
  var Expertmsg = document.getElementById("expert-msg");
  var consultationVideo = document.getElementById("consultation-video");
  var consultationMsg = document.getElementById("consultation-msg");

  if (video && msg) {
    video.addEventListener("ended", function () {
      video.style.width = "65%";
      video.parentElement.style.cssText = `
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      `;
      video.style.transition = "all 0.8s";
      msg.classList.remove("hidden");
      msg.style.width = "100%";
    });
  }
  if (Expertvideo && Expertmsg) {
    Expertvideo.addEventListener("ended", function () {
      Expertvideo.style.width = "65%";
      Expertvideo.parentElement.style.cssText = `
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      `;
      Expertvideo.style.transition = "all 0.8s";
      Expertmsg.classList.remove("hidden");
      Expertmsg.style.width = "100%";
    });
  }
  if (consultationVideo && consultationMsg) {
    consultationVideo.addEventListener("ended", function () {
      consultationMsg.style.width = "100%";
      consultationVideo.style.width = "65%";
      consultationVideo.parentElement.style.cssText = `
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      `;
      consultationVideo.style.transition = "all 0.8s";
      consultationMsg.classList.remove("hidden");
    });
  }
});

const propertyType = document.querySelectorAll("label[for=propertyType]");
const propertybox = document.querySelectorAll(
  ".property-type-dropdown .propertyType-list"
);
const propertyList = document.querySelectorAll(
  ".property-type-dropdown .propertyType-list ul li"
);
const property = document.querySelectorAll("label[for=propertyType] p");

propertyType.forEach((item) => {
  item.addEventListener("click", () => {
    const labelPlaceholder = item.querySelector("label[for=label_placeholder]");
    item.style.color = "#100F3F";
    item.classList.toggle("active");

    propertybox.forEach((box) => {
      if (item.classList.contains("active")) {
        box.style.height = `${box.scrollHeight}px`;
        labelPlaceholder.style.top = "7px";
      } else {
        box.style.height = 0;
      }
    });
  });
  propertyList.forEach((list) => {
    list.addEventListener("click", (event) => {
      const formId = event.currentTarget.closest("form").id;
      if (item) {
        if (formId === "shareDetailForm") {
          document.getElementById("property").textContent =
            event.target.textContent;
        }

        if (formId === "expertForm") {
          document.getElementById("property-expert").textContent =
            event.target.textContent;
        }

        item.classList.remove("active");
        propertybox.forEach((box) => {
          box.style.height = 0;
        });
      }
    });
  });
});

// share-detail-form js end
const budgetLabel = document.querySelector("label[for=budget]");
const budgetDropdown = document.querySelector(".budget-dropdown");

budgetLabel.addEventListener("click", () => {
  budgetLabel.classList.toggle("active");
  if (budgetLabel.classList.contains("active")) {
    budgetDropdown.style.height = `${budgetDropdown.scrollHeight}px`;
  } else {
    budgetDropdown.style.height = 0;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const minBudgetRange = document.getElementById("minBudgetRange");
  const maxBudgetRange = document.getElementById("maxBudgetRange");
  const minValue = document.getElementById("minValue");
  const maxValue = document.getElementById("maxValue");

  // Helper function to format the value
  function formatValue(value) {
    if (value >= 10000000) {
      // Convert to crores with one decimal place
      return `Rs.${(value / 10000000).toFixed(1)}Cr`;
    } else {
      // Display in lakhs without decimal places
      return `Rs.${Math.floor(value / 100000)}Lacs`;
    }
  }

  function updateRange() {
    let min = parseInt(minBudgetRange.value);
    let max = parseInt(maxBudgetRange.value);

    // Ensure the min value is not greater than the max value
    if (min > max) {
      min = max - 1000000;
      minBudgetRange.value = min;
    }

    // Ensure the max value is not less than the min value
    if (max < min) {
      max = min + 1000000;
      maxBudgetRange.value = max;
    }

    // Update display values
    minValue.textContent = formatValue(min);
    maxValue.textContent = formatValue(max);
  }

  minBudgetRange.addEventListener("input", function () {
    updateRange();
    // Prevent the min slider from being set greater than the max slider
    if (parseInt(minBudgetRange.value) > parseInt(maxBudgetRange.value)) {
      minBudgetRange.value = maxBudgetRange.value;
      updateRange();
    }
  });

  maxBudgetRange.addEventListener("input", function () {
    updateRange();
    // Prevent the max slider from being set less than the min slider
    if (parseInt(maxBudgetRange.value) < parseInt(minBudgetRange.value)) {
      maxBudgetRange.value = minBudgetRange.value;
      updateRange();
    }
  });

  updateRange(); // Initialize the range values on page load
});

// interior page js end

// form validation start
// expert form js start
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("expertForm");
  const ExpertDetailBtn = document.getElementById("ExpertDetailBtn");
  const requiredFields = Array.from(
    form.querySelectorAll("input[required], select[required]")
  );

  // Function to check form validity
  const checkFormValidity = () => {
    // Check if all required fields are filled
    const isValid = requiredFields.every(
      (field) =>
        field.value.trim() !== "" &&
        (field.type !== "checkbox" || field.checked)
    );
    // Enable/disable the submit button
    ExpertDetailBtn.disabled = !isValid;
  };

  // Attach event listeners to all required fields
  requiredFields.forEach((field) => {
    field.addEventListener("input", checkFormValidity);
    field.addEventListener("change", checkFormValidity); // for select element
  });
});
// expert form js end
