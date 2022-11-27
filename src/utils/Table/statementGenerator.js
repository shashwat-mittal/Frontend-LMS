import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call


const generatePDF = (statements) => {
  const doc = new jsPDF();

  const tableColumn = [
    "User ID",
    "Name",
    "Address",
    "Date of Birth",
    "Phone No.",
    "Enrollment No.",
    "Class Section",
  ];

  const tableRows = [];
  console.log(statements);
  statements.forEach((object) => {
    if (object.s_account == null) {
      object.s_account = "Deposited by admin";
    }
    const objectData = [
      object.id,
      object.name,
      object.address,
      object.dob,
      object.phone_number,
      object.enrollment_no,
      object.class_section,
    ];

    tableRows.push(objectData);
  });
  console.log(tableRows);

  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");

  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

  doc.text("Student Statement", 14, 15);
  doc.save(`statement_${dateStr}.pdf`);
};

export default generatePDF;
