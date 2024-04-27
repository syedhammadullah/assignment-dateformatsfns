document.addEventListener("DOMContentLoaded", function () {
  const datesContainer = document.getElementById("dates");

  const date1 = new Date(2024, 3, 20, 13, 45, 30);
  const date2 = new Date(2024, 3, 20, 13, 45);
  const date3 = new Date(2024, 3, 20, 3, 45);
  const date4 = new Date(2024, 3, 20, 13, 45, 30);
  const date5 = new Date(2024, 3, 20, 13, 45);

  const format1 = "MM/dd/yyyy HH:mm:ss";
  const format2 = "EEE dd/M/yyyy HH.mm";
  const format3 = "yyyy-MM-dd h:mm EEEE";
  const format4 = "MMMM do, yyyy hh.mm.ss a";
  const format5 = "dd MMMM yyyy 'at' hh:mm a";

  const formattedDate1 = dateFns.format(date1, format1);
  const formattedDate2 = dateFns.format(date2, format2);
  const formattedDate3 = dateFns.format(date3, format3);
  const formattedDate4 = dateFns.format(date4, format4);
  const formattedDate5 = dateFns.format(date5, format5);

  datesContainer.innerHTML = `
      <div class="date-format">${formattedDate1}</div>
      <div class="date-format">${formattedDate2}</div>
      <div class="date-format">${formattedDate3}</div>
      <div class="date-format">${formattedDate4}</div>
      <div class="date-format">${formattedDate5}</div>
    `;
});
