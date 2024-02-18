// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Array of Some Politician
let SomePolitician: { Name: string, Position: string, Party: string }[] = [
    { Name: "Kamran Khan Tessori", Position: "Governor Sindh ,",  Party: "MQM" },
    { Name: "Muhammad Baligh Ur Rehman", Position: "Governor Punjab ,", Party: "PML-N" },
    { Name: "Bilawal Bhutto", Position: "Chief Pakistan Peoples Party ,", Party: "PPP" },
    { Name: "Haji Ghulam Ali", Position: "Governor KPK ,", Party: "JUI-F" },
    { Name: "Imran Khan", Position: "Chief Pakista Tehreek Insaf ,", Party: " PTI" },
    { Name: "Fazal-ur-Rehman", Position: "Chief of Jamiat Ulema-e-Islam (F) ,", Party: " JUI(F)" },
    { Name: "Shah Mehmood Qureshi", Position: "Vice Cahirman Of Pakistan Tehreek Insaf ,", Party: "PTI" },
    { Name: "Shireen Mehrunnisa Mazari", Position: "Federal Minister for Human Rights ,", Party: "PTI" },
    { Name: "Siraj-ul-Haq:", Position: " Speaker of the Punjab Assembly ,", Party: "Jamaat-e-Islami Pakistan" },
    { Name: "Nawaz Sharif", Position: "Chief Of Pakistan Muslim League N ,", Party: "PML-N" },
];


console.log("Some Politicion:");
SomePolitician.forEach(Politicion => {
    console.log("Name: " + Politicion.Name +" Position: " + Politicion.Position+ " Party: "+Politicion.Party);
});
