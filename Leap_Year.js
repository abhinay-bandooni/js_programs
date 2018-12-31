let year = 2001;
if(year%4==0)
{
    if(year%100==0)
    {
        if(year%400==0)
        console.log('Year is leap');
        else
        console.log('Year is not leap');
    }
    else
    console.log('Year is leap');
}
else
console.log('Year is not leap');