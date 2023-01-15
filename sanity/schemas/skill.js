
export default {
  name: 'skill',
  title: 'skill',
  type: 'document',
  fields: [
  {
    name:"title",
    title:"Title",
    description:"Title of the skill",
    type:"string",
  },
  {
    name:"image",
    title:"Image",
    type:"image",
    options:{
      hotspot:true,
    },  
  },
  {
    name:"progress",
    title:"Progress",
    description:"Progress of skill 0 to 100",
    validation: (Rule) => Rule.min(0).max(100),

    type:"number",
  },
  ],
}
