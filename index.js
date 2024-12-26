let current_section_str = "dashboard";
let sample_data = false;

fetch("./sample.json")
  .then((data) => data.json())
  .then((data) => {
    const purchase_requisition_table_body = document.querySelector(
      "#purchase-requisition table tbody"
    );
    const pr_row1 = purchase_requisition_table_body.insertRow();
    if (data) {
      for (const key in data) {
        console.log(key);
      }
      pr_row1.insertCell().textContent = data.purchaseRequisition[0].item;
      pr_row1.insertCell().textContent =
        data.purchaseRequisition[0].description;
      pr_row1.insertCell().textContent =
        data.purchaseRequisition[0].specifications;
      pr_row1.insertCell().textContent = data.purchaseRequisition[0].quantity;
      pr_row1.insertCell().textContent = data.purchaseRequisition[0].status;
    }
  });

const menu_icon = document.getElementById("menu-icon");
menu_icon.addEventListener("click", () => {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hide");
});

function toggleSection(section) {
  document.getElementById(current_section_str).classList.toggle("hide");

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

const purchase_order_table_body = document.querySelector(
  "#purchase-order table tbody"
);
const goods_receipt_table_body = document.querySelector(
  "#goods-receipt table tbody"
);
const invoice_processing_table_body = document.querySelector(
  "#invoice-processing table tbody"
);
const payment_processing_table_body = document.querySelector(
  "#payment-processing table tbody"
);
const supplier_management_table_body = document.querySelector(
  "#supplier-management table tbody"
);
