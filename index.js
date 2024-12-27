let current_section_str = "dashboard";
let sample_data = false;
let purchase_requisition_data;
let supplier_management_data;
let purchase_order_data;
let goods_receipt_data;
let invoice_processing_data;
let payment_processing_data;

/* fetch("./sample.json")
  .then((data) => data.json())
  .then((data) => {
    const purchase_requisition_table_body = document.querySelector(
      "#purchase-requisition table tbody"
    );
    const pr_row1 = purchase_requisition_table_body.insertRow();
    if (data) {
      for (const key in data) {
        // get the table body reference from the function
        let dataArray = data[key];
        for (const myObject of dataArray) {
          // create a new row
          // loop through the object
          // for every object value create a new cell and append to the row
        }
      }
      pr_row1.insertCell().textContent = data.purchaseRequisition[0].item;
      pr_row1.insertCell().textContent =
        data.purchaseRequisition[0].description;
      pr_row1.insertCell().textContent =
        data.purchaseRequisition[0].specifications;
      pr_row1.insertCell().textContent = data.purchaseRequisition[0].quantity;
      pr_row1.insertCell().textContent = data.purchaseRequisition[0].status;
    }

    const supplier_management_table_body = document.querySelector(
      "#supplier-management table tbody"
    );
  }); */

// toggles nav menu
const menu_icon = document.getElementById("menu-icon");
menu_icon.addEventListener("click", () => {
  const menu = document.getElementsByClassName("dropdown-content")[0];
  menu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  if (!event.target.matches("#menu-icon")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});

function displayPurchaseRequisition(filter = false) {
  const table_element = document.querySelector(
    "#purchase-requisition table tbody"
  );
  table_element.innerHTML = "";

  if (filter) {
    const filtered_Data = purchase_requisition_data.filter(
      (data) => data.status === filter
    );
    for (const key in filtered_Data) {
      let dataObject = filtered_Data[key];
      const row = table_element.insertRow();
      row.insertCell().textContent = dataObject.item;
      row.insertCell().textContent = dataObject.description;
      row.insertCell().textContent = dataObject.specifications;
      row.insertCell().textContent = dataObject.quantity;
      row.insertCell().textContent = dataObject.status;
    }
  } else {
    for (const key in purchase_requisition_data) {
      let dataObject = purchase_requisition_data[key];
      const row = table_element.insertRow();
      row.insertCell().textContent = dataObject.item;
      row.insertCell().textContent = dataObject.description;
      row.insertCell().textContent = dataObject.specifications;
      row.insertCell().textContent = dataObject.quantity;
      row.insertCell().textContent = dataObject.status;
    }
  }
}

function displaySupplierManagement(filter = false) {
  const table_element = document.querySelector(
    "#supplier-management table tbody"
  );

  if (filter) {
    table_element.innerHTML = "";
    const filtered_Data = supplier_management_data.filter(
      (data) => data.rating === filter
    );
    for (const key in filtered_Data) {
      let dataObject = filtered_Data[key];
      const row = table_element.insertRow();
      row.insertCell().textContent = dataObject.businessName;
      row.insertCell().textContent = dataObject.contactInfo;
      row.insertCell().textContent = dataObject.description;
      row.insertCell().textContent = dataObject.rating;
      row.insertCell().textContent = dataObject.totalPrice;
    }
  } else {
    table_element.innerHTML = "";
    for (const key in supplier_management_data) {
      let dataObject = supplier_management_data[key];
      const row = table_element.insertRow();
      row.insertCell().textContent = dataObject.businessName;
      row.insertCell().textContent = dataObject.contactInfo;
      row.insertCell().textContent = dataObject.description;
      row.insertCell().textContent = dataObject.rating;
      row.insertCell().textContent = dataObject.totalPrice;
    }
  }
}

function displayPurchaseOrder(filter = false) {
  const table_element = document.querySelector("#purchase-order table tbody");

  if (filter) {
    table_element.innerHTML = "";
    const filtered_Data = purchase_order_data.filter(
      (data) => data.status === filter
    );
    for (const key in filtered_Data) {
      let dataObject = filtered_Data[key];
      const row = table_element.insertRow();
      row.insertCell().textContent = dataObject.item;
      row.insertCell().textContent = dataObject.description;
      row.insertCell().textContent = dataObject.specifications;
      row.insertCell().textContent = dataObject.quantity;
    }
  } else {
    table_element.innerHTML = "";
    for (const key in purchase_order_data) {
      let dataObject = purchase_order_data[key];
      const row = table_element.insertRow();
      row.insertCell().textContent = dataObject.item;
      row.insertCell().textContent = dataObject.description;
      row.insertCell().textContent = dataObject.specifications;
      row.insertCell().textContent = dataObject.quantity;
    }
  }
}

function displayGoodsReceipt(filter = false) {
  const table_element = document.querySelector("#goods-receipt table tbody");

  if (filter) {
    table_element.innerHTML = "";
    const filtered_Data = goods_receipt_data.filter(
      (data) => data.status === filter
    );
    for (const key in filtered_Data) {
      let dataObject = filtered_Data[key];
      const row = table_element.insertRow();
      row.insertCell().textContent = dataObject.item;
      row.insertCell().textContent = dataObject.specifications;
      row.insertCell().textContent = dataObject.quantity;
      row.insertCell().textContent = dataObject.receivedQuantity;
      row.insertCell().textContent = dataObject.status;
    }
  } else {
    table_element.innerHTML = "";

    for (const key in goods_receipt_data) {
      let dataObject = goods_receipt_data[key];

      const row = table_element.insertRow();
      row.insertCell().textContent = dataObject.item;
      row.insertCell().textContent = dataObject.specifications;
      row.insertCell().textContent = dataObject.quantity;
      row.insertCell().textContent = dataObject.receivedQuantity;
      row.insertCell().textContent = dataObject.status;
    }
  }
}

function displayInvoiceProcess(filter = false) {
  const table_element = document.querySelector(
    "#invoice-processing table tbody"
  );

  if (filter) {
    table_element.innerHTML = "";
    const filtered_Data = invoice_processing_data.filter(
      (data) => data.status === filter
    );
    for (const key in filtered_Data) {
      let dataObject = filtered_Data[key];
      const row = table_element.insertRow();
      row.insertCell().textContent = dataObject.item;
      row.insertCell().textContent = dataObject.quantity;
      row.insertCell().textContent = dataObject.receivedQuantity;
      row.insertCell().textContent = dataObject.status;
      row.insertCell().textContent = dataObject.price;
    }
  } else {
    table_element.innerHTML = "";

    for (const key in invoice_processing_data) {
      let dataObject = invoice_processing_data[key];
      const row = table_element.insertRow();
      if (dataObject.status === "missing") row.classList.add("missing");
      row.insertCell().textContent = dataObject.item;
      row.insertCell().textContent = dataObject.quantity;
      row.insertCell().textContent = dataObject.receivedQuantity;
      row.insertCell().textContent = dataObject.status;
      row.insertCell().textContent = dataObject.price;
    }
  }
}

function displayPaymentProcess(filter = false) {
  const table_element = document.querySelector(
    "#payment-processing table tbody"
  );

  if (filter) {
    table_element.innerHTML = "";
    const filtered_Data = payment_processing_data.filter(
      (data) => data.status === filter
    );
    for (const key in filtered_Data) {
      let dataObject = filtered_Data[key];
      const row = table_element.insertRow();
      row.insertCell().textContent = dataObject.item;
      row.insertCell().textContent = dataObject.price;
      row.insertCell().textContent = dataObject.status;
    }
  } else {
    table_element.innerHTML = "";

    for (const key in payment_processing_data) {
      let dataObject = payment_processing_data[key];

      const row = table_element.insertRow();
      row.insertCell().textContent = dataObject.item;
      row.insertCell().textContent = dataObject.price;
      row.insertCell().textContent = dataObject.status;
    }
  }
}

function toggleSection(section) {
  //Fetching json Data

  // const menuItems = document.querySelectorAll("#menu li");
  // menuItems.forEach((item) => {
  //   item.classList.remove("active-menu");
  // });

  let dataArray;
  fetch("./sample.json")
    .then((data) => data.json())
    .then((data) => {
      dataArray = data;

      //iterating through the data
      for (const key in dataArray) {
        if (key === "purchaseRequisition") {
          purchase_requisition_data = dataArray[key];
        } else if (key === "supplierManagement") {
          supplier_management_data = dataArray[key];
        } else if (key === "purchaseOrder") {
          purchase_order_data = dataArray[key];
        } else if (key === "goodsReceipt") {
          goods_receipt_data = dataArray[key];
        } else if (key === "invoiceProcessing") {
          invoice_processing_data = dataArray[key];
        } else if (key === "paymentProcessing") {
          payment_processing_data = dataArray[key];
        } else {
          showToast("No data found");
        }
      }

      document.getElementById(current_section_str).classList.toggle("hide");
      const title = document.getElementById("page-title");

      switch (section) {
        case "dashboard":
          document.getElementById("dashboard").classList.toggle("hide");
          document.getElementById("dashboard").classList.add("active-menu");
          current_section_str = "dashboard";
          title.innerHTML = "Dashboard";
          break;
        case "supplier-management":
          document
            .getElementById("supplier-management")
            .classList.toggle("hide");
          document
            .querySelector("#supplier-management")
            .classList.add("active-menu");
          current_section_str = "supplier-management";
          title.innerHTML = "Supplier Management";
          displaySupplierManagement();
          break;
        case "purchase-requisition":
          document
            .getElementById("purchase-requisition")
            .classList.toggle("hide");
          document
            .querySelector("#purchase-requisition")
            .classList.add("active-menu");
          current_section_str = "purchase-requisition";
          title.innerHTML = "Purchase Requisition";
          displayPurchaseRequisition();
          break;
        case "purchase-order":
          document.getElementById("purchase-order").classList.toggle("hide");
          document
            .querySelector("#purchase-order")
            .classList.add("active-menu");
          current_section_str = "purchase-order";
          title.innerHTML = "Purchase Order";
          displayPurchaseOrder();
          break;
        case "goods-receipt":
          document.getElementById("goods-receipt").classList.toggle("hide");
          document.querySelector("#goods-receipt").classList.add("active-menu");
          current_section_str = "goods-receipt";
          title.innerHTML = "Goods Receipt";
          displayGoodsReceipt();
          break;
        case "invoice-processing":
          document
            .getElementById("invoice-processing")
            .classList.toggle("hide");
          document
            .querySelector("#invoice-processing")
            .classList.add("active-menu");
          current_section_str = "invoice-processing";
          title.innerHTML = "Invoice Processing";
          displayInvoiceProcess();
          break;
        case "payment-processing":
          document
            .getElementById("payment-processing")
            .classList.toggle("hide");
          document
            .querySelector("#payment-processing")
            .classList.add("active-menu");
          current_section_str = "payment-processing";
          title.innerHTML = "Payment Processing";
          displayPaymentProcess();
          break;
        default:
          break;
      }
    });

  // document.getElementById(current_section_str).classList.toggle("hide");

  // switch (section) {
  //   case "dashboard":
  //     document.getElementById("dashboard").classList.toggle("hide");
  //     current_section_str = "dashboard";

  //     break;
  //   case "supplier-management":
  //     document.getElementById("supplier-management").classList.toggle("hide");
  //     current_section_str = "supplier-management";

  //     break;
  //   case "purchase-requisition":
  //     document.getElementById("purchase-requisition").classList.toggle("hide");
  //     current_section_str = "purchase-requisition";
  //     displayingPurchaseRequisition(data, "purchase-requisition");
  //     break;
  //   case "purchase-order":
  //     document.getElementById("purchase-order").classList.toggle("hide");
  //     current_section_str = "purchase-order";
  //     break;
  //   case "goods-receipt":
  //     document.getElementById("goods-receipt").classList.toggle("hide");
  //     current_section_str = "goods-receipt";
  //     break;
  //   case "invoice-processing":
  //     document.getElementById("invoice-processing").classList.toggle("hide");
  //     current_section_str = "invoice-processing";
  //     break;
  //   case "payment-processing":
  //     document.getElementById("payment-processing").classList.toggle("hide");
  //     current_section_str = "payment-processing";
  //     break;
  //   default:
  //     break;
  // }
}

// toggles status filters
let status_buttons = document.getElementsByClassName("status-button");
status_buttons = Array.from(status_buttons);
status_buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("hide");
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const profile = document.getElementById("profile-image");
  const gettingUser = JSON.parse(localStorage.getItem("user"));

  if (gettingUser && gettingUser.username) {
    const userInitial = gettingUser.username[0];
    profile.innerHTML = userInitial.toUpperCase();
  } else {
    console.log("No user data found in localStorage.");
  }
});
