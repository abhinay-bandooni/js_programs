let year = 2014;
let date = new Date(year,0,1);
while(year<=2050)
{
if(date.getDay()==0)
{
    console.log('Sunday comes on ' + date.getFullYear());
}
year++;
date = new Date(year,0,1);
}