let current_section_str = "dashboard";
let sample_data = false;

// fetch("./sample.json")
//   .then((data) => data.json())
//   .then((data) => {
//     const purchase_requisition_table_body = document.querySelector(
//       "#purchase-requisition table tbody"
//     );
//     const pr_row1 = purchase_requisition_table_body.insertRow();
//     if (data) {
//       for (const key in data) {
//         // get the table body reference from the function
//         let dataArray = data[key];
//         for (const myObject of dataArray) {
//           // create a new row
//           // loop through the object
//           // for every object value create a new cell and append to the row
//           // console.log(myObject);
//         }
//       }
//       pr_row1.insertCell().textContent = data.purchaseRequisition[0].item;
//       pr_row1.insertCell().textContent =
//         data.purchaseRequisition[0].description;
//       pr_row1.insertCell().textContent =
//         data.purchaseRequisition[0].specifications;
//       pr_row1.insertCell().textContent = data.purchaseRequisition[0].quantity;
//       pr_row1.insertCell().textContent = data.purchaseRequisition[0].status;
//     }

//     const supplier_management_table_body = document.querySelector(
//       "#supplier-management table tbody"
//     );
//   });

const menu_icon = document.getElementById("menu-icon");
menu_icon.addEventListener("click", () => {
  const menu = document.getElementsByClassName("dropdown-content")[0];
  menu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  console.log(event.target.matches("#menu-icon"));

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

//To display Purchase Requisition
function displayPurchaseRequisition(tableData, element) {
  const table_element = document.querySelector(element);
  table_element.innerHTML = "";
  for (const key in tableData) {
    let dataObject = tableData[key];
    // console.log(dataObject);
    const row = table_element.insertRow();
    row.insertCell().textContent = dataObject.item;
    row.insertCell().textContent = dataObject.description;
    row.insertCell().textContent = dataObject.specifications;
    row.insertCell().textContent = dataObject.quantity;
    row.insertCell().textContent = dataObject.status;
  }
}

// Function to display the Supplier management section

function displaySupplierManagement(tableData, element) {
  const table_element = document.querySelector(element);

  table_element.innerHTML = "";
  for (const key in tableData) {
    let dataObject = tableData[key];
    console.log(dataObject);
    const row = table_element.insertRow();
    row.insertCell().textContent = dataObject.businessName;
    row.insertCell().textContent = dataObject.contactInfo;
    row.insertCell().textContent = dataObject.description;
    row.insertCell().textContent = dataObject.rating;
    row.insertCell().textContent = dataObject.totalPrice;
  }
}

//To display Purchase Order
function displayPurchaseOrder(tableData, element) {
  const table_element = document.querySelector(element);
  table_element.innerHTML = "";
  for (const key in tableData) {
    let dataObject = tableData[key];
    console.log(dataObject);
    const row = table_element.insertRow();
    row.insertCell().textContent = dataObject.item;
    row.insertCell().textContent = dataObject.description;
    row.insertCell().textContent = dataObject.specifications;
    row.insertCell().textContent = dataObject.quantity;
  }
}

//To display Goods Receipt
function displayGoodsReceipt(tableData, element) {
  const table_element = document.querySelector(element);
  table_element.innerHTML = "";

  console.log(table_element);
  for (const key in tableData) {
    let dataObject = tableData[key];

    console.log(dataObject);
    const row = table_element.insertRow();
    row.insertCell().textContent = dataObject.item;
    row.insertCell().textContent = dataObject.specifications;
    row.insertCell().textContent = dataObject.quantity;
    row.insertCell().textContent = dataObject.receivedQuantity;
    row.insertCell().textContent = dataObject.status;
  }
}

//To display Invoice Processing
function displayInvoiceProcess(tableData, element) {
  const table_element = document.querySelector(element);
  table_element.innerHTML = "";

  console.log(table_element);
  for (const key in tableData) {
    let dataObject = tableData[key];
    const row = table_element.insertRow();
    row.insertCell().textContent = dataObject.item;
    row.insertCell().textContent = dataObject.quantity;
    row.insertCell().textContent = dataObject.receivedQuantity;
    row.insertCell().textContent = dataObject.status;
    row.insertCell().textContent = dataObject.price;
  }
}

//To display Payment Processing
function displayPaymentProcess(tableData, element) {
  const table_element = document.querySelector(element);

  table_element.innerHTML = "";

  for (const key in tableData) {
    let dataObject = tableData[key];

    console.log(dataObject);
    const row = table_element.insertRow();
    row.insertCell().textContent = dataObject.item;
    row.insertCell().textContent = dataObject.price;
    row.insertCell().textContent = dataObject.status;
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
      // console.log(dataArray);

      //initializing
      let purchase_requisition_data;
      let supplier_management_data;
      let purchase_order_data;
      let goods_receipt_data;
      let invoice_processing_data;
      let payment_processing_data;

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
          console.log("No data found");
        }
      }

      document.getElementById(current_section_str).classList.toggle("hide");

      switch (section) {
        case "dashboard":
          document.getElementById("dashboard").classList.toggle("hide");
          document.getElementById("dashboard").classList.add("active-menu");
          current_section_str = "dashboard";

          break;
        case "supplier-management":
          document
            .getElementById("supplier-management")
            .classList.toggle("hide");
          document
            .querySelector("#supplier-management")
            .classList.add("active-menu");
          current_section_str = "supplier-management";
          displaySupplierManagement(
            supplier_management_data,
            "#supplier-management table tbody"
          );

          console.log(section);

          break;
        case "purchase-requisition":
          document
            .getElementById("purchase-requisition")
            .classList.toggle("hide");
          document
            .querySelector("#purchase-requisition")
            .classList.add("active-menu");
          current_section_str = "purchase-requisition";
          displayPurchaseRequisition(
            purchase_requisition_data,
            "#purchase-requisition table tbody"
          );
          break;
        case "purchase-order":
          document.getElementById("purchase-order").classList.toggle("hide");
          document
            .querySelector("#purchase-order")
            .classList.add("active-menu");
          current_section_str = "purchase-order";
          displayPurchaseOrder(
            purchase_order_data,
            "#purchase-order table tbody"
          );
          break;
        case "goods-receipt":
          document.getElementById("goods-receipt").classList.toggle("hide");
          document.querySelector("#goods-receipt").classList.add("active-menu");
          current_section_str = "goods-receipt";
          displayGoodsReceipt(goods_receipt_data, "#goods-receipt table tbody");
          break;
        case "invoice-processing":
          document
            .getElementById("invoice-processing")
            .classList.toggle("hide");
          document
            .querySelector("#invoice-processing")
            .classList.add("active-menu");
          current_section_str = "invoice-processing";
          displayInvoiceProcess(
            invoice_processing_data,
            "#invoice-processing table tbody"
          );
          break;
        case "payment-processing":
          document
            .getElementById("payment-processing")
            .classList.toggle("hide");
          document
            .querySelector("#payment-processing")
            .classList.add("active-menu");
          current_section_str = "payment-processing";
          displayPaymentProcess(
            payment_processing_data,
            "#payment-processing table tbody"
          );
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

// const purchase_order_table_body = document.querySelector(
//   "#purchase-order table tbody"
// );
// const goods_receipt_table_body = document.querySelector(
//   "#goods-receipt table tbody"
// );
// const invoice_processing_table_body = document.querySelector(
//   "#invoice-processing table tbody"
// );
// const payment_processing_table_body = document.querySelector(
//   "#payment-processing table tbody"
// );
