import jsPDF from "jspdf";
import "jspdf-autotable";


const generatePDF = (teacherlist) => {
  const doc = new jsPDF();

  const tableColumn = [
    "Name",
    "Designation",
    "Gender",
    "Nationality",
    "Category",
    "Address",
    "Email",
  ];

  const tableRows = [];
  console.log(teacherlist);
  teacherlist.forEach((object) => {
    if (object.s_account == null) {
      object.s_account = "Teachers List";
    }
    const objectData = [
      object.name,
      object.designation,
      object.gender,
      object.nationality,
      object.social_category,
      object.address,
      object.email,
    ];

    tableRows.push(objectData);
  });
  console.log(tableRows);

  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");

  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

  doc.text("Teacher List", 14, 15);
  doc.save(`teachers_list_${dateStr}.pdf`);
};

export default generatePDF;
