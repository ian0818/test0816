let weatherdata;
let c=0;
let i=0,j=0;
$.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWB-4F407C4B-1365-4902-8653-0ED2F9E34311', function(data) {
    weatherdata=data;
    let city = weatherdata.records.locations[0].locationsName;
    let district = weatherdata.records.locations[0].location[c].locationName;
    let starttime = weatherdata.records.locations[0].location[c].weatherElement[i].time[j].startTime;
    let endtime = weatherdata.records.locations[0].location[c].weatherElement[i].time[j].endTime;
    let data1 = weatherdata.records.locations[0].location[c].weatherElement[0].time[j].elementValue[0].value;
    let data2 = weatherdata.records.locations[0].location[c].weatherElement[1].time[j].elementValue[0].value;
    let data3 = weatherdata.records.locations[0].location[c].weatherElement[2].time[j].elementValue[0].value;
    let data4 = weatherdata.records.locations[0].location[c].weatherElement[3].time[j].elementValue[0].value;
    let data5 = weatherdata.records.locations[0].location[c].weatherElement[4].time[j].elementValue[0].value;
    let data6 = weatherdata.records.locations[0].location[c].weatherElement[5].time[j].elementValue[0].value;
    let data7 = weatherdata.records.locations[0].location[c].weatherElement[6].time[j].elementValue[0].value;
    let data8 = weatherdata.records.locations[0].location[c].weatherElement[7].time[j].elementValue[0].value;
    let data9 = weatherdata.records.locations[0].location[c].weatherElement[8].time[j].elementValue[0].value;
    // let data10 = weatherdata.records.locations[0].location[c].weatherElement[9].time[j].elementValue[0].value;
    let data11 = weatherdata.records.locations[0].location[c].weatherElement[11].time[j].elementValue[0].value;
    let data12 = weatherdata.records.locations[0].location[c].weatherElement[12].time[j].elementValue[0].value;
    let data13 = weatherdata.records.locations[0].location[c].weatherElement[13].time[j].elementValue[0].value;
    let data14 = weatherdata.records.locations[0].location[c].weatherElement[14].time[j].elementValue[0].value;
    // console.log(starttime,endtime);
    // console.log(data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14);
     console.log(data);
    // console.log(city); //顯示城市資料
    // console.log(district); //顯示區域資料
    $("#city").text(city);
    $("#time").text("日期時間:"+starttime+"~"+endtime);
    $("#district").text(district);
    $("#date1").text(data1+"(%)");
    $("#date2").text(data2+"(°C)");
    $("#date3").text(data3+"(%)");
    $("#date4").text(data4);
    $("#date5").text(data5+"(公尺/秒)");
    $("#date6").text(data6+"(°C)");
    $("#date7").text(data7);
    $("#date8").text(data8);
    $("#date9").text(data9+"(°C)");
    // $("#date10").text(data10);
    $("#date11").text(data11+"(°C)");
    $("#date12").text(data12+"(°C)");
    $("#date13").text(data13+"(16方位)");
    $("#date14").text(data14+"(°C)");
    c+=1;
    i+=1;
    j+=1;
});

function showData(){
    if(c==28){
        c=0;
    }
    let city = weatherdata.records.locations[0].locationsName;
    let district = weatherdata.records.locations[0].location[c].locationName;
    // console.log(city); //顯示城市資料
    // console.log(district); //顯示區域資料
    $("#city").text(city);
    $("#district").text(district);
    c+=1;
};

function showdetail(){
    if(i==14&&j==14)
    {
        i=0;j=0;
    }
    let starttime = weatherdata.records.locations[0].location[c].weatherElement[0].time[j].startTime;
    let endtime = weatherdata.records.locations[0].location[c].weatherElement[0].time[j].endTime;
    let data1 = weatherdata.records.locations[0].location[c].weatherElement[0].time[j].elementValue[0].value;
    let data2 = weatherdata.records.locations[0].location[c].weatherElement[1].time[j].elementValue[0].value;
    let data3 = weatherdata.records.locations[0].location[c].weatherElement[2].time[j].elementValue[0].value;
    let data4 = weatherdata.records.locations[0].location[c].weatherElement[3].time[j].elementValue[0].value;
    let data5 = weatherdata.records.locations[0].location[c].weatherElement[4].time[j].elementValue[0].value;
    let data6 = weatherdata.records.locations[0].location[c].weatherElement[5].time[j].elementValue[0].value;
    let data7 = weatherdata.records.locations[0].location[c].weatherElement[6].time[j].elementValue[0].value;
    let data8 = weatherdata.records.locations[0].location[c].weatherElement[7].time[j].elementValue[0].value;
    let data9 = weatherdata.records.locations[0].location[c].weatherElement[8].time[j].elementValue[0].value;
    // let data10 = weatherdata.records.locations[0].location[c].weatherElement[9].time[j].elementValue[0].value;
    let data11 = weatherdata.records.locations[0].location[c].weatherElement[11].time[j].elementValue[0].value;
    let data12 = weatherdata.records.locations[0].location[c].weatherElement[12].time[j].elementValue[0].value;
    let data13 = weatherdata.records.locations[0].location[c].weatherElement[13].time[j].elementValue[0].value;
    let data14 = weatherdata.records.locations[0].location[c].weatherElement[14].time[j].elementValue[0].value;
    $("#time").text("日期時間:"+starttime+"~"+endtime);
    $("#date1").text(data1+"(%)");
    $("#date2").text(data2+"(°C)");
    $("#date3").text(data3+"(%)");
    $("#date4").text(data4);
    $("#date5").text(data5+"(公尺/秒)");
    $("#date6").text(data6+"(°C)");
    $("#date7").text(data7);
    $("#date8").text(data8);
    $("#date9").text(data9+"(°C)");
    // $("#date10").text(data10);
    $("#date11").text(data11+"(°C)");
    $("#date12").text(data12+"(°C)");
    $("#date13").text(data13+"(16方位)");
    $("#date14").text(data14+"(°C)");
    i+=1;
    j+=1;
};
setInterval("showdetail()","2000");
setInterval("showData()","28000");
