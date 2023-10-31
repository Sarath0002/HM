import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import "./optab.css";
import { Button } from "primereact/button";
import { RiFileExcel2Fill } from "react-icons/ri";

export default function Optab() {
  const [filteredData, setFilteredData] = useState([]);

  //normal api

  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/appointment/")
      .then((res) => {
        setdata(res.data);
        setFilteredData(res.data);
      })
      .catch(() => {
        setdata([]);
        setFilteredData([]);
      });
  }, []);

  function getWeekNumber(date) {
    let currentDate = new Date(date);
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

    var weekNumber = Math.ceil(days / 7);
    return weekNumber;
  }

  /// yesterday button function
  function yesterday() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const timeChange =
      yesterday.getFullYear() +
      "-" +
      parseInt(yesterday.getMonth() + 1) +
      "-" +
      yesterday.getDate();
    let dayafter = data.filter((item) => item.date === timeChange);
    setFilteredData(dayafter);
  }

  function lastWeek() {
    let currentweek = getWeekNumber(new Date());
    let records = data.filter(
      (ele) => getWeekNumber(ele.date) === currentweek - 1
    );
    setFilteredData(records);
  }

  function currentMonth() {
    let currentMonthNumber = new Date().getMonth();
    let records = data.filter((ele) => {
      return new Date(ele.date).getMonth() === currentMonthNumber;
    });
    setFilteredData(records);
  }
  // console.log(data);
  // console.log("data", filteredData);
  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(filteredData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "filteredData");
    });
  };
  const saveAsExcelFile = (buffer, fileName) => {
    import(
      "c:/Users/yesit/hospital management/react-frontend/node_modules/file-saver/FileSaver"
    ).then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  return (
    <div className="avatar mt-5">
      <div className="three">
        <button className="databtn" onClick={yesterday}>
          Yesterday
        </button>
        <button className="databtn" onClick={lastWeek}>
          Last Week
        </button>
        <button className="databtn" onClick={currentMonth}>
          Current Month
        </button>
        <Button
          style={{ marginLeft: "36%" }}
          type="button"
          severity="success"
          rounded
          onClick={exportExcel}
          data-pr-tooltip="PDF"
          title="Export to Excel"
        >
          <RiFileExcel2Fill />
        </Button>
      </div>

      <DataTable
        style={{ borderRadius: "10px" }}
        className="tables"
        value={filteredData}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="patientid" header="No" style={{ width: "8%" }}></Column>
        <Column field="date" header="Date" style={{ width: "8%" }}></Column>
        <Column field="name" header="Name" style={{ width: "8%" }}></Column>
        <Column field="cause" header="Purpose" style={{ width: "8%" }}></Column>
        <Column field="age" header="Age" style={{ width: "5%" }}></Column>
        <Column field="mobile" header="Mobile" style={{ width: "8%" }}></Column>
        <Column
          field="email"
          header="Email id"
          style={{ width: "8%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
