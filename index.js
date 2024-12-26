let current_section_str = "dashboard";
let sample_data;

fetch("./sample.json")
  .then((data) => data.json())
  .then((data) => (sample_data = data));

const menu_icon = document.getElementById("menu-icon");
menu_icon.addEventListener("click", () => {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hide");
});

function toggleSection(section) {
  const current_section = document.getElementById(current_section_str);
  current_section.classList.toggle("hide");

  switch (section) {
    case "dashboard":
      document.getElementById("dashboard").classList.toggle("hide");
      current_section_str = "dashboard";

      break;
    case "supplier-management":
      document.getElementById("supplier-management").classList.toggle("hide");
      current_section_str = "supplier-management";

      break;
    case "purchase-requisition":
      document.getElementById("purchase-requisition").classList.toggle("hide");
      current_section_str = "purchase-requisition";
      break;
    case "purchase-order":
      document.getElementById("purchase-order").classList.toggle("hide");
      current_section_str = "purchase-order";
      break;
    case "goods-receipt":
      document.getElementById("goods-receipt").classList.toggle("hide");
      current_section_str = "goods-receipt";
      break;
    case "invoice-processing":
      document.getElementById("invoice-processing").classList.toggle("hide");
      current_section_str = "invoice-processing";
      break;
    case "payment-processing":
      document.getElementById("payment-processing").classList.toggle("hide");
      current_section_str = "payment-processing";
      break;
    default:
      break;
  }
}
