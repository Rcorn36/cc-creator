
export const University = {

EverestUniversity: {
    name: "Everest University",
    moStart: "April",
    yearStart: "2011",
    moFinish: "March",
    yearFinish: "2013",
    majorStudied: "International Business",
    degEarned: "Associate of Science",
    schoolIcon: "/images/OIP.jpg",  
},

PurdueUniversity: {
    name: "Purdue University",
    moStart: "April",
    yearStart: "2013",
    moFinish: "June",
    yearFinish: "2015",
    majorStudied: "Legal Studies",
    degEarned: "Bachelor of Science",
    schoolIcon: "/images/OIP2.jpg",
},

UniversityOfArizona: {
    name: "University of Arizona",
    moStart: "February",
    yearStart: "2024",
    moFinish: null,
    yearFinish: "Current",
    majorStudied: "Organizational Management",
    degEarned: "Master of Arts",
    schoolIcon: "/images/OIP3.jpg",
}

} as const

export const UniversityInOrder = [
    University.EverestUniversity,
    University.PurdueUniversity,
    University.UniversityOfArizona,
] as const