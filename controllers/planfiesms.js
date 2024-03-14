const schedule = require('node-schedule');

var Axios =require('axios') ;
exports.planfie = async ({date,entet,msg,num}) => {
    var j = schedule.scheduleJob(date,async function(){
        var url="https://swatek.tn/apisms/sendsms.php?tel=xxxxxxxx&entete=Test1&message=Test2";
        url =url.replace("xxxxxxxx",num);
        url =url.replace("Test1",entet);
        url =url.replace("Test2",msg);
        await Axios.post(url)

      });
}
