# bchart

Ever needed a chart on your website to show your product statistics? If so, BChart will cover these needs for you with a pre-built simplistic UI an totally customizable.

> BChart is a pre-modeled bar chart for your projects.

| Prop | Description | Type | Required |
| -----| ---------- | ----- | -------- |
| total | Total of the thing you are making a graphic of.<br> Ex: Total of 40 customers in 6 months | number | true |
| oscillation | Number for each month, oscillation of numbers.<br> Ex: First month we had 15 customers, second we had 10, ... [15, 10]<br> This is required for bchart to build the graphic. | Array\<number> | true |
| labels | Labels for each timestamp.<br> Ex: ['January', 'February', 'March', ...].<br> This is essentially the chart header. | Array\<string> | true |
| columnsColor | This is an styling prop. Used to change the columns color. The default columns color is #48BB78 (light green). | string | false |
| chakraProps | All the props derived from ChakraProps. Opens a world of customization. | ChakraProps | false |

## 👨‍💻 Technologies

- NextJS
- Typescript
- ChakraUI
- NPM

## ⭐ Contributing

Any type contribution is totally welcome. Feel free to fork, make pull requests, open issues and etc. on this repo.

### Thanks for your support!
