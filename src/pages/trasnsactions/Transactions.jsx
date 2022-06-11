import React, { useRef, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { RiArrowDownSLine } from "react-icons/ri";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Payments from "../../components/payments/Payments";
import { Banner, ContentWrapper, CustomPicker, PickerWrapper } from "./styles";

const Transactions = () => {
  const [selectedDate, setDateChange] = useState(new Date());
  const DatePickerRef = useRef(null);

  const array = [
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "20-07-2015",
    },
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "15-03-2015",
    },
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "14-06-2016",
    },
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "30-01-2018",
    },
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "10-11-2018",
    },
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "25-05-2019",
    },
  ];

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
        <Payments data={array} />
      </ContentWrapper>
    </>
  );
};

export default Transactions;
