import React, { useRef, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { RiArrowDownSLine } from "react-icons/ri";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Payments from "../../components/payments/Payments";
import { Banner, ContentWrapper, CustomPicker, PickerWrapper } from "./styles";
import { DateTime } from "luxon";
import _ from "lodash";

const Transactions = () => {
  const [selectedDate, setDateChange] = useState(new Date());
  const DatePickerRef = useRef(null);

  const array = [
    {
      price: 1600400,
      type: "Payment of Installment",
      date: "20-07-2015",
    },
    {
      price: 1400300,
      type: "Payment of Installment",
      date: "15-03-2015",
    },
    {
      price: 1200300,
      type: "Payment of Installment",
      date: "14-06-2016",
    },
    {
      price: 3200300,
      type: "Payment of Installment",
      date: "14-06-2017",
    },
    {
      price: 2500300,
      type: "Payment of Installment",
      date: "30-01-2018",
    },
    {
      price: 1568500,
      type: "Payment of Installment",
      date: "10-11-2018",
    },
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "25-05-2019",
    },
    {
      price: 1800100,
      type: "Payment of Installment",
      date: "25-05-2020",
    },
    {
      price: 1200000,
      type: "Payment of Installment",
      date: "25-05-2021",
    },
    {
      price: 2400100,
      type: "Payment of Installment",
      date: "25-05-2021",
    },
    {
      price: 4500500,
      type: "Payment of Installment",
      date: "25-05-2022",
    },
    {
      price: 2300500,
      type: "Payment of Installment",
      date: "25-05-2022",
    },
  ];

  const years = array.map((obj) =>
    DateTime.fromFormat(obj.date, "dd-MM-yyyy").get("year")
  );

  const maxYear = _.max(years);

  const minYear = _.min(years);

  const filteredData = array.filter((obj) => {
    const date = DateTime.fromFormat(obj.date, "dd-MM-yyyy");
    return date.get("year") === selectedDate.getFullYear();
  });
  // console.log(FilteredData);

  return (
    <>
      <Banner>
        <p>Transactions</p>
      </Banner>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div hidden>
          <DatePicker
            views={["year"]}
            value={selectedDate}
            onChange={setDateChange}
            animateYearScrolling
            style={{ color: "#3D88E2", width: "auto", margin: "0 16px" }}
            innerRef={DatePickerRef}
            disableFuture
            minDate={`${minYear + 1}`}
            maxDate={`${maxYear + 1}`}
          />
        </div>
        <PickerWrapper>
          <CustomPicker
            onClick={() => {
              DatePickerRef.current.click();
            }}
          >
            {selectedDate.getFullYear()}
            <RiArrowDownSLine size={40} />
          </CustomPicker>
        </PickerWrapper>
      </MuiPickersUtilsProvider>
      <ContentWrapper>
        <Payments data={filteredData} />
      </ContentWrapper>
    </>
  );
};

export default Transactions;
