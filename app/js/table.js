$("#my-table").dataTable({
  "aaData":[
    ["Tiger Nixon","System Architect","$320,800", "2011/04/25","Edinburgh","5421"],
    ["Garrett Winters","Accountant","$170,750","2011/07/25","Tokyo","8422"],
    ["Ashton Cox","Junior Technical Author","$86,000","2009/01/12","San Francisco","1562"],
    ["Cedric Kelly","Senior Javascript Developer","$433,060","2012/03/29","Edinburgh","6224"],
    ["Airi Satou","Accountant","$162,700","2008/11/28","Tokyo","5407"],
    ["Brielle Williamson","Integration Specialist","$372,000","2012/12/02","New York","4804"],
    ["Herrod Chandler","Sales Assistant","$137,500","2012/08/06","San Francisco","9608"],
    ["Rhona Davidson","Integration Specialist","$327,900","2010/10/14","Tokyo","6200"],
    ["Colleen Hurst","Javascript Developer","$205,500","2009/09/15","San Francisco","2360"],
    ["Sonya Frost","Software Engineer","$103,600","2008/12/13","Edinburgh","1667"],
    ["Jena Gaines","Office Manager","$90,560","2008/12/19","London","3814"],
    ["Quinn Flynn","Support Lead","$342,000","2013/03/03","Edinburgh","9497"],
    ["Charde Marshall","Regional Director","$470,600","2008/10/16","San Francisco","6741"],
    ["Haley Kennedy","Senior Marketing Designer","$313,500","2012/12/18","London","3597"],
    ["Tatyana Fitzpatrick","Regional Director","$385,750","2010/03/17","London","1965"],
    ["Michael Silva","Marketing Designer","$198,500","2012/11/27","London","extn","1581"],
    ["Paul Byrd","Chief Financial Officer (CFO)","$725,000","2010/06/09","New York","3059"],
    ["Gloria Little","Systems Administrator","$237,500","2009/04/10","New York","1721"],
    ["Bradley Greer","Software Engineer","$132,000","2012/10/13","London","2558"],
    ["Dai Rios","Personnel Lead","$217,500","2012/09/26","Edinburgh","2290"],
    ["Jenette Caldwell","Development Lead","$345,000","2011/09/03","New York","1937"],
    ["Yuri Berry", "Chief Marketing Officer (CMO)","$675,000","2009/06/25","New York","6154"],
    ["Tiger Nixon","System Architect","$320,800", "2011/04/25","Edinburgh","5421"],
    ["Garrett Winters","Accountant","$170,750","2011/07/25","Tokyo","8422"],
    ["Ashton Cox","Junior Technical Author","$86,000","2009/01/12","San Francisco","1562"],
    ["Cedric Kelly","Senior Javascript Developer","$433,060","2012/03/29","Edinburgh","6224"],
    ["Airi Satou","Accountant","$162,700","2008/11/28","Tokyo","5407"],
    ["Brielle Williamson","Integration Specialist","$372,000","2012/12/02","New York","4804"],
    ["Herrod Chandler","Sales Assistant","$137,500","2012/08/06","San Francisco","9608"],
    ["Rhona Davidson","Integration Specialist","$327,900","2010/10/14","Tokyo","6200"],
    ["Colleen Hurst","Javascript Developer","$205,500","2009/09/15","San Francisco","2360"],
    ["Sonya Frost","Software Engineer","$103,600","2008/12/13","Edinburgh","1667"],
    ["Jena Gaines","Office Manager","$90,560","2008/12/19","London","3814"],
    ["Quinn Flynn","Support Lead","$342,000","2013/03/03","Edinburgh","9497"],
    ["Charde Marshall","Regional Director","$470,600","2008/10/16","San Francisco","6741"],
    ["Haley Kennedy","Senior Marketing Designer","$313,500","2012/12/18","London","3597"],
    ["Tatyana Fitzpatrick","Regional Director","$385,750","2010/03/17","London","1965"],
    ["Michael Silva","Marketing Designer","$198,500","2012/11/27","London","extn","1581"],
    ["Paul Byrd","Chief Financial Officer (CFO)","$725,000","2010/06/09","New York","3059"],
    ["Gloria Little","Systems Administrator","$237,500","2009/04/10","New York","1721"],
    ["Bradley Greer","Software Engineer","$132,000","2012/10/13","London","2558"],
    ["Dai Rios","Personnel Lead","$217,500","2012/09/26","Edinburgh","2290"],
    ["Jenette Caldwell","Development Lead","$345,000","2011/09/03","New York","1937"],
    ["Yuri Berry", "Chief Marketing Officer (CMO)","$675,000","2009/06/25","New York","6154"],

],
  "aoColumnDefs":[{
        "sTitle":"Name"
      , "aTargets": [ "name" ]},
      {
        "sTitle":"Position"
      , "aTargets": [ "position" ]
  },
  {
        "sTitle":"Salary"
      , "aTargets": [ "salary" ]
  },
  {
        "sTitle":"Start date"
      , "aTargets": [ "start_date" ]
  },
  {
        "aTargets": [ 4 ]
      
      , "mRender": function ( url, type, full )  {
          return  '<a href="https://www.google.com.ua/maps/@16.3965138,-0.0202699,22966756m/data=!3m1!1e3" ">' + url + '</a>';
  }},
  {
        "sTitle":"Extn"
      , "aTargets": [ "extn" ]
  },
]});