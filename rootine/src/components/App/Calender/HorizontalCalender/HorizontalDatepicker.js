import DatePicker from "react-horizontal-datepicker";
function HorizontalDatepicker() {

    const selectedDay = (val) =>{
        console.log(val)
    };

  return (
       <DatePicker getSelectedDay={selectedDay}
                  endDate={1000}
                  selectDate={new Date("2022-08-10")}
                  labelFormat={"MMMM"}
                  color={"#374e8c"}
                  shouldScroll={true}
                  marked={[
                      {
                          date: new Date("2022-08-12"),
                          marked: true,
                          style: {
                              color: "#ff0000",
                              padding: "2px",
                              fontSize: 12,
                          },
                          text: "1x",
                      },
                      {
                          date: new Date("2022-08-05"),
                          marked: true,
                          text: "5x"
                      },
                  ]}
/>
  );
}
export default HorizontalDatepicker