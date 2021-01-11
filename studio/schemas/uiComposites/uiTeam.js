export default {
    type: "object",
    name: "uiTeam",
    title: "Team Members Section",
  
    fieldsets: [
      {
        name: "descriptor",
        title: "Plain Content Block",
        description:
          "Section to identify one or more members of the team / company / website.",
      },
    ],
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Title for the section.",
        fieldset: "descriptor",
      },
      {
        name: "subtitle",
        type: "string",
        title: "Subtitle",
        description: "Subtitle for the section.",
        fieldset: "descriptor",
      },
      {
        name: "paragraph",
        type: "bodyPortableText",
        description: "Paragraph text for the section.",
        fieldset: "descriptor",
      },
      {
        name: 'team_members',
        title: 'Team Members',
        type: 'array',
        description:'Add in one or more (pre-defined) team members that are part of the team.',
        validation: Rule => Rule.error('Please select at least one team member.').required(),
        of: [
          {
            type: 'authorReference',
          },
        ],
      },
    ],
    preview: {
      select: {
        title: "title",
        disabled: "disabled",
      },
      prepare({ title }) {
        return {
          title: `${title}`,
        };
      },
    },
  };
  

