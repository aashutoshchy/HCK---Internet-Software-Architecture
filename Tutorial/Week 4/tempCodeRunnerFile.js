const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1982, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 2001, end: 2009 },
  { name: "Company Five", category: "Technology", start: 1995, end: 2010 },
  { name: "Company Six", category: "Finance", start: 2006, end: 2012 },
];

for (let i = 0; i < companies.length; i++) {
  if (companies[i].end - companies[i].start == 10) {
    console.log(companies[i].name);
  }
}
