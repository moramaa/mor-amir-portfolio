
export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
  {
    name:"JobTitle",
    title:"JobTitle",
    type:"string",
  },
  {
    name:"companyImage",
    title:"CompanyImage",
    type:"image",
    options:{
      hotspot:true,
    },  
  },
  {
    name:"company",
    title:"Company",
    type:"text",
  },
  {
    name:"dataStarted",
    title:"DataStarted",
    type:"date",
  },
  {
    name:"dataEnded",
    title:"DataEnded",
    type:"date",
  },
  {
    name:"isCurrentlyWorkingHere",
    title:"IsCurrentlyWorkingHere",
    type:"boolean",
  },
  {
    name:"technologies",
    title:"Technologies",
    type:"array",
    of:[{type:"reference", to:{type:"skill"}}]
  },
  {
    name:"points",
    title:"points",
    type:"array",
    of:[{type:"string"}],
  },

  ],
  
}
