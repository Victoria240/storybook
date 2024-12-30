/** @type { import('@storybook/react').Preview } */

// Import Font Awesome and add icons to the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Add Font Awesome icons to the library
library.add(fas, far);

// Define Storybook preview configuration
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
