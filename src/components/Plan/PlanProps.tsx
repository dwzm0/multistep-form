/* eslint-disable @typescript-eslint/no-var-requires */
const planProps = {
  arcadeLogo: require('../../images/icon-arcade.svg').default,
  advancedLogo: require('../../images/icon-advanced.svg').default,
  proLogo: require('../../images/icon-pro.svg').default,
  plans: {
    arcade: {
      title: 'Arcade',
      price: {
        yearly: 90,
        monthly: 9
      }
    },
    advanced: {
      title: 'Advanced',
      price: {
        yearly: 120,
        monthly: 12
      }
    },
    pro: {
      title: 'Pro',
      price: {
        yearly: 150,
        monthly: 15
      }
    }
  },
  darkText: true,
  headerText: 'Select your plan',
  subText: 'You have, the option of monthly or yearly billing.',
  togglerMonth: 'Monthly',
  togglerYear: 'Yearly'
}

export default planProps
