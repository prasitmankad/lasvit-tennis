export default {
  name: 'teamMemberReference',
  type: 'object',
  title: 'Team Member Reference',
  fields: [
    {
      name: 'teamMember',
      type: 'reference',
      to: [
        {
          type: 'teamMember'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'teamMember.name',
      media: 'teamMember.image.asset'
    }
  }
}
