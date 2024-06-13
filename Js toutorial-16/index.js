// letter grade program
var num = prompt("Enter Your Marks hare: ");
if (num >100 || num<0)
  document.write("Result: "+"Invalid")

else if (num>=80 && num<=100)
  document.write("Result:"+"A+");
  
  else if(num>=70 && num<=79)
  document.write("Result:"+"A");
  else if (num>=60 && num<=69)
  document.write("Result:"+"A-");
  else if(num>=50 && num<=59)
  document.write("Result:"+"B");
  else if(num>=40 && num<=49)
  document.write("Result "+"C");
  else if (num>=33 && num<=39)
  document.write("Result" + "D");
  
  else
  document.write("Result " + "fail");
  

  // Large Number Among 3 numbers

  var num1 = prompt("Enter Frist Number : ");
  var num2 = prompt("Enter Second Number : ");
  var num3 = prompt("Enter Third Number : ");

  if(num1>num2 && num1>num3)
    document.write("Learge Number"+ num1);
  else if(num2>num1 && num2>num3)
    document.write("Learge Number"+ num2);
  else 
  document.write("Learge Number"+ num3);

  // vowel & Consonant program

  var letter = prompt("Enter a letter : ");
  letter = letter.toLowerCase();

  if(letter=="a"|| letter=="e" || letter=="i" || letter=="o" || letter=="u")
  document.write("Vowel");

  else
  document.write("Consonant");