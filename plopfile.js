const path = require('path')

const componentsFolder = path.join('src', 'components')
const templateFolder = 'templates'

module.exports = plop => {
  plop.setGenerator('Create Component', {
    description: 'Create basic component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name in PascalCase, e.g. ProgressBar:\n'
      }
    ],
    actions (data) {
      data.libraryName = `Ok${data.name}`
      data.absoluteComponentFolder = path.join(__dirname, componentsFolder, data.name)

      return [
        {
          type: 'add',
          path: '{{absoluteComponentFolder}}/{{libraryName}}.vue',
          templateFile: `${templateFolder}/component.vue.hbs`
        },
        {
          type: 'add',
          path: '{{absoluteComponentFolder}}/{{libraryName}}.spec.js',
          templateFile: `${templateFolder}/component.spec.js.hbs`
        },
        {
          type: 'add',
          path: '{{absoluteComponentFolder}}/{{libraryName}}.css',
          templateFile: `${templateFolder}/component.css.hbs`
        },
        {
          type: 'add',
          path: '{{absoluteComponentFolder}}/{{libraryName}}.md',
          templateFile: `${templateFolder}/component.md.hbs`
        },
        {
          type: 'add',
          path: '{{absoluteComponentFolder}}/{{libraryName}}.stories.ts',
          templateFile: `${templateFolder}/component.stories.ts.hbs`
        },
        {
          type: 'add',
          path: '{{absoluteComponentFolder}}/index.ts',
          templateFile: `${templateFolder}/component.index.ts.hbs`
        },
        {
          type: 'append',
          pattern: 'ADD COMPONENT EXPORTS - Needed for yarn generate:component. Do not remove',
          path: 'src/components/index.ts',
          template: 'export { default as {{libraryName}} } from \'./{{name}}\''
        }
      ]
    }
  })
}
