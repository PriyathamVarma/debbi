// AI Prompt template

export const AIpromptTemplate = `

Context: To calculate pay gap for a company

Data : {data}

Calculating the gender pay gap according to UK goverment rules:
You need to make some calculations before you can report your gender pay gap data.

You need to work out the:

mean (average) and median gender pay gap for hourly pay and bonus pay
percentage of men and women in each hourly pay quarter
percentage of men and women receiving bonus pay
You can report your figures as whole percentages or rounded to one decimal place.

Before you make your calculations, you need to have prepared your data.

Positive and negative figures
Your figures will usually be either a positive or negative percentage.

A positive percentage shows that women have lower pay or bonuses than men in your organisation.

A negative percentage shows that men have lower pay or bonuses than women in your organisation.

A zero percentage shows that there is equal pay or bonuses between men and women in your organisation.

Calculation 1: percentage of men and women in each hourly pay quarter
In this calculation, you will work out the percentage of men and women in 4 equally-sized groups, ranked from highest to lowest hourly pay.

You only need to do this for full-pay relevant employees.

Use the list of full-pay relevant employees and their hourly pay that you created when you prepared your data.

Follow the instructions in this section to create the 4 groups. Do not create your pay groups in any other way.

There are 4 steps:

Sort your employees from highest to lowest hourly pay.

Divide the list into quarters.

Check the gender distribution if employees have the same hourly pay.

Work out the percentage of men and women in each quarter.

Sort your employees from highest to lowest hourly pay
Put all your employees’ gender and individual hourly pay in a spreadsheet. Sort this list from the highest to lowest hourly pay.

Divide the list into quarters
Divide this list into 4 quarters, with an equal number of employees in each section.

These quarters are:

upper hourly pay quarter
upper middle hourly pay quarter
lower middle hourly pay quarter
lower hourly pay quarter
If the number of your employees is not divisible by 4, distribute them as follows:

if there is one employee left over, add them to the lower hourly pay quarter
if there are 2 employees left over, add one to the lower hourly pay quarter and one to the upper middle hourly pay quarter
if there are 3 left over, distribute them between lower, lower middle and upper middle pay quarters
If some employees have the same hourly pay
You might have employees who:

have the same hourly pay as each other
end up in different pay quarters because of where the ‘dividing line’ fell
If this happens, distribute men and women as fairly as possible.

Example: Distributing men and women with the same hourly pay
Acme Ltd has 4,445 full-pay relevant employees. They have sorted them from highest to lowest hourly pay, and divided the list into 4 quarters.

40 employees have the same hourly pay. Of these employees:

36 are women and 4 are men
10 have fallen into the lower quarter
30 have fallen into the lower middle quarter
To distribute these employees by gender, Acme Ltd should make sure that:

9 women and 1 man make up the 10 employees in the lower quarter
27 women and 3 men make up the 30 employees in the lower middle quarter
Work out the percentage of men and women in each quarter
For each hourly pay quarter:

divide the number of men in the quarter by the total number of employees in the quarter, and multiply by 100 – this gives you the percentage of men in the quarter

divide the number of women in the quarter by the total number of employees in the quarter, and multiply by 100 – this gives you the percentage of women in the quarter

Example: Calculating the percentage of men and women in each hourly pay quarter
Acme Ltd has 4,445 full-pay relevant employees.

1,112 employees are in the lower hourly pay quarter. 187 are men and 925 are women. This means 16.8% are men and 83.2% are women.

1,111 employees are in the lower middle hourly pay quarter. 110 are men and 1001 are women. This means 9.9% are men and 90.1% are women.

1,111 employees are in the upper middle hourly pay quarter. 298 are men and 813 are women. This means 26.8% are men and 73.2% are women.

1,111 employees are in the upper hourly pay quarter. 750 are men and 361 are women. This means 67.5% are men and 32.5% are women.

Calculation 2: mean (average) gender pay gap for hourly pay
You only need to do this for full-pay relevant employees.

Use the list of full-pay relevant employees, including their gender and hourly pay, that you created when you prepared your data.

Add together the hourly pay of all men in your list, and divide the figure by the number of men. This gives you the mean (average) hourly pay for men.

Repeat this for all women in your list. This gives you the mean (average) hourly pay for women.

Take the mean (average) hourly pay for men and subtract the mean (average) hourly pay for women.

Divide the result by the mean (average) hourly pay for men.

Multiply the result by 100.

This gives you the mean (average) gender pay gap in hourly pay as a percentage of men’s pay.

Example: Calculating the mean (average) gender pay gap using hourly pay
Acme Ltd has 4,445 full-pay relevant employees. 1,345 are men, and 3,100 are women.

Men’s hourly pay amounts to £23,550.

£23,550 divided by 1,345 equals £17.51 per hour mean (average) for men.

Women’s hourly pay amounts to £46,900.

£46,900 divided by 3,100 equals £15.13 per hour mean (average) for women.

Acme Ltd’s mean (average) gender pay gap for hourly pay is:

£17.51 minus £15.13
divided by £17.51
multiplied by 100
This gives a figure of 13.59%.

This means that, using the mean (average), women at Acme Ltd are paid 13.59% less than men. This  means for every £1 a man earns at Acme Ltd, a woman earns 86p.

Calculation 3: median gender pay gap for hourly pay
You only need to do this for full-pay relevant employees.

Use the list of full-pay relevant employees, including their gender and hourly pay, that you created when you prepared your data.

The median is the middle point of a range of numbers arranged in order. If there is an even number in the range, the median is the mean (average) of the 2 middle numbers.

Sort all men in your list in order of their hourly pay, with the lowest paid first and the highest paid last. Identify the man in the middle of the list, and write down his hourly pay. This figure is the median hourly pay for men.

Repeat this for the women in your list. This figure is the median hourly pay for women.

Take the median hourly pay for men and subtract the median hourly pay for women.

Divide the result by the median hourly pay for men.

Multiply the result by 100.

This gives you the median gender pay gap in hourly pay as a percentage of men’s pay.

If there is an even number of men or women
Identify the 2 men or women in the middle of the list. Use the mean (average) of their hourly pay to identify the median hourly pay figure.

For example, if you have 80 women employees, numbers 40 and 41 are in the middle of the list. To find the median hourly pay for women, take the mean (average) of these 2 women’s hourly pay.

Example: Calculating the median gender pay gap using hourly pay
Acme Ltd has 4,445 full-pay relevant employees. 1,345 are men, and 3,100 are women

The man in the middle of the 1,345 men is number 673. He earns £15 an hour.

The women in the middle of the 3,100 women are numbers 1,550 and 1,551. They earn £13 an hour and £15 an hour respectively. The mean (average) of their hourly pay is £14.

Acme Ltd’s median gender pay gap using hourly pay is:

£15 minus £14
divided by £15
multiplied by 100
This gives a figure of 6.67%.

This means that when using the median, women at Acme Ltd are paid 6.67% less than men. This means for every £1 a man earns at Acme Ltd, a woman earns 93p.

Calculation 4: percentage of men and women receiving bonus pay
This calculation shows the percentage of men and women who received bonus pay in the 12 months ending on your snapshot date.

Use the list of all relevant employees (not only full-pay relevant employees), including their gender and bonus pay. You created this when you prepared your data (step 3b).

Add together the number of men in your list who received bonus pay in the 12 months ending on your snapshot date. Divide this figure by the total number of men. This gives you the percentage of men who received bonus pay.

Repeat this for all women in your list. This gives you the percentage of women who received bonus pay.

Example: Calculating the percentage of men and women who received a bonus payment
Acme Ltd has 4,500 relevant employees. 1,375 are men, and 1,300 of them received bonus pay. 3,125 are women, and 2,000 of them received a bonus.

To calculate the percentage of men and women who received a bonus payment, Acme Ltd:

divides 1,300 (men receiving bonus pay) by 1,375 (total number of men) – this equals 0.945
multiplies 0.945 by 100
divides 2,000 (women receiving bonus pay) by 3,125 (total number of women) – this equals 0.64
multiplies 0.64 by 100
The results show that 94.5% of men and 64.0% of women received a bonus.

Calculation 5: mean (average) gender pay gap for bonus pay
This calculation shows the difference in the mean (average) bonus pay paid to men and women.

Use the list of all relevant employees (not only full-pay relevant employees), including their gender and bonus pay. You created this when you prepared your data (step 3b).

Add together the bonus payments made to all men in your list in the 12 months to your snapshot date. Divide this figure by the number of men who received bonus pay. This gives you the mean (average) bonus pay for men.

Repeat this for all women in your list. This gives you the mean (average) bonus pay for women.

Take the mean (average) bonus pay for men and subtract the mean (average) bonus pay for women.

Divide the result by the mean (average) bonus pay for men.

Multiply the result by 100.

This gives you the mean (average) gender pay gap in bonus pay as a percentage of men’s pay.

Example: Calculating the mean (average) gender pay gap for bonus pay
Acme Ltd has an mean (average) bonus pay of £1,650 for men, and £1,490 for women.

To calculate the mean (average) gender pay gap for bonus pay, Acme Ltd:

takes the mean (average) bonus pay for men (£1,650), and subtracts the mean (average) bonus pay for women (£1,490) – this equals £160
divides £160 by the mean (average) bonus pay for men (£1,650) – this equals 0.097
multiplies 0.097 by 100 to find the mean (average) gender pay gap for bonus pay as a percentage
Acme Ltd. has a 9.7% mean (average) gender pay gap using bonus pay.

This means that, using the mean (average), women at Acme Ltd. are paid 9.7% less in bonus pay than men. This means for every £1 a man receives in bonus pay at Acme Ltd, a woman receives 90p.

Calculation 6: median gender pay gap for bonus pay
This calculation shows the difference in the median bonus pay paid to men and women.

Use the list of all relevant employees (not only full-pay relevant employees), including their gender and bonus pay. You created this when you prepared your data (step 3b).

Create a list of all men who received bonus pay in the 12 months ending on your snapshot date. Sort them in order of highest to lowest bonus pay amounts. Identify the man in the middle of the list, and write down his bonus pay. This figure is the median bonus pay for men.

Repeat this for women. This figure is the median bonus pay for women.

Take the median bonus pay for men and subtract the median bonus pay for women.

Divide the result by the median bonus pay for men.

Multiply the result by 100.

This gives you the median gender pay gap in bonus pay as a percentage of men’s bonus pay.

If there is an even number of men or women
Identify the 2 men or women in the middle of the list. Use the mean (average) of their bonus pay to identify the median bonus pay figure.

For example, if you have 80 women employees, numbers 40 and 41 are in the middle of the list. To find the median bonus pay for women, take the mean (average) of these 2 women’s bonus pay.

Example: Calculating the median gender pay gap for bonus pay
Acme Ltd has a median bonus pay of £2,300 for all relevant employees who are men, and £2,225 for all relevant employees who are women.

To calculate the median gender pay gap using bonus pay, Acme Ltd does the following:

takes the median bonus pay for men (£2,300) and subtracts the median bonus pay for women (£2,225) – this equals £75
divides £75 result by the median bonus pay for men (£2,300) – this equals 0.033
multiplies 0.033 by 100 to find the median gender pay gap for bonus pay as a percentage
Acme Ltd has a 3.3% median bonus gender pay gap.

This means that when using the median, women at Acme Ltd receive 3.3% less bonus pay than men. This means for every £1 a man receives in bonus pay, a woman receives 97p.



Task: Calculate the gender pay gap from the data provided

Extra Task: Give the response in terms of json object with numbers. Just give me in terms of numbers. Give me atleast 5 major points. Strictly follow the sample response format.

Sample response: {sample}



    `;
